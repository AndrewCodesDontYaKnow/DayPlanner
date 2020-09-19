$(document).ready(function() {


// SAVE FUNCTION
// select the save button
$(".saveBtn").on("click", function() {
  // the variable gets description out of input box
  var description = $(this).siblings(".eventInput").val();
  // select the parent element, select its id attribute, this grabs the nearby value
  var time = $(this).parent().attr("id");
  // save description and time to localstorage
  localStorage.setItem(time, description)
})


// Function to update the hours
function updateHours() {
  // variable for the current time from moment.js
  var currentTime = moment().hours();
  $(".time-block").each(function(){
    // this variable gets the time of the div youre in
  var currentDivTime = parseInt($(this).attr("id")); 

  if (currentDivTime < currentTime) {
    $(this).addClass("past");
  } else if (currentDivTime === currentTime){
    $(this).removeClass("past");
    $(this).removeClass("future")
    $(this).addClass("present");
  } else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
    console.log("current div time: " + currentDivTime)
    console.log("current time: " + currentTime)
  }
  })
}

updateHours();

// CREATE THIS FOR EVERY HOUR
// set the values for the divs from local storage 
// get the v
$("#9 .eventInput").val(localStorage.getItem("9"))
$("#10 .eventInput").val(localStorage.getItem("10"))
$("#11 .eventInput").val(localStorage.getItem("11"))
$("#12 .eventInput").val(localStorage.getItem("12"))
$("#13 .eventInput").val(localStorage.getItem("13"))
$("#14 .eventInput").val(localStorage.getItem("14"))
$("#15 .eventInput").val(localStorage.getItem("15"))
$("#16 .eventInput").val(localStorage.getItem("16"))
$("#17 .eventInput").val(localStorage.getItem("17"))



});



// import moment.js
const m = moment();

// create from ISO 8601
// const m = moment("2019-05-19T12:10:00.000")

// a variable to reference the text in the date/time h1 display
var dateTester = document.getElementById('datetest')
// a function to set the date with m.format LLLL
function setDate() {
  dateTester.textContent = (m.format("LLLL"))
}
setDate();