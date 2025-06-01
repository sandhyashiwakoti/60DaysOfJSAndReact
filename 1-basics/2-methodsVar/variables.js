if (true) {
  var a = 3;
  var a = 9;
  //   block-scoped(let,const), can't find a
  //   function-scoped(var), can find a
  //   let a = 6;
  //   const a = 6;
}
const name = "Sandhya's home";
console.log(name);

// Concatenation
let firstName = "Sandhya";
let lastName = "Shiwakoti";
let fullName = firstName + " " + lastName;
console.log(fullName);

// DataType
let num = 5;
num = "hello";
num += 5;
console.log(num);
