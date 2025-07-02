//arrays
const fruit = ["apple", "orange", "lemon", "banana", "pear"];
const [first, second, ...fruits] = fruit;
console.log(first, fruits);

//objects
const person = { name: "john", lastName: "smith", job: "developer" };
const { job, ...rest } = person;
// error- rest element must be at last
// const { ... rest, job } = person;
console.log(job, rest);

// functions
const testScores = [78, 90, 56, 43, 99, 65];

const getAverage = (name, ...scores) => {
  console.log(scores);
  let total = 0;
  for (const score of scores) {
    total += score;
  }
  console.log(`${name}'s average score is ${total / scores.length}`);
};

getAverage(person.name, 78, 90, 56, 43);
getAverage(person.name, ...testScores);
