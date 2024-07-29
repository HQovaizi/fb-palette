import document from "document";

let tumblerHour = document.getElementById("tumbler-hour");
let tumblerMins = document.getElementById("tumbler-mins");

let units = document.getElementById("units");
let AM = units.getElementById("tumbler-toggle-top");
let PM = units.getElementById("tumbler-toggle-bot");

unitToggle("AM");

function unitToggle(unit) {
  if (unit === "AM") {
    AM.style.fillOpacity = 1;
    PM.style.fillOpacity = 0.3;
  } else {
    AM.style.fillOpacity = 0.3;
    PM.style.fillOpacity = 1;
  }
}

tumblerHour.addEventListener("select", (evt) => {
  let selectedIndex = parseInt(tumblerHour.value);
  let selectedItem = tumblerHour.getElementById(`hour-item${selectedIndex}`);
  let selectedValue = selectedItem.getElementById("text").text;
  console.log(`HOUR: index: ${selectedIndex} :: value: ${selectedValue}`);

  if (selectedIndex >= 12) {
    unitToggle("PM");
  } else {
    unitToggle("AM");
  }
});

tumblerMins.addEventListener("select", (evt) => {
  let selectedIndex = tumblerMins.value;
  let selectedItem = tumblerMins.getElementById(`min-item${selectedIndex}`);
  let selectedValue = selectedItem.getElementById("text").text;
  console.log(`MINS: index: ${selectedIndex} :: value: ${selectedValue}`);
});