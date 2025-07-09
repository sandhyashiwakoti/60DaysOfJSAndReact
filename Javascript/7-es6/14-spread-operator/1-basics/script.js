const udemy = "udemy";
const letters = [...udemy];
console.log(letters);

const boys = ["john", "peter", "bob"];
const girls = ["susan", "anna"];
const bestFriend = "arnold";

const friends1 = [boys, bestFriend, girls];
console.log(friends1);
const friends = [...boys, bestFriend, ...girls];
console.log(friends);

// reference
// const newFriends = friends;
const newFriends = [...friends];
newFriends[0] = "karina";
console.log(newFriends);
console.log(friends);
