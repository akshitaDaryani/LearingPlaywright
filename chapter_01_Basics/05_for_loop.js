console.log("For loop in JavaScript");
console.log("Print Hello 5 times");
for(i=0; i<5; i++){
    console.log(i + " Hello");
}
console.log("Print numbers from 1 to 10");
for(i=1; i<10; i++){
    console.log(i);
}

console.log("Print even numbers from 1 to 20");

for(i=2; i<=20; i+=2){
    console.log(i);
}
console.log("2nd way to Print even numbers from 1 to 20");
for(i=1; i<=20; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}
console.log(" Print the sum of first 10 natural numbers");
let sum = 0;
for(i=1; i<=10; i++){
    sum = sum + i;
}   

console.log(" Print the multiplication table of 5");   
for(i=1; i<=10; i++){
 console.log(i*5);
}

console.log("While loop in javascript"); 
console.log(" Print Playwright 5 times");
let j = 1;
while(j<=5){
    console.log("Playwright");
    j++;
}
console.log("Print numbers from 1 to 10");
let k = 1;
while(k<=10){   
    console.log(k);
    k++;
}
console.log("Print even numbers from 1 to 20");
let l = 1;
while(l<=20){
    if(l % 2 == 0){
        console.log(l);
    }
    l++;
}   

console.log(" Print the sum of first 10 natural numbers");
let m = 1;
let sum1=0;
while(m<=10)
{
    sum1 = sum1+m;
    m++;
    
}
console.log("Sum of first 10 natural numbers is: " + sum1);

console.log(" Print the multiplication table of 7");
let n = 1;
while(n<=10){
    console.log("Multiplication table of 7: " + n*7);       
    n++;    
}
