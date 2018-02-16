//testing connection in console log
console.log("javascript connected!");

var survey ={
  major: "undefined",
  type: "undefined"

}



// STOLEN for dropdown
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
/*==============================================================================
functions trigger questions to appear based on whether person is a student or instructor and subject area
================================================================================*/
$(document).on("click", "#student", function(){
  console.log("you are a student");
  student();
});

$(document).on("click", "#instructor", function(){
  console.log("you are an instructor");
  instructor();
});

$(document).on("click", ".subject", function(){
  console.log("you selected");
  $(".dropbtn").text(this.text);
  survey.major = this.text;
  console.log(survey.major);
});

$(document).on("click", "#submit", function(event){
  event.preventDefault();
  console.log("you submitted your info");
  submitted();
});
/*
Functions
*/
function student(){
  console.log("clicked");
  $("#homeSection").attr("class", "displayNone");
  $("#questionSection").attr("class", "display");
}

function instructor(){
  console.log("clicked");
  $("#homeSection").attr("class", "displayNone");
  $("#questionSection").attr("class", "display");
}

function submitted(event){
  console.log("submitted");
  $("#questionSection").attr("class", "displayNone");
  $("#submissionSection").attr("class", "display");
}
