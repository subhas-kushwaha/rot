const questions = [
        {
          num: 1,
          question_en: "Who is the author of the story 'The Last Lesson'?",
          options_en: ["Alphonse Daudet", "Louis Pasteur", "Victor Hugo", "Guy de Maupassant"],
          answer: 1,
          attempted: false,
          selected: null
        },
        {
          num: 2,
          question_en: "What was Franz more afraid of?",
          options_en: ["His parents", "The new teacher", "His classmates", "His teacher M. Hamel"],
          answer: 4,
          attempted: false,
          selected: null
        },
        {
          num: 3,
          question_en: "What is the theme of the poem 'My Mother at Sixty-Six'?",
          options_en: ["Loss of childhood", "Fear of aging and loss", "Love for nature", "Celebration of life"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 4,
          question_en: "What does the phrase 'Young Trees sprinting' signify in the poem 'My Mother at Sixty-Six'?",
          options_en: ["Motionless trees", "Joyful children", "Speed of life", "Static time"],
          answer: 3,
          attempted: false,
          selected: null
        },
        {
          num: 5,
          question_en: "In 'Lost Spring', why does the author say 'Garbage to them is gold'?",
          options_en: ["They sell it to buy gold", "It is their only means of survival", "They find money in it", "They like garbage"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 6,
          question_en: "Who is the narrator of 'The Third Level'?",
          options_en: ["Sam", "Charley", "Louisa", "Dr. Gibbons"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 7,
          question_en: "What does the third level symbolize in 'The Third Level'?",
          options_en: ["Present reality", "Escapism", "Future dreams", "Mental illness"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 8,
          question_en: "Who wrote the poem 'Keeping Quiet'?",
          options_en: ["Pablo Neruda", "Walt Whitman", "Robert Frost", "Sylvia Plath"],
          answer: 1,
          attempted: false,
          selected: null
        },
        {
          num: 9,
          question_en: "What is the central idea of the poem 'Keeping Quiet'?",
          options_en: ["Meditation", "Silence and introspection", "Revolution", "Love"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 10,
          question_en: "What did Douglas fear in 'Deep Water'?",
          options_en: ["Swimming", "Water", "Boats", "Drowning"],
          answer: 4,
          attempted: false,
          selected: null
        },
        {
          num: 11,
          question_en: "What lesson did Douglas learn from his experience?",
          options_en: ["To avoid water", "To learn from mistakes", "To overcome fear with determination", "To stay away from pools"],
          answer: 3,
          attempted: false,
          selected: null
        },
        {
          num: 12,
          question_en: "What does Aunt Jennifer’s tiger symbolize?",
          options_en: ["Strength and freedom", "Love and loyalty", "Fear and dependence", "Wisdom and patience"],
          answer: 1,
          attempted: false,
          selected: null
        },
        {
          num: 13,
          question_en: "Who is the author of 'Indigo'?",
          options_en: ["Louis Fischer", "Katherine Mansfield", "M.K. Gandhi", "Rajendra Prasad"],
          answer: 1,
          attempted: false,
          selected: null
        },
        {
          num: 14,
          question_en: "What is the theme of 'Indigo'?",
          options_en: ["Freedom and justice", "Romance and love", "Adventure and travel", "Supernatural elements"],
          answer: 1,
          attempted: false,
          selected: null
        },
        {
          num: 15,
          question_en: "What is the genre of 'The Interview'?",
          options_en: ["Essay", "Biography", "Autobiography", "Science Fiction"],
          answer: 1,
          attempted: false,
          selected: null
        },
        {
          num: 16,
          question_en: "Who interviewed Umberto Eco in 'The Interview'?",
          options_en: ["Mukund Padmanabhan", "Louis Fischer", "Khushwant Singh", "Charley"],
          answer: 1,
          attempted: false,
          selected: null
        },
        {
          num: 17,
          question_en: "In the poem 'A Thing of Beauty', what does beauty do?",
          options_en: ["Makes us sad", "Provides comfort and joy", "Creates fear", "Distracts us"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 18,
          question_en: "Who is the poet of 'A Thing of Beauty'?",
          options_en: ["John Keats", "Robert Frost", "William Wordsworth", "William Blake"],
          answer: 1,
          attempted: false,
          selected: null
        },
        {
          num: 19,
          question_en: "What was the profession of Sadao in 'The Enemy'?",
          options_en: ["Lawyer", "Doctor", "Soldier", "Teacher"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 20,
          question_en: "Who wrote 'The Enemy'?",
          options_en: ["Pearl S. Buck", "Kamala Das", "Jane Austen", "Louisa May Alcott"],
          answer: 1,
          attempted: false,
          selected: null
        },
        {
          num: 21,
          question_en: "What is the theme of 'On the Face of It'?",
          options_en: ["War and peace", "Self-acceptance and attitude", "Love and betrayal", "Nature and mankind"],
          answer: 2,
          attempted: false,
          selected: null
        },
        {
          num: 22,
          question_en: "Who is the main character in 'On the Face of It'?",
          options_en: ["Derry", "Michael", "John", "Peter"],
          answer: 1,
          attempted: false,
          selected: null
        },
        {
          num: 23,
          question_en: "Who wrote 'Should Wizard Hit Mommy'?",
          options_en: ["John Updike", "Isaac Asimov", "Douglas", "Louis Fischer"],
          answer: 1,
          attempted: false,
          selected: null
        },
        {
          num: 24,
          question_en: "What is the central theme of 'Should Wizard Hit Mommy'?",
          options_en: ["Obedience and morality", "Freedom of choice", "Child psychology", "Parental authority vs. individualism"],
          answer: 4,
          attempted: false,
          selected: null
        },
        {
          num: 25,
          question_en: "What was the profession of the narrator in 'The Third Level'?",
          options_en: ["Stockbroker", "Psychiatrist", "Teacher", "Writer"],
          answer: 1,
          attempted: false,
          selected: null
        },
            {
              num: 26,
              question_en: "What is the significance of 'breaking the silence' in 'Keeping Quiet'?",
              options_en: ["To start a war", "To resume violence", "To reflect and begin anew", "To continue routine"],
              answer: 3,
              attempted: false,
              selected: null
            },
            {
              num: 27,
              question_en: "What does the 'narrow street' symbolize in 'A Roadside Stand'?",
              options_en: ["Poverty and neglect", "Prosperity", "Traffic", "Village fairs"],
              answer: 1,
              attempted: false,
              selected: null
            },
            {
              num: 28,
              question_en: "Who is the poet of 'A Roadside Stand'?",
              options_en: ["Robert Frost", "Stephen Spender", "Pablo Neruda", "Kamala Das"],
              answer: 1,
              attempted: false,
              selected: null
            },
            {
              num: 29,
              question_en: "What is the meaning of 'rancid breath' in 'An Elementary School Classroom in a Slum'?",
              options_en: ["Good hygiene", "Healthy air", "Foul-smelling breath", "Richness"],
              answer: 3,
              attempted: false,
              selected: null
            },
            {
              num: 30,
              question_en: "Who is the poet of 'An Elementary School Classroom in a Slum'?",
              options_en: ["Stephen Spender", "John Keats", "Walt Whitman", "Sylvia Plath"],
              answer: 1,
              attempted: false,
              selected: null
            },
            {
              num: 31,
              question_en: "What is the theme of 'An Elementary School Classroom in a Slum'?",
              options_en: ["Childhood joys", "Village life", "Education inequality and poverty", "Urban lifestyle"],
              answer: 3,
              attempted: false,
              selected: null
            },
            {
              num: 32,
              question_en: "What is the message of 'A Thing of Beauty'?",
              options_en: ["Joy of nature lasts forever", "Beauty fades", "Beauty causes pain", "Joy is temporary"],
              answer: 1,
              attempted: false,
              selected: null
            },
            {
              num: 33,
              question_en: "Who is the central character in 'The Enemy'?",
              options_en: ["Hana", "Tom", "Sadao", "General Takima"],
              answer: 3,
              attempted: false,
              selected: null
            },
            {
              num: 34,
              question_en: "In 'The Enemy', why did Dr. Sadao save the enemy soldier?",
              options_en: ["To get a reward", "To please Hana", "His sense of duty as a doctor", "For personal gain"],
              answer: 3,
              attempted: false,
              selected: null
            },
            {
              num: 35,
              question_en: "What does the poem 'Aunt Jennifer’s Tigers' deal with?",
              options_en: ["Rebellion and freedom", "Bravery of tigers", "Marriage and oppression", "Wildlife conservation"],
              answer: 3,
              attempted: false,
              selected: null
            },
            {
              num: 36,
              question_en: "Why did Mr. Lamb welcome Derry into his garden?",
              options_en: ["He was lonely", "He was kind and believed in acceptance", "He wanted help", "He needed a friend"],
              answer: 2,
              attempted: false,
              selected: null
            },
            {
              num: 37,
              question_en: "What does the poem 'My Mother at Sixty-Six' reflect?",
              options_en: ["Hope and courage", "Fear of loss and aging", "Excitement", "Joy of reunion"],
              answer: 2,
              attempted: false,
              selected: null
            },
            {
              num: 38,
              question_en: "What role did Gandhi play in Champaran?",
              options_en: ["A lawyer for the British", "A peacemaker", "A social reformer", "A political leader advocating for peasants"],
              answer: 4,
              attempted: false,
              selected: null
            },
            {
              num: 39,
              question_en: "In 'The Interview', Umberto Eco attributes his success to:",
              options_en: ["Luck", "Multitasking", "Focus and structured time management", "Reading habits"],
              answer: 3,
              attempted: false,
              selected: null
            },
            {
              num: 40,
              question_en: "What is the moral of the story 'Should Wizard Hit Mommy'?",
              options_en: ["Children should obey parents", "Creativity is essential", "Mothers always know best", "Conflict between authority and individuality"],
              answer: 4,
              attempted: false,
              selected: null
            },
            {
              num: 41,
              question_en: "What does the word 'Reckoning' mean in 'Keeping Quiet'?",
              options_en: ["Accounting", "Reflection", "Collection", "Joy"],
              answer: 2,
              attempted: false,
              selected: null
            },
            {
              num: 42,
              question_en: "What does Charley find at the third level?",
              options_en: ["A futuristic world", "An old-world train station", "A portal to the 1800s", "A newspaper"],
              answer: 2,
              attempted: false,
              selected: null
            },
            {
              num: 43,
              question_en: "What is the mood of the poem 'A Thing of Beauty'?",
              options_en: ["Hopeful and optimistic", "Gloomy and dark", "Critical and serious", "Melancholic"],
              answer: 1,
              attempted: false,
              selected: null
            },
            {
              num: 44,
              question_en: "In 'Lost Spring', who is Saheb?",
              options_en: ["A beggar", "A schoolboy", "A ragpicker boy", "A vendor"],
              answer: 3,
              attempted: false,
              selected: null
            },
            {
              num: 45,
              question_en: "What is the main idea of 'Lost Spring'?",
              options_en: ["Beauty of nature", "Misery of childhood poverty", "Educational success", "Freedom of speech"],
              answer: 2,
              attempted: false,
              selected: null
            },
            {
              num: 46,
              question_en: "What does the poem 'Keeping Quiet' advocate?",
              options_en: ["Action and movement", "War and rebellion", "Silence and stillness", "Celebration and joy"],
              answer: 3,
              attempted: false,
              selected: null
            },
            {
              num: 47,
              question_en: "Why is Aunt Jennifer’s needle 'fluttering'?",
              options_en: ["She is afraid", "She is weak and oppressed", "She is nervous", "She is excited"],
              answer: 2,
              attempted: false,
              selected: null
            },
            {
              num: 48,
              question_en: "How does the poem 'Aunt Jennifer’s Tigers' end?",
              options_en: ["She becomes free", "She dies", "Tigers continue prancing fearlessly", "She escapes"],
              answer: 3,
              attempted: false,
              selected: null
            },
            {
              num: 49,
              question_en: "What do the 'merry children' symbolize in 'My Mother at Sixty-Six'?",
              options_en: ["The cycle of life and contrast to aging", "School kids", "Dreams", "Energy and anger"],
              answer: 1,
              attempted: false,
              selected: null
            },
            {
              num: 50,
              question_en: "What was Derry’s problem in 'On the Face of It'?",
              options_en: ["He was lazy", "He was disabled and had low self-esteem", "He was a thief", "He couldn’t read"],
              answer: 2,
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
