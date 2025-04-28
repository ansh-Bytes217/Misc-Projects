const answerButtons = document.querySelectorAll('.answer-btn');
const scoreContainer = document.getElementById('score-container');
const scoreDisplay = document.getElementById('score');
const retryBtn = document.getElementById('retry-btn');
const questionText = document.getElementById('question-text');
const answerButtonsContainer = document.getElementById('answer-buttons');

let score = 0;
let currentQuestion = 0;

const questions = [
  {
    question: "What is the theory of relativity?",
    options: [
      "A theory about the laws of motion.",
      "A theory about the speed of light and time.",
      "A theory of gravity."
    ],
    correctAnswer: 1
  },
  {
    question: "Who developed the theory of relativity?",
    options: [
      "Isaac Newton",
      "Albert Einstein",
      "Galileo Galilei"
    ],
    correctAnswer: 1
  },
  {
    question: "What is time dilation in relativity?",
    options: [
      "The slowing of time at high speeds.",
      "The acceleration of time near black holes.",
      "The idea that time is fixed in all frames of reference."
    ],
    correctAnswer: 0
  },
  {
    question: "In Einstein’s theory of relativity, how is mass related to energy?",
    options: [
      "Mass is irrelevant to energy.",
      "Energy is proportional to mass squared.",
      "Mass and energy are inversely proportional."
    ],
    correctAnswer: 1
  },
  {
    question: "What happens to time as an object approaches the speed of light?",
    options: [
      "Time slows down for the object.",
      "Time speeds up for the object.",
      "Time remains unchanged."
    ],
    correctAnswer: 0
  }
];

function showQuestion() {
  const question = questions[currentQuestion];
  questionText.textContent = question.question;

  
  answerButtonsContainer.innerHTML = '';

 
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.classList.add('answer-btn');
    button.textContent = option;
    button.addEventListener('click', () => checkAnswer(index));
    answerButtonsContainer.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  const question = questions[currentQuestion];

  if (selectedIndex === question.correctAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  document.getElementById('question-container').classList.add('hidden');
  scoreDisplay.textContent = score;
  scoreContainer.classList.remove('hidden');
}

retryBtn.addEventListener('click', () => {
  score = 0;
  currentQuestion = 0;
  document.getElementById('question-container').classList.remove('hidden');
  scoreContainer.classList.add('hidden');
  showQuestion();
});


showQuestion();
