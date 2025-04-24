const questions = [
        {
          num: 1,
          question_en: "Who is the author of 'The Last Lesson'?",
          options_en: ["Alphonse Daudet", "Stephen Spender", "Douglas", "John Keats"],
          answer: 1,
          attempted: false,
          selected: null
        },
        {
          num: 2,
          question_en: "What is the name of the narrator in 'The Last Lesson'?",
          options_en: ["M. Hamel", "Franz", "Victor", "Louis"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 3,
          question_en: "Where does the story 'The Last Lesson' take place?",
          options_en: ["France", "Alsace", "Prussia", "Paris"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 4,
          question_en: "Which language was banned in the schools of Alsace and Lorraine?",
          options_en: ["English", "French", "German", "Spanish"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 5,
          question_en: "Who was M. Hamel?",
          options_en: ["The mayor", "The blacksmith", "The teacher", "The postman"],
          answer: 3,
          attempted: false,
          selected: null
        },
        {
          num: 6,
          question_en: "Why was Franz afraid to go to school?",
          options_en: ["He was late", "He had not prepared the lesson", "He had homework", "He missed the bus"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 7,
          question_en: "What was written on the blackboard at the end of the lesson?",
          options_en: ["Long live Alsace!", "Long live Germany!", "Vive La France!", "Vive L’Allemagne!"],
          answer: 3,
          attempted: false,
          selected: null
        },
        {
          num: 8,
          question_en: "How did the villagers show respect for the last French lesson?",
          options_en: ["They brought flowers", "They attended the class", "They protested", "They clapped"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 9,
          question_en: "What emotion does Franz feel during the last lesson?",
          options_en: ["Joy", "Pride", "Shame", "Anger"],
          answer: 3,
          attempted: false,
          selected: null
        },
        {
          num: 10,
          question_en: "What did M. Hamel say about the French language?",
          options_en: ["It was difficult", "It was the clearest and most beautiful", "It would disappear", "It was useless"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 11,
          question_en: "Who occupied Alsace and Lorraine during the story?",
          options_en: ["French", "Germans", "British", "Russians"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 12,
          question_en: "Why was the last lesson special?",
          options_en: ["It was the last day of school", "M. Hamel was retiring", "It was the last French lesson", "A new principal was joining"],
          answer: 3,
          attempted: false,
          selected: null
        },
        {
          num: 13,
          question_en: "What had Franz counted on to save him from reciting?",
          options_en: ["A distraction", "A crowd", "Comprehension test", "The pigeons"],
          answer: 1,
          attempted: false,
          selected: null
        },
        {
          num: 14,
          question_en: "How long had M. Hamel been teaching in the village?",
          options_en: ["10 years", "20 years", "30 years", "40 years"],
          answer: 4,
          attempted: false,
          selected: null
        },
        {
          num: 15,
          question_en: "What did M. Hamel blame the people of Alsace for?",
          options_en: ["Being patriotic", "Not valuing their language", "Supporting Germans", "Reading newspapers"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 16,
          question_en: "What does 'The Last Lesson' highlight?",
          options_en: ["Importance of education", "Love for nature", "Love for animals", "Power of money"],
          answer: 1,
          attempted: false,
          selected: null
        },
        {
          num: 17,
          question_en: "What was Franz expected to recite?",
          options_en: ["Poem", "Grammar", "Participles", "Prose"],
          answer: 3,
          attempted: false,
          selected: null
        },
        {
          num: 18,
          question_en: "What did Franz notice about the classroom that day?",
          options_en: ["It was noisy", "It was unusually quiet", "It was full of soldiers", "It was empty"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 19,
          question_en: "What did M. Hamel wear on the last day?",
          options_en: ["Casual clothes", "His best Sunday clothes", "Military uniform", "White suit"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 20,
          question_en: "What does 'The Last Lesson' suggest about language?",
          options_en: ["It is irrelevant", "It is a symbol of identity and freedom", "It can be changed easily", "It is boring"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 21,
          question_en: "What did M. Hamel say about procrastination?",
          options_en: ["It is useful", "It helps people", "It causes loss", "It is fun"],
          answer: 3,
          attempted: false,
          selected: null
        },
        {
          num: 22,
          question_en: "How did Franz feel after the last lesson?",
          options_en: ["Happy", "Relieved", "Sorry and regretful", "Excited"],
          answer: 3,
          attempted: false,
          selected: null
        },
        {
          num: 23,
          question_en: "Why did M. Hamel not scold Franz for being late?",
          options_en: ["He was in a good mood", "He knew it was the last day", "Franz apologized", "Franz brought flowers"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 24,
          question_en: "What does the church clock symbolize in the story?",
          options_en: ["Festivity", "Time running out", "Religious faith", "Success"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 25,
          question_en: "What is the main message of 'The Last Lesson'?",
          options_en: ["Value your culture and language before it's too late", "Teachers are kind", "Exams are stressful", "School is boring"],
          answer: 1,
          attempted: false,
          selected: null
        },
        {
            num: 26,
            question_en: "What was the Gemini Studios mainly known for?",
            options_en: ["Film processing", "Shooting documentaries", "Makeup and movies", "Sound recording"],
            answer: 3,
            attempted: false,
            selected: null
          },
          {
            num: 27,
            question_en: "Who was the office boy in 'Poets and Pancakes' frustrated with?",
            options_en: ["The director", "The narrator", "The makeup department", "The poet Subbu"],
            answer: 4,
            attempted: false,
            selected: null
          },
          {
            num: 28,
            question_en: "What material was mainly used in the makeup department?",
            options_en: ["Powder", "Greasepaint", "Paint", "Herbs"],
            answer: 2,
            attempted: false,
            selected: null
          },
          {
            num: 29,
            question_en: "Who was Kothamangalam Subbu?",
            options_en: ["A poet", "An actor", "An assistant to the director", "A make-up artist"],
            answer: 3,
            attempted: false,
            selected: null
          },
          {
            num: 30,
            question_en: "Which language did the English poet in Gemini Studios speak in?",
            options_en: ["Hindi", "French", "English", "Russian"],
            answer: 3,
            attempted: false,
            selected: null
          },
          {
            num: 31,
            question_en: "What was the main problem faced by Indigo farmers?",
            options_en: ["Lack of land", "Poverty", "Forced cultivation by British", "Heavy rains"],
            answer: 3,
            attempted: false,
            selected: null
          },
          {
            num: 32,
            question_en: "Who was Rajkumar Shukla?",
            options_en: ["An Indigo farmer", "A British officer", "Gandhiji’s secretary", "A government official"],
            answer: 1,
            attempted: false,
            selected: null
          },
          {
            num: 33,
            question_en: "What role did Gandhiji play in the Indigo movement?",
            options_en: ["He led the protest", "He ignored it", "He opposed farmers", "He joined British"],
            answer: 1,
            attempted: false,
            selected: null
          },
          {
            num: 34,
            question_en: "Which place did Gandhiji visit to help the Indigo farmers?",
            options_en: ["Ahmedabad", "Champaran", "Kheda", "Lucknow"],
            answer: 2,
            attempted: false,
            selected: null
          },
          {
            num: 35,
            question_en: "What impact did the Champaran episode have?",
            options_en: ["Started violent revolt", "Proved Gandhi wrong", "Started civil disobedience", "Showed Gandhi’s leadership"],
            answer: 4,
            attempted: false,
            selected: null
          },
          {
            num: 36,
            question_en: "What did Sophie dream of in 'Going Places'?",
            options_en: ["Becoming an actress", "Owning a boutique", "Going abroad", "Becoming a manager"],
            answer: 2,
            attempted: false,
            selected: null
          },
          {
            num: 37,
            question_en: "Who was Sophie’s real idol?",
            options_en: ["Her teacher", "Her father", "Danny Casey", "Geoff"],
            answer: 3,
            attempted: false,
            selected: null
          },
          {
            num: 38,
            question_en: "What kind of relationship did Sophie have with Geoff?",
            options_en: ["Strained", "Jealous", "Trusting and admiring", "Indifferent"],
            answer: 3,
            attempted: false,
            selected: null
          },
          {
            num: 39,
            question_en: "Why did Sophie lie about meeting Danny Casey?",
            options_en: ["To impress Geoff", "To get famous", "To fulfill her fantasy", "To mislead her parents"],
            answer: 3,
            attempted: false,
            selected: null
          },
          {
            num: 40,
            question_en: "What was Sophie's reality in contrast to her fantasy?",
            options_en: ["She was rich", "She had many options", "She was from a poor background", "She could meet celebrities"],
            answer: 3,
            attempted: false,
            selected: null
          },
          {
            num: 41,
            question_en: "What did the writer say about the pancake makeup?",
            options_en: ["It smelled good", "It was rarely used", "It was used excessively", "It was imported from America"],
            answer: 3,
            attempted: false,
            selected: null
          },
          {
            num: 42,
            question_en: "How did the people at Gemini Studios perceive communism?",
            options_en: ["With full understanding", "They were indifferent", "They were confused", "They followed it strictly"],
            answer: 3,
            attempted: false,
            selected: null
          },
          {
            num: 43,
            question_en: "What was the irony in the English poet’s visit to Gemini Studios?",
            options_en: ["He spoke in Hindi", "No one understood his speech", "He was a film star", "He acted in a movie there"],
            answer: 2,
            attempted: false,
            selected: null
          },
          {
            num: 44,
            question_en: "What lesson did Gandhiji teach through the Indigo episode?",
            options_en: ["Violence is the solution", "Farmers should be silent", "Courage and self-reliance", "Follow British laws"],
            answer: 3,
            attempted: false,
            selected: null
          },
          {
            num: 45,
            question_en: "What did the landlord demand from Indigo farmers?",
            options_en: ["Full produce", "High taxes", "Share of Indigo crop", "Rent in gold"],
            answer: 3,
            attempted: false,
            selected: null
          },
          {
            num: 46,
            question_en: "Why did Sophie feel close to Geoff?",
            options_en: ["He was rich", "He was quiet and mysterious", "He supported her dreams", "He introduced her to Casey"],
            answer: 2,
            attempted: false,
            selected: null
          },
          {
            num: 47,
            question_en: "What is the theme of 'Going Places'?",
            options_en: ["Fantasy vs Reality", "History of Football", "Village life", "Travel diary"],
            answer: 1,
            attempted: false,
            selected: null
          },
          {
            num: 48,
            question_en: "How did Geoff react to Sophie’s story about Danny Casey?",
            options_en: ["Excited", "Shocked", "Unbelieving but polite", "Angry"],
            answer: 3,
            attempted: false,
            selected: null
          },
          {
            num: 49,
            question_en: "What does Sophie’s character represent?",
            options_en: ["Harsh reality", "Power of education", "Dreams of adolescence", "Politics"],
            answer: 3,
            attempted: false,
            selected: null
          },
          {
            num: 50,
            question_en: "What was common in all three chapters: 'Poets and Pancakes', 'Indigo', and 'Going Places'?",
            options_en: ["Humor", "Imagination", "Struggles and dreams", "Crime"],
            answer: 3,
            attempted: false,
            selected: null
          }
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
