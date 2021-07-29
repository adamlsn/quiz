const startBtn = document.getElementById("start-btn");
const questionEl = document.getElementById("questions-container");
const startup = document.getElementById("startup");
const questionContainer = document.getElementById("question-container");
const answerBtn = document.getElementById("answerBtn")
const endScreen = document.getElementById("end-screen")
const answerEl = document.getElementById("answer")

let score = 0;
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
    timer();
    generateQ();
}

var count = document.querySelector("#countdown");

let seconds = 90;
var timer;
function timer() {
    count.textContent = seconds;
    timer = setInterval(function() {
        seconds--;

        if (seconds === 0) {
            clearInterval(timer);
            alert("You ran out of time!");
        }
    }, 1000)
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

async function checkAnswer(answerPosition) {
    if(questions[questionPosition].answers[answerPosition].correct === true && questions[questionPosition] != null){
        questionPosition++;
        answerEl.textContent = "Correct!"
        return await correct();
    } else {
        answerEl.textContent = "Inorrect! Try again."
        return await incorrect();
    }
}

function end(){
    startBtn.remove();
    startup.remove();
    questionContainer.remove();
    endScreen.classList.remove("hide");
}