const sectionKeyboard = document.querySelector(".keyboard");
const keys = [
  [
    "Esc",
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
  ],
  [
    "`",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "-",
    "=",
    "Backspace",
  ],
  ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
  ["CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter"],
  ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift"],
  ["Ctrl", "Fn", "Win", "Alt", "Space", "AltGr", "Fn", "Opt", "Ctrl"],
];

keys.forEach((keyRows) => {
  // Creating keyboard row where a group of keys will be stored; eg. `,1,2,3... Tab,q,w,e... CapsLock, a,s,d... etc
  row = document.createElement("div");
  //   adding css class:keyrow to each row
  row.classList.add("keyrow");
  //  Appending the key row in the main keyboard section
  sectionKeyboard.appendChild(row);

  keyRows.forEach((key) => {
    col = document.createElement("div");
    col.classList.add("keycol");
    row.appendChild(col);
    if (key == "Backspace") col.style.width = "120px";
    if (key == "Tab") col.style.width = "90px";
    if (key == "\\") col.style.width = "90px";
    if (key == "CapsLock") col.style.width = "112px";
    if (key == "Enter") col.style.width = "135px";
    if (key == "Shift") col.style.width = "157px";
    if (key == "Ctrl") col.style.width = "90px";
    if (key == "Space") col.style.width = "392px";
    if (key == "Esc" || key == "F4" || key == "F8") {
      col.style.marginRight = "44px";
      col.style.marginBottom = "24px";
    }
    col.innerText = key;
    // sectionKeyboard.insertAdjacentHTML("beforeend", `<button>${key}</button>`);
  });
});
