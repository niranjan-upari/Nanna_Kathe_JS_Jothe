console.log("\n 1. While loop")
let i = 0
while (i<10){
    i++;
    console.log(i)
}


console.log("\n 2. Do-while loop")
let j = 0
do{
    j++;
    console.log(j);

}while(j<5);


console.log("\n 3. For loop")
for(let k = 0; k<=10; k++){
    console.log(k)
}

console.log("\nQ1- From 1 to 10 give me the common multiple values of 2 & 5")
for(let l = 1 ; l<=10 ; l ++){
    if(l%2 == 0 && l%5 == 0){
        console.log(l)
    }
}

console.log("\nQ2- From 1 to 10 give me the common multiple values of 2 or 5")
for(let m = 1 ; m<=10 ; m++){
    if(m%2 == 0 || m%5 == 0){
        console.log(m)
    }
}

console.log("\nBREAK statement")
console.log("\nQ3- From 1 to 100 give me the first 3 common multiple values of 2 and 5")

let o = 0 // for counting
for(let n = 1 ; n<=100 ; n++){
    if(n%2 == 0 && n%5 == 0){
        o++
        console.log(n)
        if(o==3){
            break
        }
    }
}

console.log("\nSwitch statement")
let a = 2 + 2;

switch (a) {
  case 3:
    console.log( 'Too small' );
    break;
  case 4:
    console.log( 'Exactly!' );
    break;
  case 5:
    console.log( 'Too big' );
    break;
  default:
    console.log( "I don't know such values" );
}