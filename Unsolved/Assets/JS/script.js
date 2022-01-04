let questions = [
    {
        title: "What is an array?",
        choice: ["Random items", "Green Beans", "A collection of similar data types", "Object based programming"],
        answer: "A collection of similar data types"
    },
    {
        title: "What is an array?",
        choice: ["Random items", "Green Beans", "A collection of similar data types", "Object based programming"],
        answer: "A collection of similar data types"
    },
    {
        title: "What is an array?",
        choice: ["Random items", "Green Beans", "A collection of similar data types", "Object based programming"],
        answer: "A collection of similar data types"
    },
    {
        title: "What is an array?",
        choice: ["Random items", "Green Beans", "A collection of similar data types", "Object based programming"],
        answer: "A collection of similar data types"
    },
    {
        title: "What is an array?",
        choice: ["Random items", "Green Beans", "A collection of similar data types", "Object based programming"],
        answer: "A collection of similar data types"
    },
];

let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;

let startBtn = document.querySelector("#start");
let questionsElement = document.querySelector("#questions");
let timerElement = document.querySelector("#time");
let questionChoices = document.querySelector("#choices");

startBtn.addEventListener("click", startQuiz )

function startQuiz() {
    let startScreen = document.querySelector("#start-screen");
    startScreen.setAttribute("class", "hide");
    questionsElement.removeAttribute("class");
    console.log('Started')
    getCurrentQuestion();
}

function getCurrentQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let titleElement = document.querySelector("question-title");
    titleElement.textContent = currentQuestion.title;

    questionChoices.textContent = "";

    for (let i = 0; i < currentQuestion.choice.length; i++) {
        let choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", currentQuestion.choice[i]);

        choiceNode.textContent = i + 1 + ". " + currentQuestion.choice[i];

        questionChoices.appendChild(choiceNode);
    }
}

function getAnswer() {

}