// Q1. Calculate BMI for each person

// You have an array of people with weight (kg) and height (m). Use map() to create a new array of objects containing their name and BMI (rounded to 2 decimals).

// const people = [
//   { name: "Alice", weight: 68, height: 1.65 },
//   { name: "Bob", weight: 85, height: 1.8 },
//   { name: "Charlie", weight: 54, height: 1.6 }
// ];

// Output:
// [
//   { name: "Alice", BMI: 24.98 },
//   { name: "Bob", BMI: 26.23 },
//   { name: "Charlie", BMI: 21.09 }
// ]

const people = [
  { name: "Alice", weight: 68, height: 1.65 },
  { name: "Bob", weight: 85, height: 1.8 },
  { name: "Charlie", weight: 54, height: 1.6 }
];

const calculate = people.map(item => {
    obj = {
        'name' : item.name,
        'bmi' : (item.weight / (item.height ** 2)).toFixed(2)
    };
    return obj;
});

console.log(calculate);



// Q2. Add a greeting property

// You have an array of users. Use map() to add a new property greeting that says "Hello, [name]! Your age is [age]."

// const users = [
//   { name: "Zaheer", age: 21 },
//   { name: "Ronaldo", age: 36 },
//   { name: "Messi", age: 34 }
// ];

// Output:
// [
//   { name: "Zaheer", age: 21, greeting: "Hello, Zaheer! Your age is 21." },
//   ...
// ]

const users = [
  { name: "Zaheer", age: 21 },
  { name: "Ronaldo", age: 36 },
  { name: "Messi", age: 34 }
];

// const greet = users.map(user => `Hello, ${user.name}!`)
// console.log(greet);

// const {...rest} = users;
// console.log(rest);

const greetuser = users.map(user => {
    obj = {
        'name' : user.name,
        'age' : user.age,
        'greeting' : `Hello ${user.name}!`
    };
    return obj;
});
console.log(greetuser);




// Q3. Full name and initials

// You have an array of employees. Use map() to create a new array with full name and initials.

// const employees = [
//   { firstName: "John", lastName: "Doe" },
//   { firstName: "Jane", lastName: "Smith" },
//   { firstName: "Alice", lastName: "Johnson" }
// ];

// Output:
// [
//   { fullName: "John Doe", initials: "JD" },
//   { fullName: "Jane Smith", initials: "JS" },
//   { fullName: "Alice Johnson", initials: "AJ" }
// ]

const employees = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Jane", lastName: "Smith" },
  { firstName: "Alice", lastName: "Johnson" }
];

const name = employees.map(employee => {
    obj = {
        'fullName' : employee.firstName.concat(" ").concat(employee.lastName),
        'initials' : employee.firstName[0].concat(employee.lastName[0])
    };
    return obj;
});

console.log(name);



// Q4. Discounted prices

// You have an array of products. Use map() to add a discountedPrice property (10% off). Round to 2 decimals.

// const products = [
//   { name: "Laptop", price: 800 },
//   { name: "Phone", price: 500 },
//   { name: "Tablet", price: 300 }
// ];

// Output:
// [
//   { name: "Laptop", price: 800, discountedPrice: 720 },
//   { name: "Phone", price: 500, discountedPrice: 450 },
//   { name: "Tablet", price: 300, discountedPrice: 270 }
// ]

const products = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 }
];

const discount = products.map(product => {
    obj = {
        'name' : product.name,
        'price' : product.price,
        'discount' : product.price - (product.price * 10 / 100)
    };
    return obj;
});

console.log(discount);


// Q5. Convert nested objects

// You have an array of students with subjects and scores. Use map() to create a summary array with student name and average score.

// const students = [
//   { name: "Alice", scores: { math: 90, english: 80, science: 85 } },
//   { name: "Bob", scores: { math: 70, english: 75, science: 80 } },
//   { name: "Charlie", scores: { math: 95, english: 85, science: 90 } }
// ];

// Output:
// [
//   { name: "Alice", avgScore: 85 },
//   { name: "Bob", avgScore: 75 },
//   { name: "Charlie", avgScore: 90 }
// ]

const students = [
  { name: "Alice", scores: { math: 90, english: 80, science: 85 } },
  { name: "Bob", scores: { math: 70, english: 75, science: 80 } },
  { name: "Charlie", scores: { math: 95, english: 85, science: 90 } }
];

const studentmak = students.map(student => {
  const average = Object.values(student.scores).reduce((first, second) => first + second, 0) / Object.values(student.scores).length;
  // console.log(average);
  
  obj = {
    'name' : student.name,
    'avgscore' : average
  }
  return obj;
})

console.log(studentmak);
