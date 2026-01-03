console.log("A function is a block of reusable code that performs a task when it is called.")
function add(a, b){
    return a+b
}

sum= add(3,5)
console.log(sum)

console.log("\nAnonymous functions=>function without name")
let sumOfIntegers= function(c,d){
    return c+d
}
console.log(sumOfIntegers(10, 20))

console.log("Arrow function")
let sumOfNumbers = (i, j)=>i+j
console.log(sumOfNumbers(20,30))