import showPeople from "./utils/showPeople.js";

const people = [
  { name: "john", job: "developer" },
  { name: "susan", job: "designer" },
  { name: "anna", job: "the boss" },
];

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  container.innerHTML = showPeople(people);
});
