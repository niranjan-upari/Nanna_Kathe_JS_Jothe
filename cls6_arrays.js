console.log("1. Method 1 to declare arrays")
let marks = Array(6)
marks = new Array(10, 20, 30, 40, 50, 60)
console.log(marks)
console.log(marks.length)

console.log("\n2. Method 2 to declare arrays")
let total = [20, 40, 60, 80, 100]
console.log(total)
console.log(total[3])
total[3] = 85
console.log(total)
total.push(99)
console.log(total)
total.pop()
console.log(total)
total.unshift(10)
console.log(total)

console.log(total.indexOf(60))

// to check 133 is present in array? -> True/False
console.log("\n",total.includes(133))

//to extract a range from array
let limit = [1,2,3,4,5,6,7,8]
sublimit = limit.slice(2,5) // range is m to n-1
console.log("\n",sublimit)

for(let i = 0 ; i<limit.length ; i++){
    console.log(limit[i])
}

console.log("\nQ- add all the numbers present in array - limit")
let sum = 0
for(let i=0; i<limit.length; i++){
    sum += limit[i] // sum=sum+limit[i]
}
console.log("total is "+ sum)
