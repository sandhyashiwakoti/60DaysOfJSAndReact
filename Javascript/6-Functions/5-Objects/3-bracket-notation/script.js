const age = 40;
let random = "random-value";
random = "age";

const person = {
  name: "john",
  age: 25,
  married: true,
  siblings: ["anna", "peter"],
  greet: function (name) {
    console.log("Hello, my name is ${name}");
  },
  sayHello(name) {
    console.log("Hello, my name is ${name}");
  },
  "random-value": 23,
};

console.log(person["age"]);
console.log(person[age]);

console.log(person["random-value"]);
console.log(person[random]);
