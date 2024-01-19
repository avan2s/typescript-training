/**
 * It is like omit in a key type safe variant for ommitting keys,
 * which really exist
 */
type OmitSafe<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};
