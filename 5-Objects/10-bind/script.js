const john = {
  name: "john",
  age: 24,
};
const susan = {
  name: "susan",
  age: 21,
};

function greet(city, country) {
  console.log(this);
  console.log(
    `Hello, I'm ${this.name} and I'm ${this.age} years old and I live in ${city}, ${country}`
  );
}

console.log("---Bind---");
// No output
greet.bind(john, "san diego", "us");

// Assign & Use later
const susanGreet = greet.bind(susan, "san diego", "us");
susanGreet();
