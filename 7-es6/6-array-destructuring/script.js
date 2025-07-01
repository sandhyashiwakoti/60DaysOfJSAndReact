// Destructuring
// faster/easier way to access/unpack values from arrays
// objects into variables
// Arrays

const fruits = ["orange", "banana", "lemon"];
const friends = ["john", "peter", "bob", "anna", "kelly"];

// const orange = fruits[0];
// const banana = fruits[1];
// const lemon = fruits[2];
// console.log(orange, banana, lemon);

const [john, anyy, bob, anna, kelly, susan] = friends;
console.log(john, anyy, bob, anna, kelly, susan);

const [priya, pr] = friends;
console.log(priya, pr);

const [orange, , lemon] = fruits;
console.log(orange, lemon);
