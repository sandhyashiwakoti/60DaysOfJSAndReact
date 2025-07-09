sayHi();
const john = "John";
const peter = "Peter";

function sayHi(person = "Susan") {
  console.log(`Hi ${person}`);
}
// error as var must be declared before call
// sayHello();

const sayHello = (person = "BOB") => console.log(`Hello ${person}`);
sayHello(peter);
