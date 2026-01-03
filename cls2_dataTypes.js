console.log("1. Numbers - For any kind of numbers")

let a = 33
console.log(typeof a)

const b = 11.11
console.log(typeof b)

let c = 1/0
console.log(c)
console.log(typeof c)

console.log("\n2. String -Must be surrounded by quotes")

let str = "good"
let str1 = 'better'
let str2 = `best ${"man"}`

console.log(str)
console.log(str1)
console.log(str2)

console.log("\n3. BigInt -integer numbers of arbitrary length----number must end with 'n'")
let n = 1234567890n
console.log(n + '', typeof(n))

console.log("\n4. Boolean - True/False")
let d = 5>1
console.log(d)

let e = 1!=1
console.log(e)

console.log("\n5. Null - For unknown values")
let f = null
console.log(typeof(f))
console.log("here we got typeof NULL as OBJECT. It's a well known JS bug since 1995. \nBut NULL is not an object. Null represents 'NOTHING' or 'empty value' ")

console.log("\n6.Undefined -It means 'Value not Assigned'. A variable is declared, but value not assigned")
let g
console.log(typeof(g))

console.log("\nScopes")
console.log("1. var => global/function level")
console.log("2 var => global/block leve{} & variable reinitialization is possible")
console.log("3. const =>global/block level{} & reinitialization is not possible")