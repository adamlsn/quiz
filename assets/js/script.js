const startBtn = document.getElementById("start-btn");
const questionEl = document.getElementById("questions-container");
const startup = document.getElementById("startup");
const questionContainer = document.getElementById("question-container");
const answerBtn = document.getElementById("answerBtn")

let score = 0;

let t = 90;
let counter = 0;

const questions = [
    {
        question: "QUESTION ONE",
        answers: [
            { text: "ONE", correct: false },
            { text: "TWO", correct: false },
            { text: "THREE", correct: true },
            { text: "FOUR", correct: false }
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
    nextQ();
}

function nextQ(question){
    questionEl.innerText = question.question;
    questions.answer.forEach(answer =>{
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");

        if(answer.correct){
            button.dataset.correct = answer.correct
        } else {
            button.dataset.correct = answer.false
        }

        button.addEventListener("click", answerPick);
        answerBtn.appendChild(button);
    })
}