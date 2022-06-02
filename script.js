// var today = document.getElementById("currentDay");
// today.textContent = "whatever"

// sets current time at top of page
var today = $("#currentDay");
var dateNow = moment().format("[Today is] dddd, MMM Do YYYY");

today.text(dateNow);

// use local storage to store and retrieve data
var storage = JSON.parse(localStorage.scheduler || '{}');

// changes color depending on row time compared to current time
var rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format("H"));
console.log(currentHour)

var pastTense = $(".past");
var presentTense = $(".present");
var futureTense = $(".future");


Array.from(rows).forEach(row => {
    let
        rowIdString = row.id,
        rowHour;
    if (rowIdString) {
        rowHour = parseInt(rowIdString);
    }
    
    if(rowHour) {
        if (currentHour === rowHour) {
            setColor(row, "red");
        } else if (currentHour < rowHour) {
            setColor(row, "green");
        } else if (currentHour > rowHour) {
            setColor(row, "lightgrey");
        } 
    }
});

function setColor(element, color) {
    element.style.backgroundColor = color;
}

// local storage for textarea
saveButton = document.querySelector("#button");

saveButton.addEventListener("click", function(event) {
    event.preventDefault();

    var input = document.querySelector("#content").value;

    if (input === "") {
        displayMessage("error, cannot save a blank list");
    }   else {
        displayMessage("success", "Saved to your schedule");

        localStorage.setItem("input", textarea);
    }

})
