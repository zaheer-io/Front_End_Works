// Given an array of numbers:

// const nums = [1, 2, 3, 4, 5];

// const nums = [1, 2, 3, 4, 5];

// // Use map to create a new array with each number doubled.

// const double = nums.map((item) => item ** 2);
// console.log(double)

// // Use filter to get only even numbers.

// const onlyEven = nums.filter((item) => item % 2 === 0);
// console.log(onlyEven);

// // Use reduce to calculate the sum of all numbers.

// const sum = nums.reduce((first, second) => first + second, 0);
// console.log(sum);


// // Use forEach to print each number with "Number is: X"

// const fore = nums.forEach((item) => {
//     console.log(`Number is ${item}`);
    
// });



// Objects inside Arrays

// Given an array of objects:

// const users = [
//   { name: "Ali", age: 22 },
//   { name: "Sara", age: 28 },
//   { name: "John", age: 17 },
//   { name: "Asha", age: 30 }
// ];

// const users = [
//   { name: "Ali", age: 22 },
//   { name: "Sara", age: 28 },
//   { name: "John", age: 17 },
//   { name: "Asha", age: 30 }
// ];


// // Use map to return only the name values.

// const onlyName = users.map((items) => {
//     return (
//         items.name
//     );
// });

// console.log(onlyName);


// // Use filter to get only users above 25.

// const above25 = users.filter((items) => {
//     return (
//         items.age > 25
//     )
// });
// console.log(above25)

// // Use reduce to calculate the total age of all users.

// const totalAge = users.reduce((acc, curr) => acc + curr.age, 0)

// console.log(totalAge);


// // Use forEach to print "User NAME is AGE years old".

// users.forEach(items => {
//     console.log(`User ${items.name} is ${items.age} Year old`);
    
// })




// Array Transformations

// Given:

// const products = [
//   { id: 1, name: "Phone", price: 1000 },
//   { id: 2, name: "Laptop", price: 3000 },
//   { id: 3, name: "Headphones", price: 500 }
// ];

// const products = [
//   { id: 1, name: "Phone", price: 1000 },
//   { id: 2, name: "Laptop", price: 3000 },
//   { id: 3, name: "Headphones", price: 500 }
// ];

// // Use map to apply a 10% discount to each product.

// function discount(price, discount){
//     return (price - (price * discount) / 100);
// }

// const dix = products.map(item => {
//     return({
//         id : item.id,
//         name : item.name,
//         price: item.price,
//         discount : discount(item.price, 10)
//     });
// });

// console.log(dix)

// // Use filter to get products priced above 1000.

// const re = products.filter(item => {
//     return item.price > 1000;
// });
// console.log(re);


// // Use reduce to find the total price of all products.

// const red = products.reduce((acc, curr) => acc + curr.price ,0);
// console.log(red);

// Use forEach to print "Product: NAME, Price: PRICE".

// 🔹 Nested Data

// Given:

// const orders = [
//   { id: 1, items: [100, 200, 300] },
//   { id: 2, items: [400, 500] },
//   { id: 3, items: [600] }
// ];


const orders = [
  { id: 1, items: [100, 200, 300] },
  { id: 2, items: [400, 500] },
  { id: 3, items: [600] }
];

// Use map to return an array of total amounts for each order.

const arr = orders.map(item =>{
    return ({
        id : item.id,
        items : item.items,
        total : item.items.reduce((acc, curr) => acc + curr, 0)
    });
});

console.log(arr);


// Use reduce to get the grand total of all orders combined.

const grandTota = orders.items.reduce((acc, curr) => acc + curr, 0);

console.log(grandTota);


// 🔹 Trickier Ones

// Given:

// const scores = [90, 80, 100, 70, 60];


// Use map to convert each score into "Pass" or "Fail" (pass if ≥ 70).

// Use reduce to find the highest score.

// Use filter + map together to get only the scores above 80 and double them.

// 🔹 Bonus Challenge (Chaining)

// Given:

// const movies = [
//   { title: "Movie A", rating: 8.5, year: 2019 },
//   { title: "Movie B", rating: 9.0, year: 2021 },
//   { title: "Movie C", rating: 7.2, year: 2018 },
//   { title: "Movie D", rating: 9.5, year: 2020 }
// ];


// Get all movies released after 2019,

// Sort them by rating (highest first),

// Return only their titles in an array.


