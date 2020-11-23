var secondWrapper = document.getElementById("wrapper2");
var formGroup = document.getElementById('fromgroup');
var done = document.getElementById("done").textContent = "All Done!";
var yourScore = document.getElementById("yourscore").textContent = "Your final score is " + score;
//var userScore = document.getElementById("displayuserscore").textContent = score;
var final = document.getElementById("final").textContent = "Enter your initials to document high score!";
//var displayHighscore = document.getElementById("object").textContent= "hey";


var submitButton = document.getElementById('submit');
submitButton.addEventListener("click", addScore);

 
var score = localStorage.getItem(score);
var scoreJSON = JSON.stringify(score);
function addScore (event) {
    
    event.preventDefault();
    var initials = document.getElementById("enterinitials").value;
    
localStorage.setItem("initials", initials);

var myJSON = JSON.stringify(dataObj);

var dataObj = {
    score: score,
    userinitials: initials,
  };
}

