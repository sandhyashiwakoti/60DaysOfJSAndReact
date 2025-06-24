const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("hey you clicked me");
  heading.classList.add("red");
});

const heading = document.querySelector("h2");
