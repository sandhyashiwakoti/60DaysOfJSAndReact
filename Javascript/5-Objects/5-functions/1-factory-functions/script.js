function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(
        `My full name is ${this.firstName} ${this.lastName} and I love JS`
      );
    },
  };
}

const john = createPerson("john", "anderson");
john.fullName();
const mini = createPerson("mini", "fizz");
mini.fullName();
const sandhya = createPerson("sandhya", "shiwakoti");
sandhya.fullName();
