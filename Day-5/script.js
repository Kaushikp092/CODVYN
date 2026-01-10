// let numbers = [];
// for (let i = 1; i <= 50; i++) {
//     numbers.push(i)
// }
// console.log(numbers); //store all numbers in array

// printing number 1 to 50 printing "even" for even numbers and printing odd number directly
for (let i = 1; i <= 50; i++) {
   if (i % 2 === 0) {
      console.log("even");
   } else {
      console.log(i);
   }
} //prints "even" for even

// An array of numbers and a function that returns only even numbers using filter
function filterEvenNumbers(arr){
    return arr.filter(num => num % 2 === 0)
    //filter out all evens number and stored in even variable
}

console.log(filterEvenNumbers([23,32,22,15,74,24]));

// function filterEvenNumbers(){
//     let even = numbers.filter((num) => num % 2 === 0)
//     return even;
// }
// console.log(filterEvenNumbers()); //filter only even numbers

let student = {
   name: "kaushik",
   age: 21,
   skills: ["React", "Tailwind", "MongoDB"],
};

student.skills.push("Node.js"); //added new skills to objects skills arr

for (const key in student) {
   console.log(key, student[key]); //loop to prints all keys and values fo the object
}
