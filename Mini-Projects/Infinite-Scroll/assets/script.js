const API_KEY =
  "https://api.unsplash.com/photos/random/?client_id=WxyjDYBXcgci4g1C0H6-BWaqVe9XRRt80bUpFAHk31k";
img = document.querySelector("img");

fetch(API_KEY)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.urls);
    img.src = data.urls.small;
  })
  .catch((err) => {
    console.log(err);
  });
