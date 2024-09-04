//Array contains question objects. The object contains an answers property which is an array of answer objects.
const questions = [
    {
        id: 0,
        question: "",
        answers: [
            {text:"", isCorrect: true},
            {text:"", isCorrect: false},
            {text:"", isCorrect: false},
            {text:"", isCorrect: false}
        ],
        type: "multiple-choice"
    },
    {
        id: 1,
        question: "",
        answers: [
            {text:"", isCorrect: true},
            {text:"", isCorrect: false},
            {text:"", isCorrect: false},
            {text:"", isCorrect: false}
        ],
        type: "true-false"
    }
];

export default questions;