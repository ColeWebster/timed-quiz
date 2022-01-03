var questions = [
    {
        title: "What is an array?",
        choice: ["Random items", "Green Beans", "A collection of similar data types", "Object based programming"],
        answer: "A collection of similar data types"
    },
    {
        title: 
        choice: []
        answer:
    },
    {
        title:
        choice: []
        answer:
    },
    {
        title:
        choice: []
        answer:
    },
    {
        title:
        choice: []
        answer:
    },
    {
        title:"";
        choice: "";
        answer: "";
    },
]

var currentQuestionIndex = 0;
// Keeps track of the quiz
var time = questions.length * 15;
var timerId;

var startBtn = document.querySelector("#start");
var questionsElement = document.querySelector("#questions")
var timerElement = document.querySelector("#time");
var questionChoices = document.querySelector("#choices")

function startQuiz() {
    var startScreen = document.querySelector("#start-screen");
    startScreen.setAttribute("class", "hide");
    questionsElement.removeAttribute("class");

    getCurrentQuestion();
}

function getCurrentQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var titleElement = document.querySelector("question-title");
    titleElement.textContent = currentQuestion.title;

    questionChoices.textContent = "";
}