console.log("Type conversions");

console.log("\n 1. String conversion")
let a = true;
console.log(typeof a)

a = String(a)
console.log(typeof a)
// converted 'a' as a boolean to string

console.log("\n 2. Numeric conversion")
let b = "12345";
console.log(typeof b)

b = Number(b)
console.log(typeof b)
// converted 'b' as a string to number

console.log("\n 3. Boolean conversion")
let c = "true"
console.log(typeof c)

c = Boolean(c)
console.log(typeof c)
// converted 'c' as a string to boolean

// console.log("\n")
let d = Boolean(1)
console.log("\n",d)
console.log(typeof d)

let e = Boolean("Hello")
console.log("\n",e)
console.log(typeof e)

let f = Boolean("")
console.log("\n",f)
console.log(typeof f)

let g = Boolean(0)
console.log("\n",g)
console.log(typeof g)