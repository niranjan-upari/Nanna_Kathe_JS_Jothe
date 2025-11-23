console.log("1. If-Else COndition");
const age = 33
if(age>18){
    console.log("Adult")
}
else
    console.log("minur")

const man = true
if (!man){ // here I'm not changing the constant vale, if condition takes inverted man, means it will take it as false. This is only valid for boolean.
    console.log("he is man")
}
else{
    console.log("He isn't man")
}

console.log("\n 2. Conditional operator ‘?’")
console.log("let result = condition ? value1 : value2;")
let result = (18>1) ? true : false
console.log(result)

console.log("\n 2.1 Multiple '?'")
let your_age = 75;
let your_age_is = 
    (18>your_age && your_age>0)? 'You are child!':
    (60>your_age && your_age>45) ? 'you crossed 45' :
    (70>your_age && your_age>60) ? 'you crossed 60' : 'you became old';

console.log(your_age_is)
