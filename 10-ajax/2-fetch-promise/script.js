const url = "https://jsonplaceholder.typicode.com/posts/2";

fetch(url)
  .then((response) => {
    // fetch doesn't directly give you the JSON, just the response stream.
    // We must call the .json() method, which also returns a promise.
    return response.json();
  })
  .then((data) => {
    // This .then() handles the promise from response.json()
    console.log(data);
    document.body.innerHTML = `<h1>${data.title}</h1>`;
  })
  .catch((error) => {
    // .catch() is used to handle any errors during the request.
    console.error("Error:", error);
  });
