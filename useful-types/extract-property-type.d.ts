type ExtractPropertyType<T, K extends keyof T> = ReturnType<() => T[K]>;
