const people = [
  { name: "bob", age: 20, position: "developer" },
  { name: "peter", age: 25, position: "designer" },
  { name: "susy", age: 30, position: "the boss" },
];

// Normal function declaration and call
function showPerson(person) {
  console.log(person.position.toUpperCase());
}
people.forEach(showPerson);

// Anonymous Function
console.log("\n--- Anonymous Function ---");
people.forEach(function (item) {
  console.log(item.position.toUpperCase());
});
