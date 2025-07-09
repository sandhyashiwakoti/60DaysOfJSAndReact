const xhr = new XMLHttpRequest();
const url = "https://jsonplaceholder.typicode.com/posts/1";

xhr.open("GET", url);

xhr.onreadystatechange = function () {
  // readyState 4 means the operation is complete.
  // status 200 means "OK" (the request was successful).
  if (xhr.readyState === 4 && xhr.status === 200) {
    const data = JSON.parse(xhr.responseText);
    document.body.innerHTML = `<h1>${data.title}</h1>`;
  } else {
    // Handle errors if needed
    console.error("There was a problem with the request.");
  }
};

xhr.send();
