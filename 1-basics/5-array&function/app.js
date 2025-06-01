// Array
let a = [2, 3, "abc", undefined, null];
console.log(a);
console.log(a[2]);
console.log(a[5]);
a[1] = "Hello";
console.log(a);
console.log(a[1]);

// Function
function display() {
  console.log("hello");
  console.log("world");
}
display();
display();

let firstName = "San";
function greet(name) {
  console.log("Hello " + name);
}
greet("Mini");
greet(firstName);

function calculate(num1, num2) {
  let sum = num1 + num2;
  return sum;
  console.log(num1 + num2); //ignores after return codes
}
sum = calculate(2, 4);
console.log(sum);

// Anonymous function
calculateSum = function (num1, num2) {
  return num1 + num2;
};
console.log(calculateSum(2, 3));

// Arrow function
calculateMul = (num1, num2) => num1 * num2;
console.log(calculateMul(2, 3));
