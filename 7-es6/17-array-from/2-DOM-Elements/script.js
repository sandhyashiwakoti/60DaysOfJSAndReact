const p = document.querySelectorAll("p");
const result = document.getElementById("result");
const second = document.getElementById("second");

let newText = Array.from(p);
newText = newText.map((item) => `<span>${item.textContent}</span>`).join(" ");

result.innerHTML = newText;

const text = Array.from(document.querySelectorAll("p"), (item) => {
  return `<span>${item.textContent}</span>`;
}).join(" ");

second.innerHTML = text;
