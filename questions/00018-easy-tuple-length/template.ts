// type Length<T extends readonly any[]> = T['length']
// type Length<T extends readonly unknown[]> = T['length']
type Length<T extends readonly string[]> = T['length']
