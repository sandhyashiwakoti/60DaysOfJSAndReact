const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, positign: "designer" },
  { name: "susy", age: 30, position: "the boss" },
  { name: "anna", age: 35, position: "the boss" },
];

const youngPeople = people.filter(function (person) {
  return person.age <= 25;
});
console.log(youngPeople);

const developers = people.filter(function (person) {
  return person.position === "senior developer";
});
console.log(developers);
