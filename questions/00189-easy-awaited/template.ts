// type MyAwaited<T> = T extends Promise<infer P> ? MyAwaited<P> : T

type MyAwaited<T extends Promise<any>> = T extends Promise<infer K>
  ? K extends Promise<any>
    ? MyAwaited<K>
    : K
  : T
