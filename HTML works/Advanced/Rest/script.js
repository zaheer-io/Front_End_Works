const player = {
    name : "zaheer", 
    age : 21,
    address : "Zaheer Manzil"
};

console.log(player);

const {name, ...rest} = player; // Rest Operator

console.log(name);
console.log(rest);
