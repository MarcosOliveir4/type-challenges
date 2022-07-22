type TupleToObject<T extends ReadonlyArray<PropertyKey>> = {
  [Key in T[number]]: Key
}
