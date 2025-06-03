let name = "bobo";
name = "peter";

function calculate() {
  console.log(name);
  name = "orange";
  function inner() {
    name = "inner name value";
    console.log(`this is from inner function ${name}`);
  }
  inner();
}

calculate();
if (true) {
  // some other code ...
  console.log(name);
  name = "pants";
}
console.log(`my name is ${name} and I'm awesome`);
