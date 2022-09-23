"use strict";
/*

+=============================================================+
|             GETTING REFERENCE OF ELEMENTS                   |
+=============================================================+
*/

let errorMsgLatitude = document.querySelector(".error-msg-latitude");
let errorMsgLongitude = document.querySelector(".error-msg-longitude");

const inputLatitude = document.getElementById("input-latitude");
const inputLongitude = document.getElementById("input-longitude");

// Getting reference of search button
const btnSearch = document.querySelector("#btn-search");
// Getting reference of refresh button
const buttonRefresh = document.querySelector(".btn-refresh");

let latitude, longitude;

let currentCord = {};

/*
+=============================================================+
|                    GENERAL FUNCTONALITIES                   |
+=============================================================+
*/
// Function to remove error-msg while entering value
inputLatitude.addEventListener("input", () => {
  errorMsgLatitude.innerText = "";
});
inputLongitude.addEventListener("input", () => {
  errorMsgLongitude.innerText = "";
});

/*
+=============================================================+
|                    CORE FUNCTIONS                           |
+=============================================================+
*/

function getLeafletMap(latitude, longitude) {
  console.log(`Inside getLeafLetMap() Lati: ${latitude}\t Long: ${longitude}`);
  console.log([latitude, longitude]);

  const map = L.map("map").setView([latitude, longitude], 12);

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "",
  }).addTo(map);

  L.marker([latitude, longitude])
    .addTo(map)
    .bindPopup("You are here 🙋‍♂️")
    .openPopup();
  map.on("click", function (mapEvent) {
    console.log(mapEvent);
    const { lat, lng } = mapEvent.latlng;
    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: "popup",
        })
      )
      .setPopupContent("My popup")
      .openPopup();
  });
}

// Function to get current locaction coordinate
function getCurrentCord() {
  // const currentCord = {};
  // Getting the longitude and latitude of user using navigator
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // Destructuring latitude and longitude from the coords object
      currentCord.latitude = position.coords.latitude;
      currentCord.longitude = position.coords.longitude;
      console.log(
        `Inside getCurrentCord() ${currentCord.latitude}, ${currentCord.longitude}`
      );
      // Url for google map: https://www.google.com/maps/@17.4084003,78.3500764
      // passing the current postion to google map query string

      // getLeafletMap(latitude, longitude);
    },
    function (error) {
      console.log("Error Occured: ", error.message);
    }
  );
  console.log(
    `Inside getCurrentCord() ${currentCord.latitude}, ${currentCord.longitude}`
  );

  return currentCord;
}
getLeafletMap(90, 60);
// Getting the longitude and latitude of user using navigator
// navigator.geolocation.getCurrentPosition(
//   (position) => {
//     // Destructuring latitude and longitude from the coords object
//     latitude = position.coords.latitude;
//     longitude = position.coords.longitude;
//     // Url for google map: https://www.google.com/maps/@17.4084003,78.3500764
//     // passing the current postion to google map query string

//     getLeafletMap(latitude, longitude);
//   },
//   (error) => {
//     console.log("Error Occured: ", error.message);
//   }
// );
// end
// Display Map Function
function displayMap(
  latitude = getCurrentCord().latitude,
  longitude = getCurrentCord().longitude
) {
  console.log(`Inside displayMap() Lati: ${latitude}\t Long: ${longitude}`);
  // this will take lati and longi and call
  getLeafletMap(latitude, longitude);
}

// Adding event listener on Refresh button to reload the map
buttonRefresh.addEventListener("click", () => {
  let container = L.DomUtil.get("map");
  if (container != null) container._leaflet_id = null;
  displayMap();
});

// displayMap(getCurrentCord().latitude, getCurrentCord().longitude);

// Adding event listener to search button
btnSearch.addEventListener("click", function (e) {
  // Preventing defalut functionality of reloading the page
  e.preventDefault();

  // Getting the values of latitude and longitude
  const inputLatitudeValue = inputLatitude.value;
  const inputLongitudeValue = inputLongitude.value;
  console.log(inputLatitudeValue, inputLongitudeValue);

  // Validating the inputbox
  if (inputLatitudeValue === "") {
    errorMsgLatitude.innerText = "Plase enter latitude!";
  }
  if (inputLongitudeValue === "") {
    errorMsgLongitude.innerText = "Plase enter longitude!";
  }
  if (inputLatitudeValue === "" && inputLongitudeValue === "") {
    errorMsgLatitude.innerText = "Plase enter latitude!";
    errorMsgLongitude.innerText = "Plase enter longitude!";
  }
  displayMap(inputLatitude, inputLongitude);
});
