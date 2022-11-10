// Getting the reference of container and buttons
const divResponseText = document.querySelector(".response-text");
const divResponseJSON = document.querySelector(".response-json");
const btnFetchText = document.querySelector(".btn-fetch-text");
const btnFetchJSON = document.querySelector(".btn-fetch-json");
const divResponseAPI = document.querySelector(".response-api");
const btnFetchAPI = document.querySelector(".btn-fetch-api");

// Adding event listener on 'Fetch Text' button
btnFetchText.addEventListener("click", () => {
  // Creating new XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "./data/text-data.txt");
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      const data = xhr.responseText;
      divResponseText.innerText = data;
    } else {
      console.log(`There was error loading data.`);
    }
  };
});
// Fetching JSON data on click of 'Fetch JSON' button
btnFetchJSON.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./data/json-data.json");
  xhr.send();

  xhr.onload = () => {
    if (xhr.status === 200) {
      divResponseJSON.innerText = xhr.responseText;
    }
  };
});

// Fetching data from API to show random cat facts on click of 'Fetch API' button
btnFetchAPI.addEventListener("click", function () {
  // Fetching the url stored in the local file using fetch api
  let url;
  fetch("./data/api-url.json")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      url = data.url;
      //   When url is available, fetching the data from remote api
      xhr = new XMLHttpRequest();
      xhr.open("GET", url);
      xhr.send();

      xhr.onload = () => {
        if (xhr.status === 200) {
          factJson = JSON.parse(xhr.responseText);

          divResponseAPI.innerText = factJson.fact;
        }
      };
    });
});
