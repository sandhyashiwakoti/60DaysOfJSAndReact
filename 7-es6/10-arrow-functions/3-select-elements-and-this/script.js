// Arrow Functions or Fat Arrow Functions
// reg function : 'this' refers parent, left of the dot
// arrow function : refers to it's current surrounding scope

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log(this);
  setTimeout(() => {
    this.style.color = "white";
    console.log(this);
  }, 2000);
});
