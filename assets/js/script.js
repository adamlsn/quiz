const startBtn = document.getElementById("start-btn");
const questionEl = document.getElementById("questions-container");

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
    console.log("BUTTON WORKS")
}