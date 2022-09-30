"use strict";
let latitude;
let longitude;
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
  console.log("3. getLeafLetMap() Lati:" + latitude + "Long: " + longitude);

  var container = L.DomUtil.get("map");
  if (container != null) {
    container._leaflet_id = null;
  }
  const map = L.map("map").setView([latitude, longitude], 12);
  // Fetching city and country from an API geocode.xyz
  fetch(
    `https://geocode.xyz/${latitude},${longitude}?geoit=json&auth=281007463117368306282x93815`
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let areaMsg = "";
      if (data.city && data.country)
        areaMsg = `<b>${data.city}, ${data.country} 🙋‍♂️</b>`;
      else if (data.city) areaMsg = `<b>${data.city} 🙋‍♂️</b>`;
      else if (data.country) areaMsg = `<b>${data.country} 🙋‍♂️</b>`;
      else areaMsg = `<b>You are here 🙋‍♂️</b>`;

      L.tileLayer("http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}", {
        maxZoom: 20,
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
      }).addTo(map);

      L.marker([latitude, longitude])
        .addTo(map)
        .bindPopup(`${areaMsg}`)
        .openPopup();
    })
    .catch((error) => {
      console.log(`Something went wrong: ${error}`);
    });
}

// Function to get current locaction coordinate
function getCurrentCord() {
  // Getting the longitude and latitude of user using navigator
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // Destructuring latitude and longitude from the coords object
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
      console.log(position.coords.latitude, position.coords.longitude);

      console.log(`Inside getCurrentCord() ${latitude}, ${longitude}`);
      // Url for google map: https://www.google.com/maps/@17.4084003,78.3500764
      // passing the current postion to google map query string

      // getLeafletMap(latitude, longitude);
    },
    function (error) {
      console.log("Error Occured: ", error.message);
    }
  );
  console.log(`Inside getCurrentCord() ${latitude}, ${longitude}`);
  // return [latitude, longitude];
  // return currentCord;
}

function displayMap(latitude, longitude) {
  // console.log("2. displayMap() Lati: " + latitude + " \t Long:  " + longitude);
  // this will take lati and longi and call
  getLeafletMap(latitude, longitude);
}

// Adding event listener on Refresh button to reload the map
buttonRefresh.addEventListener("click", () => {
  refreshMap();
});

function refreshMap() {
  let container = L.DomUtil.get("map");
  if (container != null) container._leaflet_id = null;
  displayMap();
}

// displayMap(getCurrentCord().latitude, getCurrentCord().longitude);

// Adding event listener to search button
btnSearch.addEventListener("click", function (e) {
  // Preventing defalut functionality of reloading the page
  e.preventDefault();

  // Getting the values of latitude and longitude
  const inputLatitudeValue = inputLatitude.value;
  const inputLongitudeValue = inputLongitude.value;

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
  displayMap(inputLatitudeValue, inputLongitudeValue);
  // displayMap(100, 10);
});

function getMapOnLoad() {
  // let [latitude, longitude] = getCurrentCord();
  navigator.geolocation.getCurrentPosition(
    function (position) {
      // Destructuring latitude and longitude from the coords object
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      // console.log(position.coords.latitude, position.coords.longitude);

      displayMap(latitude, longitude);

      console.log(`Inside getCurrentCord() ${latitude}, ${longitude}`);
    },
    function (error) {
      console.log("Error Occured: ", error.message);
    }
  );
}
