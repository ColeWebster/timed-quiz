// Questions source: http://mcqspdfs.blogspot.com/2013/08/60-top-javascript-multiple-choice.html

const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = {};

let questions = [
    {
        question: 'Why are JavaScript and Java named similar?',
        choice1: '<JavaScript is a stripped-down version of Java>',
        choice2: '<JavaScripts syntax is loosely based on Javas>',
        choice3: '<They both originated on the island of Java>',
        choice4: '<None of the above>',
        answer: 1
    },
    {
        question: 'Hi?',
        choice1: '<JavaScript is a stripped-down version of Java>',
        choice2: '<JavaScripts syntax is loosely based on Javas>',
        choice3: '<They both originated on the island of Java>',
        choice4: '<None of the above>',
        answer: 1
    },
    {
        question: 'Test',
        choice1: '<JavaScript is a stripped-down version of Java>',
        choice2: '<JavaScripts syntax is loosely based on Javas>',
        choice3: '<They both originated on the island of Java>',
        choice4: '<None of the above>',
        answer: 3
    },
    {
        question: 'What is an Element?',
        choice1: '<JavaScript is a stripped-down version of Java>',
        choice2: '<JavaScripts syntax is loosely based on Javas>',
        choice3: '<Coffee is good>',
        choice4: '<None of the above>',
        answer: 1
    },
    {
        question: 'What is an alert?',
        choice1: '<JavaScript is a stripped-down version of Java>',
        choice2: '<JavaScripts syntax is loosely based on Javas>',
        choice3: '<They both originated on the island of Java>',
        choice4: '<None of the above>',
        answer: 1
    },

]

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS.length){
        localStorage.setItem('mostRecentScore', score);
        return window.location.assign('end.html');
    }
    
    questionCounter++;
    questionCounterText.innerText = questionCounter + '/' + MAX_QUESTIONS;

    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        console.log(selectedAnswer);

        
        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }
        
        getNewQuestion();

    })
})

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

startGame();