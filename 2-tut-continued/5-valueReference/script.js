const number = 1;
let number2 = number;
number2 = 7;
console.log(`the first value is ${number}`);
console.log(`the second value is ${number2}`);

let person = { name: `bob` };
let person2 = person;
person2.name = `susy`;
console.log(`the name of the first person is ${person.name}`);
console.log(`the name of the second person is ${person2.name}`);

let stu = { name: `bob` };
let stu2 = { ...stu };
stu2.name = `susy`;
console.log(`the name of the first stu is ${stu.name}`);
console.log(`the name of the second stu is ${stu2.name}`);
