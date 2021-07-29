const startBtn = document.getElementById("start-btn");
const questionEl = document.getElementById("questions-container");
const startup = document.getElementById("startup");
const questionContainer = document.getElementById("question-container");
const answerBtn = document.getElementById("answerBtn")

let score = 0;

let t = 90;
let counter = 0;
let answerPosition;
let questionPosition = 0;

const questions = [
    {
        question: "QUESTION ONE",
        answers: [
            { text: "UNO", correct: false },
            { text: "DOS", correct: true },
            { text: "TRES", correct: false },
            { text: "CUATRO", correct: false }
        ]
    },
    {   
        question: "QUESTION TWO",
        answers: [
            { text: "ONE", correct: true },
            { text: "TWO", correct: false },
            { text: "THREE", correct: false },
            { text: "FOUR", correct: false }
        ]
    },   
    {   
        question: "QUESTION THREE",
        answers: [
            { text: "ONE", correct: false },
            { text: "TWO", correct: false },
            { text: "THREE", correct: true },
            { text: "FOUR", correct: false }
        ]
    },
    {   
        question: "QUESTION FOUR",
        answers: [
            { text: "ONE", correct: false },
            { text: "TWO", correct: false },
            { text: "THREE", correct: false },
            { text: "FOUR", correct: true }
        ]
    },
    {   
        question: "QUESTION FIVE",
        answers: [
            { text: "ONE", correct: true },
            { text: "TWO", correct: false },
            { text: "THREE", correct: false },
            { text: "FOUR", correct: false }
        ]
    }      
]

startBtn.addEventListener("click", init);

function init(){
    startBtn.classList.add("hide");
    startup.classList.add("hide");

    questionContainer.classList.remove("hide");
    generateQ();
}

function generateQ() {
    if(questions[questionPosition] != null){
        console.log(questionPosition)
        nextQ(questions[questionPosition])
    } else {
        end();
    }
}

function nextQ(question){
    document.querySelector("#question").textContent = question.question

    document.querySelector("#btn1").textContent = `1: ${question.answers[0].text}`;
    document.querySelector("#btn2").textContent = `2: ${question.answers[1].text}`
    document.querySelector("#btn3").textContent = `3: ${question.answers[2].text}`
    document.querySelector("#btn4").textContent = `4: ${question.answers[3].text}`

    document.querySelector(["#btn1"]).addEventListener("click", function(){
        answerPosition = 0;
        checkAnswer(answerPosition)
    })

    document.querySelector(["#btn2"]).addEventListener("click", function(){
        answerPosition = 1;
        checkAnswer(answerPosition)
    })

    document.querySelector(["#btn3"]).addEventListener("click", function(){
        answerPosition = 2;
        checkAnswer(answerPosition)
    })

    document.querySelector(["#btn4"]).addEventListener("click", function(){
        answerPosition = 3;
        checkAnswer(answerPosition)
    })

    
}

function correct(){
    score++;
    generateQ();
}

function incorrect(){
    score--;
}

function checkAnswer(answerPosition) {
    if(questions[questionPosition].answers[answerPosition].correct === true && questions[questionPosition] != null){
        questionPosition++;
        correct();
    } else {
        incorrect();
    }
}

function end(){
    console.log("STOP");
}