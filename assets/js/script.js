

function startCountdown () {
var seconds = document.getElementById("countdown").textContent;
var countdown = setInterval(function(){
    seconds--;
    (seconds == 1) ? document.getElementById("plural").textContent = "" : document.getElementById("plural").textContent = "s";
    document.getElementById("countdown").textContent = seconds;
    if (seconds <= 0) clearInterval(countdown);
    //go to results page
},1000);
}




function generateQuiz () {
    showQuestions();
        startCountdown();
}


//Iterate through questions

function showQuestions() {
    var output = [];
    var correctAnswers;
    for (i = 0; i < myQuestions.length; i++)

    correctAnswer = [];

}



//Quiz questions and answers
var myQuestions = [
{
    //First Question & Answer
    question: "When was Javascript first introduced?",
    choices: {
    a: "1992",
    b: "1995",
    c: "1997",
    d: "2000"
},
    correctAnswer: "b"
},

{
    //Second Question & Answer
    question: "Who created Javascript?",
    choices: {
    a: "Brendan Eich",
    b: "John Resig",
    c: "Tim Berners-Lee",
    d: "Håkon Wium Lie"
},
    correctAnswer: "a"
},

{
    //Third Question & Answer
    question: "Inside which HTML element do we put the Javascript?",
    choices: {
    a: "<javascript>",
    b: "<js>",
    c: "<scripting>",
    d: "<script>"
},
    correctAnswer: "d"
},

{
    //Fourth Question & Answer
    question: "How do you declare a variable in Javascript?",
    choices: {
    a: "By using the word variable",
    b: "By using parentheses",
    c: "By using the var keyword",
    d: "By using quotes"
},
    correctAnswer: "c"
},

{
    //Fifth Question & Answer
    question: "Where is the correct place to insert Javascript in the html file?",
    choices: {
    a: "Iside the header section",
    b: "At the top of the body",
    c: "At the very bottom of the body",
    d: "Right after the DOCTYPE tag"
},
    correctAnswer: "c"
}
];



function getResults () {

}

//declaring start button and adding even listener
var startButton = document.getElementById('start');
startButton.addEventListener("click", generateQuiz);


//declaring results button and adding even listener
var submitButton = document.getElementById('submit');
submitButton.addEventListener("click", getResults);

