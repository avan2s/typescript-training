/* eslint-disable @typescript-eslint/no-unused-vars */
// Sometimes you need to constaint the generic
// that gets passed in
// here we want to return any key of a passed object with the highest value
// the name of the key should be returned with its highest found number

// TObj must be constrained to be iterable with Object.keys

const getKeyWithHighestValue = <TObj extends Record<string, number>>(
  obj: TObj
): /** this is the return type */ { key: keyof TObj; value: number } => {
  const keys = Object.keys(obj) as Array<keyof TObj>;
  let highestKey: keyof TObj = keys[0];
  let highestValue = obj[highestKey];

  for (const key of keys) {
    if (obj[key] > obj[highestKey]) {
      highestKey = key;
      highestValue = obj[key];
    }
  }

  return { key: key, value: highestValue };
};

const result = getKeyWithHighestValue({
  a: 1,
  b: 2,
  c: 3,
});

// will return c
const key = result.key;
// will return 3
const maxValue = result.value;
