const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};

const {
  first: firstName,
  last,
  city,
  zip,
  siblings: { sister: favoriteSibling },
} = bob;
console.log(firstName, last, city, zip, favoriteSibling);
