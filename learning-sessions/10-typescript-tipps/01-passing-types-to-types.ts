/* eslint-disable @typescript-eslint/no-unused-vars */
type MyGenericType<TData> = { data: TData };
type Example = MyGenericType<{ firstName: string }>;

const e: Example = {
  data: { firstName: "foo" },
};

type Example2 = MyGenericType<number>;
const e2: Example2 = {
  data: 120,
};

export {};
