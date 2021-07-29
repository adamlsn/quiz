const startBtn = document.getElementById("start-btn");
const questionEl = document.getElementById("questions-container");
const startup = document.getElementById("startup");
const questionContainer = document.getElementById("question-container");
const answerBtn = document.getElementById("answerBtn")

let score = 0;

let t = 90;
let counter = 0;

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
            { text: "ONE", correct: false },
            { text: "TWO", correct: true },
            { text: "THREE", correct: false },
            { text: "FOUR", correct: false }
        ]
    },   
    {   
        question: "QUESTION THREE",
        answers: [
            { text: "ONE", correct: false },
            { text: "TWO", correct: true },
            { text: "THREE", correct: false },
            { text: "FOUR", correct: false }
        ]
    },
    {   
        question: "QUESTION FOUR",
        answers: [
            { text: "ONE", correct: false },
            { text: "TWO", correct: true },
            { text: "THREE", correct: false },
            { text: "FOUR", correct: false }
        ]
    },
    {   
        question: "QUESTION FIVE",
        answers: [
            { text: "ONE", correct: false },
            { text: "TWO", correct: true },
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
    nextQ(questions);
}

function nextQ(question){
    document.querySelector("#question").textContent = question[questionPosition].question

    document.querySelector("#btn1").textContent = question[questionPosition].answers[0].text;
    document.querySelector("#btn2").textContent = question[questionPosition].answers[1].text;
    document.querySelector("#btn3").textContent = question[questionPosition].answers[2].text;
    document.querySelector("#btn4").textContent = question[questionPosition].answers[3].text;

    document.querySelector(".btn").addEventListener("click", () => {
        if(question[questionPosition].answers.correct){
            score++;
            console.log(score);
            correct();
        } else {
            score --;
            console.log(score);
            incorrect();
        }
    })

    
}

function moveUp(){
    nextQ(questions);
}

function correct(){
    questionPosition++;
    if(questionPosition < 5) moveUp();
    else console.log("STOP");
}

function incorrect(){
    questionPosition++;
    if(questionPosition < 5) moveUp();
    else console.log("STOP");
}