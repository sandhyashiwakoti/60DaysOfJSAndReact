const udemy = "udemy";
console.log(Array.from(udemy));

function countTotal() {
  console.log(arguments);
  let total = Array.from(arguments).reduce(
    (total, currNum) => (total += currNum)
  );
  console.log(total);
}

countTotal(67, 89, 54, 100);
