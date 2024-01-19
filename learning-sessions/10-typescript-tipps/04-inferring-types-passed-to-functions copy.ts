/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
// you do not always have to pass the types to the generic function
// typescript is sometimes able to infer the type by itself like here:

const addIdToObjectWithoutInfer = <T>(obj: T): T & { id: string } => {
  return {
    ...obj,
    id: "123",
  };
};

// here you explicitly define the type
const result = addIdToObjectWithoutInfer<{
  firstName: string;
  lastName: string;
}>({
  firstName: "foo",
  lastName: "bar",
});
console.log(result.id);

// the type can be infered by typescript
const addIdToObjectWithInfer = <T>(obj: T) => {
  return {
    ...obj,
    id: "123",
  };
};

// HERE typescript infers the type from the parameter
const result2 = addIdToObjectWithInfer({
  firstName: "foo",
  lastName: "bar",
});

console.log(result.id);

export {};

// https://levelup.gitconnected.com/using-typescript-infer-like-a-pro-f30ab8ab41c7s
