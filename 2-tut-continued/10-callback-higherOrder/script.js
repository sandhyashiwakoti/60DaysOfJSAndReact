/* Callback Function */
function morning(name) {
  return `Morning ${name}`;
}
function afternoon(name) {
  return `Afternoon ${name}`;
}

/* Higher-Order Function */
function greet(name, gr) {
  console.log(`Greeting! Good ${gr(name)}`);
}

greet("Sandhya", morning);
greet("Mini", afternoon);
