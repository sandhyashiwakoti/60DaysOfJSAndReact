const btn = document.querySelector(".increment");
const counter = {
  count: 0,
  increment() {
    this.count++;
    console.log(this);
    console.log(this.count);
  },
};

// Results NaN
// btn.addEventListener("click", counter.increment);

const increment = counter.increment.bind(counter);
btn.addEventListener("click", increment);
