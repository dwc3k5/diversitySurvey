//testing connection in console log
console.log("javascript connected!");

var survey ={
  major: "undefined",
  type: "undefined",
  business:{
    instructor:["iQuestion 1", "iQuestion 2", "iQuestion 3", "iQuestion 4", "iQuestion 5"],
    student:["sQuestion 1", "sQuestion 2", "sQuestion 3", "sQuestion 4", "sQuestion5"]
  },
  education:{
    instructor:{

    },
    student:{

    }
  },
  compSci:{
    instructor:{

    },
    student:{

    }
  },
  english:{
    instructor:{

    },
    student:{

    }
  },
  engineering:{
    instructor:{

    },
    student:{

    }
  }
}

var question = {
  studentcompSci:[],
  instructorcompSci:[]
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
  console.log("you selected");
  $(".dropbtn").text(this.text);
  survey.major = this.id;
  console.log(survey.major);
});

$(document).on("click", "#student", function(){
  console.log("you are a student");
  if( survey.major !== "undefined"){
    survey.type = "student";
    console.log(survey);
    student();
  }else{
    console.log("you must choose a major");
  }
});

$(document).on("click", "#instructor", function(){
  console.log("you are an instructor");
  if( survey.major !== "undefined"){
    survey.type = "instructor";
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
