const person = { name: "john", job: "developer" };
const newPerson = { ...person, city: "chicago", name: "peter" };
console.log(person);
console.log(newPerson);
