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
};

console.log(person);
console.log(person.name);

const name = person.name;
console.log(name);
person.age = 60;
person.city = "chicago";
// delete property
// delete person. siblings;
const siblings = delete person.siblings;
console.log(siblings);

console.log(person);
