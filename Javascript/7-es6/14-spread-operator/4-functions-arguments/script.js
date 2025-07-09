const numbers = [23, 45, 66, 88, 2345];

// error- NaN
// console.log(Math.max(numbers));

console.log(Math.max(...numbers));

const john = ["john", "sanders"];

const sayHello = (name, lastName) => {
  console.log(`Hello ${name} ${lastName}`);
};

sayHello(john[0], john[1]);
// easier and faster
sayHello(...john);
