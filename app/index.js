import document from "document";

const applicationFill = document.getElementById("application-fill");

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
  let selectedIndex1 = parseInt(tumblerHour.value);
  let selectedItem1 = tumblerHour.getElementById(`hour-item${selectedIndex1}`);
  let selectedValue1 = selectedItem1.getElementById("text").text;
  console.log(`HOUR: index: ${selectedIndex1} :: value: ${selectedValue1}`);

  let selectedIndex2 = tumblerMins.value;
  let selectedItem2 = tumblerMins.getElementById(`min-item${selectedIndex2}`);
  let selectedValue2 = selectedItem2.getElementById("text").text;
  console.log(`MINS: index: ${selectedIndex2} :: value: ${selectedValue2}`);

  applicationFill.style.fill = `#${selectedValue1}${selectedValue2}0000`;

  // if (selectedIndex >= 12) {
  //   unitToggle("PM");
  // } else {
  //   unitToggle("AM");
  // }
});

tumblerMins.addEventListener("select", (evt) => {
  let selectedIndex1 = parseInt(tumblerHour.value);
  let selectedItem1 = tumblerHour.getElementById(`hour-item${selectedIndex1}`);
  let selectedValue1 = selectedItem1.getElementById("text").text;
  console.log(`HOUR: index: ${selectedIndex1} :: value: ${selectedValue1}`);

  let selectedIndex2 = tumblerMins.value;
  let selectedItem2 = tumblerMins.getElementById(`min-item${selectedIndex2}`);
  let selectedValue2 = selectedItem2.getElementById("text").text;
  console.log(`MINS: index: ${selectedIndex2} :: value: ${selectedValue2}`);
  
  applicationFill.style.fill = `#${selectedValue1}${selectedValue2}0000`;
});