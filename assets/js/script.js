var quizContainer = document.getElementById('quiz');
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var startPrompt = document.getElementById ("startprompt");
var submitButton = document.getElementById("submit");
var results = document.getElementById("results-page");
var seconds = document.getElementById("countdown").textContent;
var resultsPage = document.getElementById("results-page");






//Starts countdown
function startCountdown () {

var countdown = setInterval(function(){
    seconds--;
    ("seconds" == 1) ? document.getElementById("plural").textContent = "" : document.getElementById("plural").textContent = "s";
    document.getElementById("countdown").textContent = seconds;
    if ("seconds" <= 0) clearInterval(countdown);
    //go to results page
},1000);
}


//Quiz questions and answers
let myQuestions = [
{
    //First Question & Answer
    question: "When was Javascript first introduced?",
    choiceA: "1992",
    choiceB: "1995",
    choiceC: "1997",
    choiceD: "2000",
    correct: "choiceB"
}, 
{
    //Second Question & Answer
    question: "Who created Javascript?",
    choiceA: "Brendan Eich",
    choiceB: "John Resig",
    choiceC: "Tim Berners-Lee",
    choiceD: "Håkon Wium Lie",
    correct: "choiceA"
},

{
    //Third Question & Answer
    question: "Inside which HTML element do we put the Javascript?",
    choiceA: "javascript",
    choiceB: "js",
    choiceC: "scripting",
    choiceD: "script",
    correct: "choiceD"
},

{
    //Fourth Question & Answer
    question: "How do you declare a variable in Javascript?",
    choiceA: "By using the word variable",
    choiceB: "By using parentheses",
    choiceC: "By using the var keyword",
    choiceD: "By using quotes",
    correct: "choiceC"
},

{
    //Fifth Question & Answer
    question: "Where is the correct place to insert Javascript in the html file?",
    choiceA: "Inside the header section",
    choiceB: "At the top of the body",
    choiceC: "At the very bottom of the body",
    choiceD: "Right after the DOCTYPE tag",
    correct: "choiceC"
}
];

let lastQuestionIndex = myQuestions.length - 1;
let questionIndex = 0;

//Generates Questions
function renderQuestions () {
    document.getElementById("display").textContent = '';
    let q = myQuestions[questionIndex];
     question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
     choiceD.innerHTML = q.choiceD;
 }

 //When start button is clicked
 function startQuiz () {
    startPrompt.remove();
    startCountdown();
    renderQuestions();
    showScore();
};





function checkAnswer (answer) {
    //answer is correct
   if (answer === myQuestions[questionIndex].correct) {
   score += correctscore;
   showScore();
    console.log(score);
} 
    else {
    //User input is incorrect
    
    seconds -= 10
    
    
    console.log("incorrect")
    }
    
     if (questionIndex < lastQuestionIndex) {
        
          
         
     questionIndex++;
     renderQuestions();
     
      }
      
 }




//score properties
 var score = 0;
 var correctscore = 10;

function showScore () {
    
var displayscore =  document.getElementById("presentscore").textContent = "YOUR SCORE: " + score;
 
}






function resultsPage () {
startCountdown.remove();
renderQuestions.remove();
}

//declaring start button and adding event listener
var startButton = document.getElementById('start');
startButton.addEventListener("click", startQuiz);

//declaring results button and adding event listener
//var submitButton = document.getElementById('submit');
//submitButton.addEventListener("click", getResults);
