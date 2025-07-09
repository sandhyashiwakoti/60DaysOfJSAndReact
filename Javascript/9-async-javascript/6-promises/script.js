// const promise = new Promise((resolve, reject) => {});
// pending
// console.log(promise);

const promise = new Promise((resolve, reject) => {
  let value = true;
  if (value) {
    resolve("Resolved. Value is true.");
  } else {
    reject("Error: Value is false.");
  }
});

// resolve
console.log(promise);

// can't access value this way
console.log(promise.value);

// to access value
promise
  // for resolve
  .then((data) => {
    console.log(data);
  })
  // for reject
  .catch((err) => {
    console.log(err);
  });
