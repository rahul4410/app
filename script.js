const questions = [
  {
    question: "Who starts fights first?",
    options: ["Buggie (Ashima)", "Guddha (Rahul)"],
    correct: 0
  },
  {
    question: "Who is more emotional?",
    options: ["Buggie", "Guddha"],
    correct: 1
  },
  {
    question: "Rahul & Ashima's love story is full of?",
    options: ["Fight & teasing", "Calm & quiet"],
    correct: 0
  },
  {
    question: "Who agrees late after fights?",
    options: ["Guddha", "Buggie"],
    correct: 0
  },
  {
    question: "Dream date destination?",
    options: ["Kashi", "Manali"],
    correct: 0
  },
  {
    question: "If Buggie’s mood is off, what’s Guddha’s magic formula?",
    options: ["Ice Cream Treat 🍦", "Tight Hug 🤗"],
    correct: 1
  },
  {
    question: "Who gets more confused while shopping?",
    options: ["Guddha 🛒", "Buggie 🛍️"],
    correct: 1
  },
  {
    question: "Who asks more often 'khana khaya?' or 'paani piya?'",
    options: ["Guddha 🍽️", "Buggie 💧"],
    correct: 1
  },
  {
    question: "Who sends goodnight messages first?",
    options: ["Guddha 🌙", "Buggie 💌"],
    correct: 0
  },
  {
    question: "Who plans cute future dreams more? (shaadi, trips, kids talk)",
    options: ["Buggie 💭", "Guddha 🤭"],
    correct: 0
  }
];

let current = 0;
let score = 0;

function startGame() {
  document.getElementById('intro').style.display = 'none';
  document.getElementById('end').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  current = 0;
  score = 0;
  document.getElementById('score').innerText = score;
  showQuestion();
}

function showQuestion() {
  const q = questions[current];
  document.getElementById('question').innerText = q.question;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';
  q.options.forEach((opt, index) => {
    const btn = document.createElement('button');
    btn.innerText = opt;
    btn.onclick = () => checkAnswer(index, btn);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected, btn) {
  const q = questions[current];
  if (selected === q.correct) {
    btn.classList.add('correct');
    score++;
    document.getElementById('score').innerText = score;
  } else {
    btn.classList.add('wrong');
  }
  setTimeout(() => {
    current++;
    if (current < questions.length) {
      showQuestion();
    } else {
      endGame();
    }
  }, 800);
}

function endGame() {
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('end').style.display = 'block';
  document.getElementById('final-score').innerText = score;
}
