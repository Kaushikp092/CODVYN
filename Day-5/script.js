let numbers = [];
for (let i = 1; i <= 50; i++) {
    numbers.push(i)
}
console.log(numbers); //store all numbers in array

function filterEvenNumbers(){
    let even = numbers.filter((num) => num % 2 === 0)
    return even;
}
console.log(filterEvenNumbers()); //filter only even numbers

let student = {
    name: "kaushik",
    age: 21,
    skills : ['React','Tailwind','MongoDB'],
}

student.skills.push("Node.js"); //added new skills to objects skills arr

for (const el in student) {
    console.log(el, student[el]);//loop to prints all keys and values fo the object
}




