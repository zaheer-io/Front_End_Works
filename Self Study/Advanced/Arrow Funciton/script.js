// // array.map(element => expression)


// // Write an arrow function square that takes a number and returns its square.

// const square = (num) => {
//     return num ** 2;
// };

// console.log(square(5));


// // Write an arrow function greet that prints "Hello, World!".

// const hello = () => "Hello world";
// console.log(hello());


// // Convert this function to an arrow function:

// // function isEven(num) {
// //   return num % 2 === 0;
// // }


// const EvenOrOdd = (num) => num % 2 == 0 ? 'Even' : 'Odd';
// console.log(EvenOrOdd(6));



// // Intermediate

// // Use an arrow function with map() to square all numbers in an array [1,2,3,4,5].

// array =  [1,2,3,4,5]
// const squareAll = array.map(num => num ** 2);
// console.log(squareAll);


// // Write an arrow function max that takes two numbers and returns the larger one.

// const max = (a, b) => a > b ? a : b;
// console.log(max(60, 20));


// Use an arrow function with filter() to get only even numbers from [10, 15, 20, 25, 30].

// Use an arrow function with reduce() to find the sum of [1, 2, 3, 4, 5].



// Q1. Double numbers

// You have an array of numbers. Use map to return a new array with each number multiplied by 2.

// const numbers = [1, 2, 3, 4, 5];
// // Output: [2, 4, 6, 8, 10]

const numbers = [1, 2, 3, 4, 5];
const multiple = numbers.map(num => num *2)
console.log(multiple)

// Q2. Extract clubs from players

// You already extracted names, now extract only the club of each player into a new array.

// const players = [
//   { name: "Messi", goals: 30, club: "Inter Miami" },
//   { name: "Ronaldo", goals: 25, club: "Al Nassr" },
//   { name: "Neymar", goals: 20, club: "Al Hilal" }
// ];
// // Output: ["Inter Miami", "Al Nassr", "Al Hilal"]

const players = [
  { name: "Messi", goals: 30, club: "Inter Miami" },
  { name: "Ronaldo", goals: 25, club: "Al Nassr" },
  { name: "Neymar", goals: 20, club: "Al Hilal" }
];

const clubNames = players.map(club => club.club);
console.log(clubNames)

// Q3. Convert strings to uppercase

// Take an array of fruit names and use map to convert each one to uppercase.

// const fruits = ["apple", "banana", "mango"];
// // Output: ["APPLE", "BANANA", "MANGO"]

const fruits = ["apple", "banana", "mango"];

console.log(fruits.map(fruit => fruit.toUpperCase()));


// Q4. Length of each word

// Given an array of words, return a new array containing the length of each word.

// const words = ["JavaScript", "Map", "Function"];
// // Output: [10, 3, 8]

const words = ["JavaScript", "Map", "Function"];
console.log(words.map(word => word.length));


// Q5. Create sentences from objects

// You have an array of student objects. Use map to create sentences like:
// "Alice is 20 years old."

// const students = [
//   { name: "Alice", age: 20 },
//   { name: "Bob", age: 22 },
//   { name: "Charlie", age: 19 }
// ];
// // Output: ["Alice is 20 years old.", "Bob is 22 years old.", "Charlie is 19 years old."]

const students = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 22 },
  { name: "Charlie", age: 19 }
];

const sentences = students.map(student => {
    return `${student.name} is ${student.age} is old`
});
console.log(sentences);

// const sentences = students.map(student => student.name + " is " + student.age + " year old");
// console.log(sentences);
