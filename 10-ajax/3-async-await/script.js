const url = "https://jsonplaceholder.typicode.com/posts/3";

// We must place our logic inside an 'async' function to use 'await'.
const getPost = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    document.body.innerHTML = `<h1>${data.title}</h1>`;
  } catch (error) {
    console.error("Error:", error);
  }
};

getPost();
