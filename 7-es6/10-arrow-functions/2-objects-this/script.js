const mini = {
  firstName: "mini",
  lastName: "smith",
  sayName: function () {
    console.log(this);
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  },
};
mini.sayName();

const anna = {
  firstName: "anna",
  lastName: "sanders",
  sayName: () => {
    console.log(this);
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}`);
  },
};
anna.sayName();
