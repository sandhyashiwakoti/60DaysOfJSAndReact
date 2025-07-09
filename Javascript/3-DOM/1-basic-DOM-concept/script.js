document.body.style.backgroundColor = "blue";
document.body.style.color = "yellow";
document.getElementById("btn").style.color = "red";

// assign to a variable

const element = document.getElementById("element");
// do something

document.querySelector("element"); //do something;

// window object
console.log(window);

// returns a node object or a node list

const btn = document.getElementById("btn");
const name = btn.nodeName;
console.log(btn);
console.log(name);
