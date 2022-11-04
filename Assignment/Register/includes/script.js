// Function to create any html element
const element = (elementName) => {
  return document.createElement(elementName);
};
// Function to add class to an element
const addclass = (el, classLists) => {
  classLists = classLists.split(" ");
  classLists.forEach((classname) => {
    el.classList.add(classname);
  });
};
// Function to create Text Node in an html element
const text = (textContent) => {
  return document.createTextNode(textContent);
};

const body = document.querySelector("body");
addclass(body, "d-flex justify-content-center align-items-center p-5");

// Main element
const main = element("main");

// Form Starts
const form = element("div");
addclass(form, "form mt-5 px-3");

// Signup page header
headerRow = element("div");
addclass(headerRow, "row pt-5");

headerCol = element("div");
addclass(headerCol, "col text-uppercase text-center");
headerRow.appendChild(headerCol);

// Adding h1 text to the header
headerColH1 = element("h1");
headerColH1Text = text("some university");
headerColH1.appendChild(headerColH1Text);
headerCol.appendChild(headerColH1);

// Secondary Header Row
headerSec = element("div");
addclass(headerSec, "row mt-2");

// Secondary header col
headerSecCol = element("div");
addclass(headerSecCol, "col text-center text-capitalize");

headerSecColText = text("student registration form");

headerSecCol.appendChild(headerSecColText);
headerSec.appendChild(headerSecCol);

form.appendChild(headerRow);
form.appendChild(headerSec);

// Name

main.appendChild(form);
body.appendChild(main);
