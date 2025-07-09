// Functions, return, if, arrays, for loop

const gas = [20, 40, 100, 30];
const food = [10, 40, 50];

function calculateValue(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}
console.log(" **Gas**");
calculateValue(gas);
console.log(" **Food**");
calculateValue(food);
console.log(" **String**");
calculateValue("Hello World");

function calculateTotal(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

const gasTotal = calculateTotal(gas);
const foodTotal = calculateTotal(food);
const randomTotal = calculateTotal([200, 4000, 500, 1]);

console.log({
  gas: gasTotal,
  food: foodTotal,
  random: randomTotal,
});
