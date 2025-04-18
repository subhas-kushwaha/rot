const questions = [
    {
        num: 1,
        question_en: "What is the synonym of the word 'benevolent'?",
        options_en: ["Kind", "Cruel", "Lazy", "Rich"],
        answer: 1,
        attempted: false,
        selected: null
      },
      {
        num: 2,
        question_en: "Choose the correctly punctuated sentence.",
        options_en: [
          "he went to the market and bought apples oranges and bananas.",
          "He went to the market and bought: apples, oranges, and bananas.",
          "He went to the market and bought apples, oranges, and bananas.",
          "He went to the market and bought, apples oranges and bananas."
        ],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 3,
        question_en: "Identify the part of speech for the underlined word: 'She runs **quickly** to catch the bus.'",
        options_en: ["Noun", "Adverb", "Adjective", "Verb"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 4,
        question_en: "What is the antonym of 'optimistic'?",
        options_en: ["Hopeful", "Cheerful", "Pessimistic", "Energetic"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 5,
        question_en: "Which sentence is in the passive voice?",
        options_en: [
          "The teacher gave the students homework.",
          "The students completed the homework.",
          "Homework was given to the students by the teacher.",
          "The teacher is giving homework."
        ],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 6,
        question_en: "What is the correct indirect speech: She said, “I am tired.”",
        options_en: [
          "She says that she is tired.",
          "She said that she was tired.",
          "She said that I was tired.",
          "She said that she is tired."
        ],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 7,
        question_en: "Which of the following is a formal expression?",
        options_en: ["Wanna go out?", "Let’s chill!", "Would you like to join us?", "Hey, buddy!"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 8,
        question_en: "What is the purpose of a report in writing?",
        options_en: ["To argue", "To entertain", "To narrate", "To inform"],
        answer: 4,
        attempted: false,
        selected: null
      },
      {
        num: 9,
        question_en: "Choose the correct spelling.",
        options_en: ["Accomodation", "Accommodation", "Acommodation", "Accommadation"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 10,
        question_en: "Which connector is used to express contrast?",
        options_en: ["Because", "Although", "Since", "Therefore"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 11,
        question_en: "What should be avoided in a formal letter?",
        options_en: ["Polite language", "Slang", "Grammatical accuracy", "Clear purpose"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 12,
        question_en: "Choose the correct sentence in reported speech.",
        options_en: [
          "She said she can sing.",
          "She said that she could sing.",
          "She says she could sing.",
          "She told she can sing."
        ],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 13,
        question_en: "Which of these is not a type of sentence?",
        options_en: ["Declarative", "Interrogative", "Narrative", "Imperative"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 14,
        question_en: "Which of these is a correct modal verb use?",
        options_en: ["He can sings well.", "He must goes now.", "She can speak French.", "She should to come early."],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 15,
        question_en: "Choose the suitable title for a report on a school fair.",
        options_en: ["Awesome Time", "Report on School Annual Fair", "Party Day", "Fun in the Sun"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 16,
        question_en: "What is the function of a conclusion in an article?",
        options_en: ["To introduce topic", "To give examples", "To summarize and end", "To provide facts"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 17,
        question_en: "What is the figure of speech in 'The wind whispered through the trees'?",
        options_en: ["Simile", "Personification", "Metaphor", "Alliteration"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 18,
        question_en: "Which of the following is an exclamatory sentence?",
        options_en: ["What a beautiful view!", "I see the mountain.", "Where is your house?", "She lives in Delhi."],
        answer: 1,
        attempted: false,
        selected: null
      },
      {
        num: 19,
        question_en: "Choose the correct synonym of 'enormous'.",
        options_en: ["Tiny", "Huge", "Delicate", "Slow"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 20,
        question_en: "Which tense is used in: 'I have been reading for two hours'?",
        options_en: ["Present Perfect", "Past Continuous", "Present Perfect Continuous", "Past Perfect Continuous"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 21,
        question_en: "Choose the sentence that uses a relative clause.",
        options_en: [
          "I went to the store.",
          "The boy who won the race is my friend.",
          "It was raining yesterday.",
          "She will go tomorrow."
        ],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 22,
        question_en: "Identify the type of phrase: 'to win the prize'",
        options_en: ["Noun phrase", "Adjective phrase", "Adverb phrase", "Infinitive phrase"],
        answer: 4,
        attempted: false,
        selected: null
      },
      {
        num: 23,
        question_en: "Which of the following is a determiner?",
        options_en: ["Quickly", "Few", "Run", "Although"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 24,
        question_en: "Choose the correct passive form: 'They completed the project.'",
        options_en: [
          "The project was completed by them.",
          "They are completed the project.",
          "The project is completed.",
          "They was completed the project."
        ],
        answer: 1,
        attempted: false,
        selected: null
      },
      {
        num: 25,
        question_en: "Which one is an example of a formal closing in a letter?",
        options_en: ["Cheers", "Later!", "Yours sincerely", "Take care"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 25,
        question_en: "What is the central theme of 'Lost Spring'?",
        options_en: ["Poverty and child labour", "Seasonal changes", "Rural education", "Religious festivals"],
        answer: 1,
        attempted: false,
        selected: null
      },
      {
        num: 26,
        question_en: "Why did the author visit Seemapuri?",
        options_en: ["To study child labor", "To research food habits", "To explore tourism", "To interview local politicians"],
        answer: 1,
        attempted: false,
        selected: null
      },
      {
        num: 27,
        question_en: "What does the garbage symbolize in 'Lost Spring'?",
        options_en: ["Wealth and opportunity", "Beauty of nature", "Seasonal change", "Hope for a better life"],
        answer: 4,
        attempted: false,
        selected: null
      },
      {
        num: 28,
        question_en: "In 'Deep Water', what caused the author's fear of water?",
        options_en: ["Drowning at sea", "Watching a horror movie", "Being thrown into a pool", "Slipping in the bath"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 29,
        question_en: "Who is the author of 'Deep Water'?",
        options_en: ["Douglas Malloch", "William Douglas", "Stephen Hawking", "John Donne"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 30,
        question_en: "What message does 'Deep Water' convey?",
        options_en: ["Water is dangerous", "Overcoming fear is possible", "Avoid swimming pools", "Never trust friends"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 31,
        question_en: "How did the author overcome his fear in 'Deep Water'?",
        options_en: ["With professional help", "By facing it gradually", "With a magic potion", "By never swimming again"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 32,
        question_en: "What is the central idea of 'The Rattrap'?",
        options_en: ["Mystery of the forest", "Life is a rattrap", "Importance of honesty", "The life of a salesman"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 33,
        question_en: "Who is the author of 'The Rattrap'?",
        options_en: ["Selma Lagerlöf", "Pearl S. Buck", "Jane Austen", "Leo Tolstoy"],
        answer: 1,
        attempted: false,
        selected: null
      },
      {
        num: 34,
        question_en: "How does the ironmaster’s daughter treat the peddler?",
        options_en: ["With suspicion", "With cruelty", "With kindness", "With indifference"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 35,
        question_en: "What changes the peddler’s heart in 'The Rattrap'?",
        options_en: ["Money", "Threats", "The girl's compassion", "Fear of prison"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 36,
        question_en: "What does the peddler compare the world to?",
        options_en: ["A battlefield", "A book", "A forest", "A rattrap"],
        answer: 4,
        attempted: false,
        selected: null
      },
      {
        num: 37,
        question_en: "Why did the peddler steal from the old crofter?",
        options_en: ["He was hungry", "He wanted revenge", "He was poor and greedy", "He needed to travel"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 38,
        question_en: "How did the peddler repay the ironmaster's daughter?",
        options_en: ["By gifting her the rattrap", "By returning the stolen money", "By leaving a thank-you note and gift", "By apologizing in person"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 39,
        question_en: "What role does Christmas play in 'The Rattrap'?",
        options_en: ["It is when the story ends", "It emphasizes kindness and redemption", "It is the peddler’s birthday", "It causes conflict"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 40,
        question_en: "What literary device is used in the story 'The Rattrap'?",
        options_en: ["Irony", "Metaphor", "Simile", "All of these"],
        answer: 4,
        attempted: false,
        selected: null
      },
      {
        num: 41,
        question_en: "What occupation did the peddler have?",
        options_en: ["Farmer", "Thief", "Blacksmith", "Seller of rattraps"],
        answer: 4,
        attempted: false,
        selected: null
      },
      {
        num: 42,
        question_en: "What was the crofter’s source of income?",
        options_en: ["Teaching", "Pension and cow’s milk", "Fishing", "Woodcutting"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 43,
        question_en: "What kind of life did the peddler live before the story?",
        options_en: ["Comfortable", "Respectable", "Hard and lonely", "Royal"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 44,
        question_en: "What was the ultimate transformation in the peddler?",
        options_en: ["He became a king", "He remained a thief", "He became a changed man", "He ran away"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 45,
        question_en: "What does the rattrap symbolize in the story?",
        options_en: ["Freedom", "Greed and traps of life", "Beauty", "Love"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 46,
        question_en: "How did the ironmaster initially react to the peddler?",
        options_en: ["Welcomed him warmly", "Mistook him for an old friend", "Chased him away", "Arrested him"],
        answer: 2,
        attempted: false,
        selected: null
      },
      {
        num: 47,
        question_en: "Why didn’t the peddler reveal his identity?",
        options_en: ["He was shy", "He enjoyed lying", "He was afraid of being caught", "He thought he’d get better treatment"],
        answer: 4,
        attempted: false,
        selected: null
      },
      {
        num: 48,
        question_en: "Who helped the peddler realize his mistakes?",
        options_en: ["The ironmaster", "The crofter", "Edla", "His inner voice"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 49,
        question_en: "What does Edla symbolize in the story?",
        options_en: ["Harshness", "Curiosity", "Kindness and transformation", "Revenge"],
        answer: 3,
        attempted: false,
        selected: null
      },
      {
        num: 50,
        question_en: "What does the story 'The Rattrap' teach us?",
        options_en: ["Always carry a rattrap", "Be clever to survive", "The power of kindness and redemption", "Fear is good"],
        answer: 3,
        attempted: false,
        selected: null
      }
    // Continue adding more questions up to 30
];

// Add more questions as needed...

let currentQuestion = 0;
let language = "en"; // Default English
const circlesPerPage = 70;
let currentCirclePage = 0;
let timeLeft = 300;
let timerInterval;

function loadQuestion(index) {
    const questionText = language === "en" ? questions[index].question_en : questions[index].question_hi;
    const optionsArray = language === "en" ? questions[index].options_en : questions[index].options_hi;

    document.getElementById("question").textContent = `${questions[index].num}. ${questionText}`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    optionsArray.forEach(option => {
        optionsElement.innerHTML += `<li><input type="radio" name="option" value="${option}" onclick="markAttempted(${index}, '${option}')"> ${option}</li>`;
    });

    updateCircles();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateCircles();
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

function updateCircles() {
    const circleContainer = document.getElementById("circleContainer");
    circleContainer.innerHTML = "";
    const start = currentCirclePage * circlesPerPage;
    const end = Math.min(start + circlesPerPage, questions.length);

    for (let i = start; i < end; i++) {
        const q = questions[i];
        let status = i === currentQuestion ? "active" : q.attempted ? "answered" : "not-attempted";
        circleContainer.innerHTML += `<div class="circle ${status}" onclick="jumpToQuestion(${i})">${i + 1}</div>`;
    }
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

function prevCirclePage() {
    if (currentCirclePage > 0) {
        currentCirclePage--;
        updateCircles();
    }
}

function nextCirclePage() {
    if ((currentCirclePage + 1) * circlesPerPage < questions.length) {
        currentCirclePage++;
        updateCircles();
    }
}

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    let attempted = 0, notAttempted = 0, score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer) score++;
        } else {
            notAttempted++;
        }
        results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer });
    });

    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
    if (viewResult) {
        window.location.href = "/Deshbord/category/test/submit-test.html";
    }
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Submitting the quiz automatically.");
            submitQuiz();
        } else {
            timerElement.textContent = timeLeft;
            timeLeft--;
        }
    }, 1000);
}

window.onload = function () {
    startTimer();
    loadQuestion(currentQuestion);
};
