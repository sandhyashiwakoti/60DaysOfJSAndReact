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
  job: {
    title: "developer",
    company: {
      name: "coding addict",
      address: "123 main street",
    },
  },
};

console.log(person.job.title);
console.log(person.job.company.address);
console.log(person);
