import config from "./config.json";

//Array contains question objects. The object contains an answers property which is an array of answer objects.
const trueFalse = config.sections.quizScreen.questionType.trueFalse;
const multiChoice = config.sections.quizScreen.questionType.multiChoice;

const questions = [
  {
    id: 0,
    question: "What is the primary element of the Elder Dragon Teostra?",
    answers: [
      { text: "Fire", isCorrect: true },
      { text: "Water", isCorrect: false },
      { text: "Ice", isCorrect: false },
      { text: "Thunder", isCorrect: false },
    ],
    type: multiChoice,
  },
  {
    id: 1,
    question: "Rathian is known as the 'Queen of the Skies'.",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true },
    ],
    type: trueFalse,
  },
  {
    id: 2,
    question:
      "Which monster is known for being able to change between Fire and Ice elemental modes?",
    answers: [
      { text: "Alatreon", isCorrect: true },
      { text: "Kushala Daora", isCorrect: false },
      { text: "Velkhana", isCorrect: false },
      { text: "Kushala Daora", isCorrect: false },
    ],
    type: multiChoice,
  },
  {
    id: 3,
    question: "Which of the following monsters is classified as an amphibian?",
    answers: [
      { text: "Tetsucabra", isCorrect: true },
      { text: "Khezu", isCorrect: false },
      { text: "Royal Ludroth", isCorrect: false },
      { text: "Nargacuga", isCorrect: false },
    ],
    type: multiChoice,
  },
  {
    id: 4,
    question: "What is the signature ability of the monster Nergigante?",
    answers: [
      { text: "Regenerating Body Spikes", isCorrect: true },
      { text: "Fireball Attacks", isCorrect: false },
      { text: "Electrical Discharge", isCorrect: false },
      { text: "Poisonous Spikes", isCorrect: false },
    ],
    type: multiChoice,
  },
  {
    id: 5,
    question: "A Rathalos primarily resides in volcanic regions.",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true },
    ],
    type: trueFalse,
  },
  {
    id: 6,
    question: "Lunastra is a female counterpart to the Elder Dragon Teostra.",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    type: trueFalse,
  },
  {
    id: 7,
    question: "Astalos is known for its powerful ice-based attacks.",
    answers: [
      { text: "True", isCorrect: false },
      { text: "False", isCorrect: true },
    ],
    type: trueFalse,
  },
  {
    id: 8,
    question:
      "In Monster Hunter Rise, which new mechanic allows hunters to ride and control monsters temporarily?",
    answers: [
      { text: "Wyvern Riding", isCorrect: true },
      { text: "Wirebug", isCorrect: false },
      { text: "Dragon Piercer", isCorrect: false },
      { text: "Clutch Claw", isCorrect: false },
    ],
    type: multiChoice,
  },
  {
    id: 9,
    question:
      "In Monster Hunter: World, which monster is known to inhabit the Coral Highlands?",
    answers: [
      { text: "Paolumu", isCorrect: true },
      { text: "Radobaan", isCorrect: false },
      { text: "Vaal Hazak", isCorrect: false },
      { text: "Jyuratodus", isCorrect: false },
    ],
    type: multiChoice,
  },
  {
    id: 10,
    question: "Which monster is known as the 'Brutal Elder Dragon'?",
    answers: [
      { text: "Fatalis", isCorrect: true },
      { text: "Nergigante", isCorrect: false },
      { text: "Deviljho", isCorrect: false },
      { text: "Rajang", isCorrect: false },
    ],
    type: multiChoice,
  },
  {
    id: 11,
    question: "Which of the following monsters is considered a Fanged Wyvern?",
    answers: [
      { text: "Zinogre", isCorrect: true },
      { text: "Rathalos", isCorrect: false },
      { text: "Barioth", isCorrect: false },
      { text: "Brachydios", isCorrect: false },
    ],
    type: multiChoice,
  },
  {
    id: 12,
    question:
      "The Glavenus monster uses its bladed tail to deliver explosive slashes.",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    type: trueFalse,
  },
  {
    id: 13,
    question: "Rajang is weak to Thunder element.",
    answers: [
      { text: "True", isCorrect: true },
      { text: "False", isCorrect: false },
    ],
    type: trueFalse,
  },
  {
    id: 14,
    question:
      "Which item increases the number of times you can carve from a monster?",
    answers: [
      { text: "Fate Jewel", isCorrect: true },
      { text: "Lucky Charm", isCorrect: false },
      { text: "Mega Potion", isCorrect: false },
      { text: "Carving Knife", isCorrect: false },
    ],
    type: multiChoice,
  },
];

export default questions;
