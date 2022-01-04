const startButton = document.getElementById("start")
const questionContainers = document.getElementById('question-container')
const questionElement = document.getElementById('question')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    questionsContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text        
    
    button.addEventListener('click', selectAnswer)
    answerButtonElement.appendChild(button)
    })
}


function selectAnswer() {

}

const questions = [
    {
        question: 'What is an Array?',
        answers: [
            { text:'4', correct: false},
            { text: "Is a collection of similar data elements stored at contiguous memory locations.", correct: true}
        ]
    },
    {
        question: 'What is 2+2',
        answers: [
            { text:'4', correct: true},
            { text: "Is a collection of similar data elements stored at contiguous memory locations.", correct: false}
        ]
    },
]