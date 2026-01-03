console.log("There are 2 sorts we must know, \n1.Sorting string array \n2.Sorting number array")
console.log("\n1. Soring string array")
let fruits=["banana", "mango", "grapes", "apple"]
console.log(fruits.sort()) //Ascending
console.log(fruits.reverse()) //Descending
 
console.log("\n2 Sorting number array-> we need to write custom method for number array")
let count =[10, 5, 25, 3, 33]
sorted1= count.sort((a,b)=>a-b) //Ascending
console.log(sorted1)
sorted2= count.sort((a,b)=>b-a) //Descending
console.log(sorted2)