let name = "bobo";

function calculate() {
  const name = "john";
  const age = 25;
  becomesGlobal = "global variable";
}
calculate();
console.log(becomesGlobal);

if (true) {
  const name = "john";
  const special = "special";
}
console.log(`${special}`);
console.log(`my name is ${name} and I'm awesome`);
