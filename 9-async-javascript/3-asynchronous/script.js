// even if it's 0, output would still be the same
// boilWater(0);
boilWater(1000);
console.log("chop carrots");
for (let i = 0; i < 10000; i++) {
  console.log("still busy");
}

function boilWater(time) {
  console.log("boiling ... ");
  setTimeout(() => {
    console.log("done.");
  }, time);
}
