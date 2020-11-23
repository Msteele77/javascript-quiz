var secondWrapper = document.getElementById("wrapper2");
var formGroup = document.getElementById('fromgroup');
var done = document.getElementById("done").textContent = "All Done!";
var yourScore = document.getElementById("yourscore").textContent = "Your final score is ";
//var userScore = document.getElementById("displayuserscore").textContent = score;
var final = document.getElementById("final").textContent = "Enter your initials to document high score!";



var submitButton = document.getElementById('submit');
submitButton.addEventListener("enter", addScore);

function addScore (event) {
    event.preventDefault();

var initials = document.getElementById("enterinitials").value;

var score=localStorage.getItem("score");
localStorage.setItem("initials", input);

var dataObj = {
    score: score,
    initials: initials,
};

}



