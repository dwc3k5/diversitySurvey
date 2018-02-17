//testing connection in console log
console.log("javascript connected!");

var major;
var type;
var size;
var survey ={
  business:{
    instructor:["If you could change anything about the class, would you?", "Did your classroom experience cover a well rounded D&I topics and conversations?", "What topics related to diversity and inclusion were discussed?", "How did you feel about the coverage of diversity and inclusion in this class?", "How much were you exposed to content created by or research done by underrepresented groups?"],
    student:["sQuestion 1", "sQuestion 2", "sQuestion 3", "sQuestion 4", "sQuestion5"]
  },
  education:{
    instructor:["iQuestion 1", "iQuestion 2", "iQuestion 3", "iQuestion 4", "What cultural lenses did you challenge your students to look through?"],
    student:["How prepared do you feel to teach in highly diverse environments?", "How challenged were you to consider different cultural perspectives of your students?", "sQuestion 3", "sQuestion 4", "What cultural lenses were you challenged to look through?"]
  },
  compSci:{
    instructor:["iQuestion 1", "iQuestion 2", "iQuestion 3", "iQuestion 4", "iQuestion 5"],
    student:["sQuestion 1", "sQuestion 2", "sQuestion 3", "sQuestion 4", "sQuestion5"]
  },
  english:{
    instructor:["How diverse was the representation of authors in your course?", "iQuestion 2", "iQuestion 3", "iQuestion 4", "iQuestion 5"],
    student:["How diverse was the represntation of literature in your program?", "How strongly did the literature challenge your world view?", "sQuestion 3", "sQuestion 4", "sQuestion5"]
  },
  engineering:{
    instructor:["iQuestion 1", "iQuestion 2", "iQuestion 3", "iQuestion 4", "iQuestion 5"],
    student:["What is your name?", "What is your quest?", "What is your favorite Color?", "Why've you got the coconuts?", "What is the air speed velocity of a swallow?"]
  }
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
$(document).on("click", ".subject", function(){
  $(".dropbtn").text(this.text);
  major = this.id;
  this.html(major);
});

$(document).on("click", "#student", function(){
  console.log("you are a student");
  if(major !== "undefined"){
    type = "student";
    console.log(survey);
    student();
  }else{
    console.log("you must choose a major");
  }
});

$(document).on("click", "#instructor", function(){
  console.log("you are an instructor");
  if(major !== "undefined"){
    type = "instructor";
    console.log(survey);
    instructor();
  }else{
    console.log("you must choose a major");
  }
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
  // Here's the code to use if you don't want animations it just toggles the display css
  // $("#homeSection").attr("class", "displayNone");
  // $("#questionSection").attr("class", "display");
  $("#homeSection").attr("class", "animated fadeOut");
  setTimeout(function(){
    //$("#questionSection").attr("class", "animated fadeIn");
    $("#questionSection").attr("class", "show");
    $("#homeSection").attr("class", "displayNone");
  },1000);
  $(".one").text(survey[major][type][0]);
  $(".two").text(survey[major][type][1]);
  $(".three").text(survey[major][type][2]);
  $(".four").text(survey[major][type][3]);
  $(".five").text(survey[major][type][4]);

}

function instructor(){
  console.log("clicked");
  // Here's the code to use if you don't want animations it just toggles the display css
  // $("#homeSection").attr("class", "displayNone");
  // $("#questionSection").attr("class", "display");
  $("#homeSection").attr("class", "animated fadeOut");
  setTimeout(function(){
    $("#questionSection").attr("class", "animated fadeIn");
    $("#homeSection").attr("class", "displayNone");
  },1000);
  $(".one").text(survey[major][type][0]);
  $(".two").text(survey[major][type][1]);
  $(".three").text(survey[major][type][2]);
  $(".four").text(survey[major][type][3]);
  $(".five").text(survey[major][type][4]);
}

function submitted(event){
  console.log("submitted");
  //commented code does not use animations
  // $("#questionSection").attr("class", "displayNone");
  // $("#submissionSection").attr("class", "display");
  $("#questionSection").attr("class", "animated fadeOut");
  setTimeout(function(){
    $("#submissionSection").attr("class", "animated fadeIn");
    $("#questionSection").attr("class", "displayNone");
  },1000);
}
