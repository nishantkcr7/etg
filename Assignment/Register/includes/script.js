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
rowName = element("div");
addclass(rowName, "row my-3");

// Name lable
colNameLabel = element("div");
addclass(colNameLabel, "col-12 col-md-3");

colNameLabelNode = element("label");
colNameLabelNode.setAttribute("for", "name");

colNameLabel.appendChild(colNameLabelNode);
colNameLabelNode.appendChild(text("Name:"));

// Name Input
colNameInput = element("div");
addclass(colNameInput, "col-12 col-md-9");

colNameInputRow = element("div");
addclass(colNameInputRow, "row");
colNameInputRowCol = element("div");
addclass(colNameInputRowCol, "col-6");
colNameInputRow.appendChild(colNameInputRowCol);

colNameInputRowColInput = element("input");
addclass(colNameInputRowColInput, "form-control");
colNameInputRowColInput.setAttribute("type", "text");
colNameInputRowColInput.setAttribute("name", "fname");
colNameInputRowColInput.setAttribute("id", "fname");
colNameInputRowColInput.setAttribute("placeholder", "First Name");
colNameInputRowCol.appendChild(colNameInputRowColInput);

colNameInputRowColSpan = element("span");
addclass(colNameInputRowColSpan, "msg-error");
colNameInputRowCol.appendChild(colNameInputRowColSpan);

// Here
colNameInputRowCol2 = element("div");
addclass(colNameInputRowCol2, "col-6");
colNameInputRow.appendChild(colNameInputRowCol2);

colNameInputRowCol2Input = element("input");
addclass(colNameInputRowCol2Input, "form-control");
colNameInputRowCol2Input.setAttribute("type", "text");
colNameInputRowCol2Input.setAttribute("name", "lname");
colNameInputRowCol2Input.setAttribute("id", "lname");
colNameInputRowCol2Input.setAttribute("placeholder", "Last Name");
colNameInputRowCol2.appendChild(colNameInputRowCol2Input);

colNameInputRowCol2Span = element("span");
addclass(colNameInputRowCol2Span, "msg-error");
colNameInputRowCol2.appendChild(colNameInputRowCol2Span);

// There
colNameInput.appendChild(colNameInputRow);

rowName.appendChild(colNameLabel);
rowName.appendChild(colNameInput);

form.appendChild(rowName);

main.appendChild(form);
body.appendChild(main);
