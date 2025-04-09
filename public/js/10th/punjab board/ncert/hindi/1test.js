
const questions = [
    
        {
            "num": 1,
            "question_en": "What is the meaning of 'Saroj' in 'Shri Guru Charan Saroj Raj'?",
            "question_hi": "‘श्री गुरु चरन सरोज रज’ में ‘सरोज’ शब्द का अर्थ क्या है?",
            "options_en": [
                "Rose",
                "Lotus",
                "Lake",
                "Dust"
            ],
            "options_hi": [
                "गुलाब",
                "कमल",
                "सरोवर",
                "धूल"
            ],
            "answer_en": "Lotus",
            "answer_hi": "कमल",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 2,
            "question_en": "What are the four fruits of singing the pure glory of Lord Rama?",
            "question_hi": "राम जी के निर्मल यश का गान करने से कौन-से चार फल मिलते हैं?",
            "options_en": [
                "Dharma, Artha, Kama, Moksha",
                "Happiness, Wealth, Honor, Fame",
                "Knowledge, Renunciation, Power, Equanimity",
                "Love, Devotion, Faith, Trust"
            ],
            "options_hi": [
                "धर्म, अर्थ, काम, मोक्ष",
                "सुख, समृद्धि, मान, यश",
                "ज्ञान, वैराग्य, शक्ति, समता",
                "प्रेम, भक्ति, श्रद्धा, विश्वास"
            ],
            "answer_en": "Dharma, Artha, Kama, Moksha",
            "answer_hi": "धर्म, अर्थ, काम, मोक्ष",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 3,
            "question_en": "What does the word 'Mukur' mean in 'Nij Man Mukuru Sudhari'?",
            "question_hi": "‘निज मन मुकुरु सुधारि’ में ‘मुकुरु’ शब्द का क्या अर्थ है?",
            "options_en": [
                "Season",
                "To Refuse",
                "Mirror",
                "To Improve"
            ],
            "options_hi": [
                "मौसम",
                "मुकरना",
                "शीशा",
                "सुधरना"
            ],
            "answer_en": "Mirror",
            "answer_hi": "शीशा",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 4,
            "question_en": "How can one cross the ocean of worldly existence according to Tulsidas?",
            "question_hi": "तुलसीदास के अनुसार भवसागर को कैसे पार किया जा सकता है?",
            "options_en": [
                "By chanting the name of Lord Rama",
                "By associating with saints",
                "Through purity of heart",
                "All of the above"
            ],
            "options_hi": [
                "श्रीराम जी का नाम जपकर",
                "संतों की संगति करके",
                "हृदय की पवित्रता से",
                "उपरोक्त सभी"
            ],
            "answer_en": "All of the above",
            "answer_hi": "उपरोक्त सभी",
            "attempted": false,
            "selected": ""
        },
        {
            "num": 5,
            "question_en": "What do saints discriminate like in the context of good and bad?",
            "question_hi": "संत किसकी भाँति नीर-क्षीर विवेक करते हैं?",
            "options_en": [
                "Cuckoo",
                "Swan",
                "Bird",
                "Falcon"
            ],
            "options_hi": [
                "कोयल",
                "हंस",
                "चिड़िया",
                "बाज़"
            ],
            "answer_en": "Swan",
            "answer_hi": "हंस",
            "attempted": false,
            "selected": ""
        }
    
    
          
          
      
      












    // Add more questions here...
];

let currentQuestion = 0;
let language = "en"; // Default English
let timeLeft = 10800; // 5-minute timer
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

    updateNavigation();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
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

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    clearInterval(timerInterval);

    let attempted = 0, notAttempted = 0, score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                score++;
            }
        } else {
            notAttempted++;
        }
        results.push({ question: q.question_en, selected: q.selected || "Not Answered", correct: q.answer_en });
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
    timeLeft = 180 * 60; // Convert 180 minutes to seconds (180 × 60)

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up! Submitting the quiz automatically.");
            submitQuiz();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;

            // Format as HH:MM:SS with leading zeros
            timerElement.textContent = `Time Left: ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            timeLeft--;
        }
    }, 1000);
}
function updateNavigation() {
    const navElement = document.getElementById("circleContainer");
    navElement.innerHTML = "";

    questions.forEach((q, index) => {
        let color = "gray"; // Default not visited
        if (q.attempted) {
            color = "green"; // Answered
        }
        if (q.selected === "") {
            color = "gray"; // Not answered
        }
        if (index === currentQuestion) {
            color = "blue"; // Current question
        }
        navElement.innerHTML += `<div class='circle' style='background-color: ${color};' onclick='loadQuestion(${index})'>${index + 1}</div>`;
    });
}

window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
};