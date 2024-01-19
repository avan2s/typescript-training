type ElementOf<T> = T extends (infer E)[] ? E : never;
