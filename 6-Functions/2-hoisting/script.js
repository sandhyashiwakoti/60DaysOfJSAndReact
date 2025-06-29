// Hoisting
// function and var declarations are hoisted
// safer to access only after initialized

display();
moreComplex();
console.log(display);
console.log(moreComplex);
// error as const and let aren't hoisted
console.log(firstName);
// console.log(lastName);

// only the var is moved to the top, so it provides output undefined
// console. log(random);

const firstName = "john";
let lastName = "jordan";
var random = "random";

function display() {
  console.log("hello world");
}

function moreComplex() {
  console.log(" ${random}");
}
