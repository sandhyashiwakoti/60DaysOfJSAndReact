function person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    console.log(
      `My full name is ${this.firstName} ${this.lastName} and I love React`
    );
    console.log(this);
  };
}
const john = new person("john", "anderson");
john.fullName();
const bob = new person("bob", "jordan");
bob.fullName();
const mini = person("mini", "fizz");
mini.fullName();
