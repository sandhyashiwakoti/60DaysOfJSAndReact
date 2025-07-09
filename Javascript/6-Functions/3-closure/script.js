function outer() {
  let privateVar = "secret";
  function inner() {
    console.log(`hello there secret is : ${privateVar}`);
  }
  return inner;
  // results error
  // console. log(privateVar);
}
outer()();

const value = outer();
console.log(value);
value();
