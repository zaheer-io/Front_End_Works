let player = {
    name: "Zaheer",
    age : 27,
    club : "PSG"
};

let player2 = {
    name : "Ronaldo",
    age : 36,
    club : "Al Nassr"
}

console.log(player);

let newPlayer = {...player}; // Spread Operator
let addplayer = {...player, ...player2}; // Merging two objects her both keys are unique that the player2 overrides the player1 keys



const firstplayer = {
    name : "zaheer",
    age : 27,
    club : "PSG"
};

const details = {
    address : "Zaheer manzil",
    country : "india", 
    phone_n0 :  5656565656
};

const funnDetails = {...firstplayer, ...details}; // Merging two objects her both keys are unique that the details overrides the firstplayer keys

console.log(funnDetails);

console.log(newPlayer);
console.log(addplayer);

