const API_KEY =
  "https://api.unsplash.com/photos/random/?client_id=WxyjDYBXcgci4g1C0H6-BWaqVe9XRRt80bUpFAHk31k";
img = document.querySelector("img");
const content = document.querySelector(".content");
const container = document.querySelector(".container");

// function loadContent() {
//   for (i = 0; i < 3; i++) {
//     const div = document.createElement("div");
//     div.classList.add("col-12", "py-5", "my-3", "bg-info", "rounded");
//     container.appendChild(div);
//   }
// }
// loadContent();

// window.addEventListener("scroll", function () {
//   console.log("ScrollY: " + this.window.scrollY);
//   console.log(`window.innerHeight: ${this.window.innerHeight}`);
//   console.log(
//     `document.documentElement.scrollHeight: ${this.document.documentElement.scrollHeight}`
//   );
//   if (
//     this.window.innerHeight + this.window.scrollY >=
//     this.document.documentElement.scrollHeight
//   ) {
//     this.document.querySelector(".rotate").classList.remove("d-none");
//     setTimeout(() => {
//       loadContent();
//     }, 800);
//   }
// });

const name = document.querySelector(".name");
fetch(API_KEY)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data.user);
    img.src = data.urls.small;
    name.innerText = data.user.name;
  })
  .catch((err) => {
    console.log(err);
  });
