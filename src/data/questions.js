//Array contains question objects. The object contains an answers property which is an array of answer objects.
const questions = [
    {
        id: 0,
        question: "This is the first question",
        answers: [
            {text:"a", isCorrect: true},
            {text:"b", isCorrect: false},
            {text:"c", isCorrect: false},
            {text:"d", isCorrect: false}
        ],
        type: "multiple-choice"
    },
    {
        id: 1,
        question: "This is the first true or false question",
        answers: [
            {text:"true", isCorrect: true},
            {text:"false", isCorrect: false},
        ],
        type: "true-false"
    }
];

export default questions;