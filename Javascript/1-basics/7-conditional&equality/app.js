if (true) {
  console.log("hello");
}
if (!true) {
  console.log("hi");
}

value = 4 < 2;
if (value) {
  console.log("True");
} else {
  console.log("False");
}

const num1 = 6,
  num2 = "6";
// console.log((num1 = num2));//error
console.log(num1 == num2); //True -> checks value
console.log(num1 === num2); //False -> checks both value, datatype
