var quizContainer = document.getElementById('quiz');
var question = document.getElementById("question");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");




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





//Quiz questions and answers
let myQuestions = [
{
    //First Question & Answer
    question: "When was Javascript first introduced?",
    choiceA: "1992",
    choiceB: "1995",
    choiceC: "1997",
    choiceD: "2000",
    correct: "b"
}, 
{
    //Second Question & Answer
    question: "Who created Javascript?",
    choiceA: "Brendan Eich",
    choiceB: "John Resig",
    choiceC: "Tim Berners-Lee",
    choiceD: "Håkon Wium Lie",
    correct: "a"
},

{
    //Third Question & Answer
    question: "Inside which HTML element do we put the Javascript?",
    choiceA: "<javascript>",
    choiceB: "<js>",
    choiceC: "<scripting>",
    choiceD: "<script>",
    correct: "d"
},

{
    //Fourth Question & Answer
    question: "How do you declare a variable in Javascript?",
    choiceA: "By using the word variable",
    choiceB: "By using parentheses",
    choiceC: "By using the var keyword",
    choiceD: "By using quotes",
    correct: "c"
},

{
    //Fifth Question & Answer
    question: "Where is the correct place to insert Javascript in the html file?",
    choiceA: "Iside the header section",
    choiceB: "At the top of the body",
    choiceC: "At the very bottom of the body",
    choiceD: "Right after the DOCTYPE tag",
    correct: "c"
}
];





let lastQuestionIndex = myQuestions.length - 1;
let questionIndex = 0;



function renderQuestions () {
    let q = myQuestions[questionIndex];
    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

    startCountdown();
}

function startQuiz () {
    renderQuestions();
    checkAnswer();
};







function checkAnswer () {
    //var correct = myQuestions.answer
    if (answer == correct) {
        
        //If answer if correct, reward score value
        //score++;
        startCountdown();
    } else {
        //answer if incorrect, subtract score value
        (answer == !correct)

    }


}



//function getResults () {}





//declaring start button and adding event listener
var startButton = document.getElementById('start');
startButton.addEventListener("click", startQuiz);


//declaring results button and adding event listener
//var submitButton = document.getElementById('submit');
//submitButton.addEventListener("click", getResults);

