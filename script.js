// sets current time at top of page
var today = $("#currentDay");
var dateNow = moment().format("[Today is] dddd, MMM Do YYYY");

today.text(dateNow);

// changes color depending on row time compared to current time
let currentHour = parseInt(moment().format("H"));

var text = document.getElementsByName("textArea");

for(var i=0; i <10; i++) {
    var value = text[i].getAttribute("value"); 
    if(currentHour > value) {
        text[i].classList.add("past");
    } 
    if(currentHour == value) {
        text[i].classList.add("present");
    }
    if(currentHour < value) {
        text[i].classList.add("future");
    }
};

// onclick.addEventListener
var btn8 = document.getElementById("button8");
var btn9 = document.getElementById("button9");
var btn10 = document.getElementById("button10");
var btn11 = document.getElementById("button11");
var btn12 = document.getElementById("button12");
var btn13 = document.getElementById("button13");
var btn14 = document.getElementById("button14");
var btn15 = document.getElementById("button15");
var btn16 = document.getElementById("button16");
var btn17 = document.getElementById("button17");

btn8.addEventListener("click", eight);
btn9.addEventListener("click", nine);
btn10.addEventListener("click", ten);
btn11.addEventListener("click", eleven);
btn12.addEventListener("click", twelve);
btn13.addEventListener("click", thirteen);
btn14.addEventListener("click", fourteen);
btn15.addEventListener("click", fifteen);
btn16.addEventListener("click", sixteen);
btn17.addEventListener("click", seventeen);

// pull data from local storage
var eight = document.getElementById("eightInput");
var nine = document.getElementById("nineInput");
var ten = document.getElementById("tenInput");
var eleven = document.getElementById("elevenInput");
var twelve = document.getElementById("twelveInput");
var thirteen = document.getElementById("thirteenInput");
var fourteen = document.getElementById("fourteenInput");
var fifteen = document.getElementById("fifteenInput");
var sixteen = document.getElementById("sixteenInput");
var seventeen = document.getElementById("seventeenInput");

// local storage for textarea
eightInput.value = localStorage.getItem("eight");
nineInput.value = localStorage.getItem("nine");
tenInput.value = localStorage.getItem("ten");
elevenInput.value = localStorage.getItem("eleven");
twelveInput.value = localStorage.getItem("twelve");
thirteenInput.value = localStorage.getItem("thirteen");
fourteenInput.value = localStorage.getItem("fourteen");
fifteenInput.value = localStorage.getItem("fifteen");
sixteenInput.value = localStorage.getItem("sixteen");
seventeenInput.value = localStorage.getItem("seventeen");

function eight() {
    localStorage.setItem("eight", eight.value)
};

function nine() {
    localStorage.setItem("nine", nine.value)
};

function ten() {
    localStorage.setItem("ten", ten.value)
};

function eleven() {
    localStorage.setItem("eleven", eleven.value)
};

function twelve() {
    localStorage.setItem("twelve", twelve.value)
};

function thirteen() {
    localStorage.setItem("thirteen", thirteen.value)
};

function fourteen() {
    localStorage.setItem("fourteen", fourteen.value)
};

function fifteen() {
    localStorage.setItem("fifteen", fifteen.value)
};

function sixteen() {
    localStorage.setItem("sixteen", sixteen.value)
};

function seventeen() {
    localStorage.setItem("seventeen", seventeen.value)
};