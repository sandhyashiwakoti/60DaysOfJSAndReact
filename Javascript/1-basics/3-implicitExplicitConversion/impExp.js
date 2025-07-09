// let num1 = "2",
//   num2 = 3,
//   num3 = "a";
// let result = num3 - num2; //Nan

// Implicit conversion
// let result2 = num1 - num2; //-1

// console.log(result);
// console.log(result2);

const num = 5;
document.querySelector(".form").addEventListener("submit", function (e) {
  e.preventDefault;
  let value = document.getElementById("amount").value;

  // Explicit Conversion
  value = parseInt(value);
  console.log("Input");
  console.log(value);
  console.log(value + num);
  console.log(value - num);
});
