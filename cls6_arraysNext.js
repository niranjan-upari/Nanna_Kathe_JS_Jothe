console.log("1. use of REDUCE method")
console.log("It will help to replace for loop. The thing which for loop does, 'reduce' will do in single line")
// let multiply=1 -- node need to declare.
let numbers = [20, 40, 60, 80]
let total = numbers.reduce((multiply, i)=>multiply*i, 1)
console.log(total)

console.log("\nQ) Create a new array having even numbers in it")
evenScores = []
let scores = [22, 23, 24, 25, 26]
console.log("Original Scores", scores)
for(i=0 ; i<scores.length; i++){
    if(scores[i]%2 == 0){
        evenScores.push(scores[i])
    }
}
console.log("Even Scores",evenScores)
console.log("Above code we can achieve with 'Filter' method")

console.log("\n2.use of FILTER method")
let filterEvenScores= scores.filter(i=>i%2 == 0)
console.log("Even Scores by using FILTER function",filterEvenScores)


console.log("\n3.use of MAP method")
console.log("It calls the function for each element of the array and returns the array of results")
let result = [22, 25, 30, 33]
//Map method is used for each element. Now will multiply all array elements by 3
let multipliedResults = result.map(i=>i*3)
console.log(multipliedResults)

console.log("\nlets chain all 3 method.")
console.log("Q) take the even numbers from an array, multiply each element with 3 & add all elemets")
let nnumbers = [1,2,3,4,5]
let output = nnumbers.filter(i=>i%2==0).map(j=>j*3).reduce((s,k)=>s+k,0)
console.log(output)