const questions = [
        {
          num: 1,
          question_en: "Who is the poet of 'My Mother at Sixty-six'?",
          options_en: ["Kamala Das", "Pablo Neruda", "John Keats", "Robert Frost"],
          answer: 1,
          attempted: false,
          selected: null
        },
        {
          num: 2,
          question_en: "What is the central theme of 'My Mother at Sixty-six'?",
          options_en: ["Nature's beauty", "Fear of losing a loved one", "Love for nature", "Childhood memories"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 3,
          question_en: "What did the mother look like in the car?",
          options_en: ["Young and cheerful", "Pale, like a corpse", "Angry", "Energetic"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 4,
          question_en: "What did the poet notice outside the car?",
          options_en: ["Dark clouds", "A busy market", "Young trees and children playing", "A funeral"],
          answer: 3,
          attempted: false,
          selected: null
        },
        {
          num: 5,
          question_en: "What does the poet use as a contrast to her mother's aging face?",
          options_en: ["A rainbow", "Children and trees", "The sea", "Mountains"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 6,
          question_en: "What emotion does the poet hide at the end of the poem?",
          options_en: ["Joy", "Anger", "Sorrow", "Fear"],
          answer: 4,
          attempted: false,
          selected: null
        },
        {
          num: 7,
          question_en: "Why does the poet smile at the end of 'My Mother at Sixty-six'?",
          options_en: ["To show confidence", "To hide her pain", "To impress others", "To say goodbye happily"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 8,
          question_en: "What is the poet's fear in 'My Mother at Sixty-six'?",
          options_en: ["She might get sick", "Losing her mother", "Being alone", "Getting late"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 9,
          question_en: "What is the tone of the poem?",
          options_en: ["Cheerful", "Humorous", "Reflective and emotional", "Angry"],
          answer: 3,
          attempted: false,
          selected: null
        },
        {
          num: 10,
          question_en: "What literary device is used in '…like a late winter's moon'?",
          options_en: ["Simile", "Metaphor", "Alliteration", "Irony"],
          answer: 1,
          attempted: false,
          selected: null
        },
        {
          num: 11,
          question_en: "Who is the poet of 'Keeping Quiet'?",
          options_en: ["Robert Frost", "Pablo Neruda", "John Donne", "Kamala Das"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 12,
          question_en: "What does the poet urge us to do in 'Keeping Quiet'?",
          options_en: ["Stop working forever", "Remain silent and still", "Fight against enemies", "Enjoy nature"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 13,
          question_en: "How long does the poet suggest we keep quiet?",
          options_en: ["1 minute", "5 minutes", "10 seconds", "An entire day"],
          answer: 3,
          attempted: false,
          selected: null
        },
        {
          num: 14,
          question_en: "What is the poet’s aim in suggesting stillness?",
          options_en: ["To enjoy the weather", "To reflect and create unity", "To improve health", "To take rest"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 15,
          question_en: "What does the poet mean by 'count to twelve'?",
          options_en: ["It’s a countdown", "A signal to keep time", "To pause for reflection", "To do yoga"],
          answer: 3,
          attempted: false,
          selected: null
        },
        {
          num: 16,
          question_en: "What will fishermen do in the poet's vision?",
          options_en: ["Fish in the sea", "Kill whales", "Not harm nature", "Start farming"],
          answer: 3,
          attempted: false,
          selected: null
        },
        {
          num: 17,
          question_en: "Which kind of people does the poet want to stop and reflect?",
          options_en: ["Soldiers", "Teachers", "Dancers", "Doctors"],
          answer: 1,
          attempted: false,
          selected: null
        },
        {
          num: 18,
          question_en: "What is the poet not advocating in 'Keeping Quiet'?",
          options_en: ["Inactivity", "Total silence", "Introspection", "Death"],
          answer: 4,
          attempted: false,
          selected: null
        },
        {
          num: 19,
          question_en: "What is the overall message of the poem?",
          options_en: ["War is necessary", "Unity through stillness", "We must always speak", "We should keep fighting"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 20,
          question_en: "What does the poet compare stillness to?",
          options_en: ["Laziness", "Death", "A new beginning", "Sleep"],
          answer: 3,
          attempted: false,
          selected: null
        },
        {
          num: 21,
          question_en: "What kind of language does the poet use in 'Keeping Quiet'?",
          options_en: ["Complex", "Abstract", "Simple and clear", "Rhyming"],
          answer: 3,
          attempted: false,
          selected: null
        },
        {
          num: 22,
          question_en: "Why does the poet mention nature in the poem?",
          options_en: ["To criticize it", "To appreciate silence", "To say it’s useless", "To show human strength"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 23,
          question_en: "What does the poet expect from people during the silence?",
          options_en: ["Sleep", "Speak to others", "Meditate and reflect", "Travel"],
          answer: 3,
          attempted: false,
          selected: null
        },
        {
          num: 24,
          question_en: "What tone does the poem 'Keeping Quiet' reflect?",
          options_en: ["Violent", "Peaceful and thoughtful", "Angry", "Playful"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 25,
          question_en: "What does the poem teach about life?",
          options_en: ["It should be full of activity", "War brings peace", "Stillness and introspection are essential", "We must always compete"],
          answer: 3,
          attempted: false,
          selected: null
        },
            {
              num: 26,
              question: "What does the rattrap seller in 'The Rattrap' consider the world to be?",
              options: [
                "A beautiful place",
                "A rat's paradise",
                "A big rattrap",
                "A prison"
              ],
              answer: "A big rattrap",
              attempted: false,
              selected: ""
            },
            {
              num: 27,
              question: "In 'Deep Water', what did the author fear?",
              options: [
                "Fear of the dark",
                "Fear of drowning",
                "Fear of heights",
                "Fear of people"
              ],
              answer: "Fear of drowning",
              attempted: false,
              selected: ""
            },
            {
              num: 28,
              question: "Who is the author of 'Indigo'?",
              options: [
                "William Douglas",
                "Louis Fischer",
                "Pearl S. Buck",
                "John Updike"
              ],
              answer: "Louis Fischer",
              attempted: false,
              selected: ""
            },
            {
              num: 29,
              question: "What did the Champaran episode signify in 'Indigo'?",
              options: [
                "The start of British rule",
                "A turning point in Gandhi's life",
                "End of British rule",
                "Beginning of World War"
              ],
              answer: "A turning point in Gandhi's life",
              attempted: false,
              selected: ""
            },
            {
              num: 30,
              question: "What was Franz expected to be prepared with in 'The Last Lesson'?",
              options: [
                "Participles",
                "Poetry",
                "Writing an essay",
                "Reading a chapter"
              ],
              answer: "Participles",
              attempted: false,
              selected: ""
            },
            {
              num: 31,
              question: "What does the title 'Going Places' suggest?",
              options: [
                "Travel story",
                "Fantasy vs Reality",
                "Adventure",
                "Daily routine"
              ],
              answer: "Fantasy vs Reality",
              attempted: false,
              selected: ""
            },
            {
              num: 32,
              question: "Why did the people at Gemini Studios not appreciate the English poet's speech?",
              options: [
                "He spoke too fast",
                "They couldn’t understand English",
                "They didn't like poetry",
                "He talked about politics"
              ],
              answer: "They couldn’t understand English",
              attempted: false,
              selected: ""
            },
            {
              num: 33,
              question: "Who was Saheb in 'Lost Spring'?",
              options: [
                "A schoolboy",
                "A ragpicker",
                "A servant",
                "A refugee"
              ],
              answer: "A ragpicker",
              attempted: false,
              selected: ""
            },
            {
              num: 34,
              question: "What lesson does Douglas convey in 'Deep Water'?",
              options: [
                "Water is dangerous",
                "Face your fears to overcome them",
                "Avoid swimming",
                "Don’t trust anyone"
              ],
              answer: "Face your fears to overcome them",
              attempted: false,
              selected: ""
            },
            {
              num: 35,
              question: "What did M. Hamel call the French language?",
              options: [
                "Hard to learn",
                "The clearest and most beautiful",
                "A dead language",
                "A foreign language"
              ],
              answer: "The clearest and most beautiful",
              attempted: false,
              selected: ""
            },
            {
              num: 36,
              question: "Why did Gandhi go to Champaran?",
              options: [
                "To meet peasants",
                "To attend a function",
                "To fight for indigo farmers",
                "To visit family"
              ],
              answer: "To fight for indigo farmers",
              attempted: false,
              selected: ""
            },
            {
              num: 37,
              question: "In 'The Rattrap', who gave shelter to the peddler at Ramsjo Ironworks?",
              options: [
                "Edla Willmansson",
                "The ironmaster",
                "A farmer",
                "The sheriff"
              ],
              answer: "The ironmaster",
              attempted: false,
              selected: ""
            },
            {
              num: 38,
              question: "What does 'Lost Spring' symbolize?",
              options: [
                "Lost youth and childhood",
                "Seasons",
                "Migration",
                "Poverty"
              ],
              answer: "Lost youth and childhood",
              attempted: false,
              selected: ""
            },
            {
              num: 39,
              question: "What was Sophie’s dream in 'Going Places'?",
              options: [
                "To be an actress",
                "To be a manager",
                "To open a boutique",
                "To become a pilot"
              ],
              answer: "To open a boutique",
              attempted: false,
              selected: ""
            },
            {
              num: 40,
              question: "What does the story 'The Last Lesson' emphasize?",
              options: [
                "Patriotism and love for one’s language",
                "History of France",
                "Military power",
                "Children’s education"
              ],
              answer: "Patriotism and love for one’s language",
              attempted: false,
              selected: ""
            },
            {
              num: 41,
              question: "What was the profession of Subbu in 'Poets and Pancakes'?",
              options: [
                "Poet",
                "Actor",
                "Writer and Assistant Director",
                "Director"
              ],
              answer: "Writer and Assistant Director",
              attempted: false,
              selected: ""
            },
            {
              num: 42,
              question: "What does the ‘rattrap’ symbolize?",
              options: [
                "Wealth",
                "Human greed and entrapment",
                "Society",
                "Hope"
              ],
              answer: "Human greed and entrapment",
              attempted: false,
              selected: ""
            },
            {
              num: 43,
              question: "How did the ironmaster mistake the peddler?",
              options: [
                "As a thief",
                "As his old friend",
                "As a philosopher",
                "As a scientist"
              ],
              answer: "As his old friend",
              attempted: false,
              selected: ""
            },
            {
              num: 44,
              question: "Who was Mukesh in 'Lost Spring'?",
              options: [
                "A bangle maker",
                "A ragpicker",
                "A teacher",
                "A driver"
              ],
              answer: "A bangle maker",
              attempted: false,
              selected: ""
            },
            {
              num: 45,
              question: "In 'Indigo', where was the British landlord from?",
              options: [
                "Bihar",
                "Champaran",
                "Bengal",
                "England"
              ],
              answer: "England",
              attempted: false,
              selected: ""
            },
            {
              num: 46,
              question: "Why did the peddler decline the ironmaster's invitation initially?",
              options: [
                "He was shy",
                "He feared being exposed",
                "He was tired",
                "He wanted food first"
              ],
              answer: "He feared being exposed",
              attempted: false,
              selected: ""
            },
            {
              num: 47,
              question: "Who is the author of 'Poets and Pancakes'?",
              options: [
                "Asokamitran",
                "Louis Fischer",
                "William Douglas",
                "John Rowntree"
              ],
              answer: "Asokamitran",
              attempted: false,
              selected: ""
            },
            {
              num: 48,
              question: "What was the fear of Sophie’s father?",
              options: [
                "Sophie might fail exams",
                "Sophie tells lies",
                "Sophie meets Danny Casey",
                "Sophie wants to be a writer"
              ],
              answer: "Sophie meets Danny Casey",
              attempted: false,
              selected: ""
            },
            {
              num: 49,
              question: "What was the reaction of Edla when she learned the peddler was not a captain?",
              options: [
                "She got angry",
                "She was frightened",
                "She showed sympathy",
                "She asked him to leave"
              ],
              answer: "She showed sympathy",
              attempted: false,
              selected: ""
            },
            {
              num: 50,
              question: "In 'Deep Water', what helped Douglas finally overcome his fear?",
              options: [
                "A coach",
                "A friend",
                "A professional swimmer",
                "Determination and training"
              ],
              answer: "Determination and training",
              attempted: false,
              selected: ""
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
