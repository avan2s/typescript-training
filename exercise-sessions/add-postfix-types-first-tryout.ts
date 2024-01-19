/* eslint-disable @typescript-eslint/no-unused-vars */
// type AddPostfix<T, Postfixes extends Record<string, any>> = {
//   [K in keyof T as `${K & string}${string &
//     keyof Postfixes}`]: K extends `${string & infer Prefix}${string &
//     keyof Postfixes}`
//     ? boolean
//     : K extends keyof T
//     ? T[K]
//     : Postfixes[string & keyof Postfixes];
// } & T;

// the generic, where i got an error to infer:
// type AddPostfix<T, Postfixes extends Record<string, infer U>>

type OriginalType = {
  name?: string;
  age?: number;
  // any other property
};

// the generic allowes to define postfixes and the related type for their values
// in best case for any type not just for number | string | boolean
type ModifiedType = AddPostfixes<
  OriginalType,
  { Postfix1: number; Postfix2: string; Postfix3: boolean } // here the Postifex with their related type should be defined
>;

type AddPostfixes<T, Postfixes extends Record<string, any>> = {
  [K in keyof T as `${K & string}${string &
    keyof Postfixes}`]: K extends `${string & infer Prefix}${string &
    keyof Postfixes}`
    ? Prefix extends keyof Postfixes
      ? Postfixes[keyof Postfixes]
      : never
    : K extends keyof T
    ? T[K]
    : Postfixes[string & keyof Postfixes];
} & T;

// expected type for ModifiedType in this case
type ModifiedTypeExpected = {
  namePostfix1?: number;
  namePostfix2?: string;
  namePostfix3?: boolean;
  agePostfix1?: number;
  agePostfix2?: string;
  agePostfix3?: boolean;
} & OriginalType;

// actual type
// actual type for ModifiedType in this case
type ModifiedTypeActual = {
  name?: string;
  age?: number;
  namePostfix1?: string;
  namePostfix2?: string;
  namePostfix3?: string;
  agePostfix1?: number;
  agePostfix2?: number;
  agePostfix3?: number;
};

const m: ModifiedType = {};
export {};
