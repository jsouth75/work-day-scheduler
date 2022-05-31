// $(document).ready(function() {
//     $.now("#currentDay")
// });

// var today = document.getElementById("currentDay");
// today.textContent = "whatever"

var today = $("#currentDay");
var timeNow = moment().format("dddd, MMM Do YYYY");

today.text(timeNow);

// function today () {
//     today.currentDate
// };