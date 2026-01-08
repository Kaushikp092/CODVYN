// A function that adds two numbers
function add(a, b) {
    return a + b;
}
let sum = add(2,2);
console.log("sum" , sum);


// A function that checks if a number is even or odd
function OddEven(a, b) {
   let num = a + b;
   return num % 2 == 0 ? `Even` : `Odd`
}

let result = OddEven(12,2);
console.log("result" , result);


// A function that finds the largest of three numbers
function largestNum(a, b, c){
    if(a>b && a>c){
        return `num1 is greater then num2 and num3`
    }else if(b>a && b>c){
        return `num2 is greater then num1 and num3`
    }else{
        return `num3 is greater then num1 and num2`
    }
}

console.log(largestNum(111,21,3));

// A function that converts Celsius to Fahrenheit
function converter(c){
    let result = `Celsius ${c} in Fahrenheit is ${(c * 9/5) + 32}`;
    return result;
}
console.log(converter(20));



