// A function that adds two numbers
function addNumbers(a, b) {
    return a + b;
}
let sum = addNumbers(2,2);
console.log("sum" , sum);


// A function that checks if a number is even or odd
function checkEvenOdd(a, b) {
   let num = a + b;
   return num % 2 === 0 ? "Even" : "Odd"
}

let result = checkEvenOdd(12,2);
console.log("result" , result);


// A function that finds the largest of three numbers
function findLargest(a, b, c){
    return Math.max(a,b,c)
}

console.log(findLargest(111,1112,3));

// A function that converts Celsius to Fahrenheit
function celsiusToFahrenheit(c){
    return (c * 9 /5) + 32;
}
console.log(celsiusToFahrenheit(20));



