// parentElement

const heading = document.querySelector("h2");
const parent = heading.parentElement;
console.log(heading.parentElement);
console.log(heading.parentElement.parentElement);
console.log(heading.parentElement.parentElement.parentElement);
console.log(heading.parentElement.parentElement.parentElement.parentElement);
console.log(
  heading.parentElement.parentElement.parentElement.parentElement.parentElement
);
parent.style.color = "red";
