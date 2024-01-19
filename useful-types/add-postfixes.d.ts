type AddPostfixes<T extends object, U extends object> = T &
  ({
    [K in keyof U]: (x: {
      [P in keyof T as `${Exclude<P, symbol>}${Exclude<K, symbol>}`]: U[K];
    }) => void;
  } extends Record<string, (x: infer I) => void>
    ? I
    : never);
