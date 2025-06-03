console.log(" String Properties and Methods ");
let text = " sandhya";

//  .length Property
console.log("\n* .length *");
console.log(`text.length:`, text.length);
// 8

//  .toLowerCase() Method
console.log("\n* .toLowerCase() *");
console.log(`text.toLowerCase(): "'${text.toLowerCase()}'"`);
// "' sandhya'"

//  .charAt(index) Method
//Returns the character at the specified index.
console.log("\n* .charAt(index) *");
console.log(`text.charAt(7): "'${text.charAt(7)}'"`);
// "'a'"
console.log(`text.charAt(8): "'${text.charAt(8)}'"`);
// "''"
console.log(`text.charAt(0): "'${text.charAt(0)}'"`);
// "' '"

// Accessing Last Character Index
console.log("\n* Last Character Index (text.length - 1) *");
console.log(`Index of last character (text.length - 1):`, text.length - 1);
// 7

//  .indexOf(searchValue, fromIndex?) Method
//Returns the index of the first occurrence of searchValue.
console.log("\n* .indexOf(searchValue) *");
console.log(`text.indexOf("a"):`, text.indexOf("a")); // First 'a'
// 2
console.log(`text.indexOf(" "):`, text.indexOf(" ")); // The leading space
// 0
console.log(`text.indexOf("S"):`, text.indexOf("S")); // 'S' is not present (it's 's')
// -1 (because 's' is lowercase, 'S' is not found)

//  .trim() Method
//Removes whitespace from both ends of a string.
console.log("\n* .trim() *");
console.log(`text.trim(): "'${text.trim()}'"`);
// "'sandhya'"

//  .startsWith(searchString, position?) Method
//Checks if a string starts with the characters of a specified string.
console.log("\n* .startsWith(searchString) *");
console.log(`text.startsWith("san"):`, text.startsWith("san")); // Checks if " sandhya" starts with "san"
// false (due to the leading space)
// Let's try with the trimmed version for clarity:
console.log(`text.trim().startsWith("san"):`, text.trim().startsWith("san"));
// Expected Output for trimmed "sandhya": true

//  .includes(searchString, position?) Method
//Checks if a string contains the characters of a specified string.
console.log("\n* .includes(searchString) *");
console.log(`text.includes("san"):`, text.includes("san"));
// true

//  .slice(startIndex, endIndex?) Method
//Extracts a section of a string and returns it as a new string.
// endIndex is exclusive. Negative indices count from the end.
console.log("\n* .slice(startIndex, endIndex?) *");
console.log(`text.slice(0, 3): "'${text.slice(0, 3)}'"`); // Characters from index 0 up to (but not including) 3
// "' sa'"
console.log(`text.slice(-1): "'${text.slice(-1)}'"`);
// "'a'"
console.log(`text.trim().slice(0, 3): "'${text.trim().slice(0, 3)}'"`);
//  "'san'"
