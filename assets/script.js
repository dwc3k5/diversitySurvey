//testing connection in console log
console.log("javascript connected!");


/*
functions trigger questions to appear based on whether person is a student or instructor
*/
$(document).on("click", "#student", function(){
  console.log("you are a student");
  student();
});

$(document).on("click", "#instructor", function(){
  console.log("you are an instructor");
  instructor();
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
