let names = ["San", "Mini", "John", "Olga"];

// length Property
console.log("\n length ");
console.log("names.length:", names.length); // 4
console.log("Last element (names[names.length - 1]):", names[names.length - 1]); // 'Olga'

// concat Method
console.log("\n concat ");
const lastNames = ["pepper", "silwal", "austin"];
console.log("lastNames array:", lastNames);
let allNames = names.concat(lastNames);
console.log("allNames (after concat):", JSON.parse(JSON.stringify(allNames)));
// ['San', 'Mini', 'John', 'Olga', 'pepper', 'silwal', 'austin']

// reverse Method (changes the original array)
console.log("\n reverse ");
allNames.reverse();
console.log("allNames.reverse():", JSON.parse(JSON.stringify(allNames)));
// ['austin', 'silwal', 'pepper', 'Olga', 'John', 'Mini', 'San']

// unshift Method (adds to the beginning, changes the original array)
console.log("\n unshift ");
allNames.unshift("sosy");
console.log("allNames.unshift('sosy'):", JSON.parse(JSON.stringify(allNames)));
allNames.unshift("anna"); // Adds 'anna' to the beginning
console.log("allNames.unshift('anna'):", JSON.parse(JSON.stringify(allNames)));
// ['anna', 'sosy', 'austin', 'silwal', 'pepper', 'Olga', 'John', 'Mini', 'San']

// shift Method (removes from the beginning, changes the original array)
console.log("\n shift ");
let removedByShift = allNames.shift(); // Removes 'anna'
console.log("Removed by shift():", removedByShift);
console.log("allNames after shift():", JSON.parse(JSON.stringify(allNames)));
// ['sosy', 'austin', 'silwal', 'pepper', 'Olga', 'John', 'Mini', 'San']

// push Method (adds to the end, changes the original array)
console.log("\n push ");
allNames.push("susy"); // Adds 'susy' at end
console.log("allNames.push('susy'):", JSON.parse(JSON.stringify(allNames)));
// ['sosy', 'austin', 'silwal', 'pepper', 'Olga', 'John', 'Mini', 'San', 'susy']

// pop Method (removes from the end, changes the original array)
console.log("\n pop ");
let removedByPop = allNames.pop(); // Removes 'susy'
console.log("Removed by pop():", removedByPop);
console.log("allNames after pop():", JSON.parse(JSON.stringify(allNames)));
// ['sosy', 'austin', 'silwal', 'pepper', 'Olga', 'John', 'Mini', 'San']

// splice Method
console.log("\n splice ");
allNames = ["pepper", "ben", "olga", "san", "mini", "john"];
console.log("allNames for splice:", JSON.parse(JSON.stringify(allNames)));

const specificNames = allNames.splice(2, 1);
// startIndex: 2 ('olga')
// deleteCount: 1 (remove one item)
console.log("specificNames:", specificNames); // ['olga']
console.log(
  "allNames after splice(2, 1):",
  JSON.parse(JSON.stringify(allNames))
);
// ["pepper", "ben", "san", "mini", "john"]
// splice(2, 1) starts at index 2 ('olga') and removes 1 item.
// removed items are returned as an array and original array 'allNames' is changed.
