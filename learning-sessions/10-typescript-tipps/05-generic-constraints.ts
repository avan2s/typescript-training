/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */

// get the resolved type after the promise is verified
type Type1 = Awaited<Promise<string>>;
// will be number
type Type2 = Awaited<Promise<number>>;

// @ts-expect-error - the  generic type T is not enough, it can be any type, but typescipt will
// complain ReturnType<T> since T can be anythin and must be restricted to a function.
type GetPromiseReturnTypeFailing<T> = Awaited<ReturnType<T>>;

// here we want to constaint, that T should be any function, which can be done with extends
// then we can get extract
type GetPromiseReturnType<T extends (...args: any) => any> = Awaited<
  ReturnType<T>
>;

// this is how we want to call it, which is allowed with a function
type Result2 = GetPromiseReturnType<
  () => Promise<{ firstName: string; lastName: string }>
>;

class SomeService {
  public async func() {
    return Promise.resolve({ foo: "bars" });
  }
}

type Result3 = GetPromiseReturnType<SomeService["func"]>;

// btw this is another possible working solution, using infer, to force typescript to infer the type out of an promise
type GetPromiseReturnType2<T> = T extends Promise<infer U> ? U : never;
type FuncReturnType = GetPromiseReturnType2<ReturnType<SomeService["func"]>>;

// @ts-expect-error - string is not a function
type ErrorLine = GetPromiseReturnType<string>;

export {};
