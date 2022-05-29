//HTML class and ids as elements that will be used (In order of HTML and use)
let scoreBtnEl = document.querySelector("#score-btn");
let contentEl = document.querySelector(".content");
let textEl = document.querySelector("#text");
let questionEl = document.querySelector("#question");
let answerEl = document.querySelector("#answers");
let feedbackEl = document.querySelector("#feedback");
let submitEl = document.querySelector("#submit");
let scoreListEl = document.querySelector("#score-list");
let backEl = document.querySelector("#back");
let clearScoreEl = document.querySelector("#clear-score");

// Timer
let timeEl = document.querySelector(".timer");
let minute = 0;
let second = 0;
let cron;
function start() {
    pause();
    cron = setInterval(() => { timer(); }, 1000);
}

function pause() {
    clearInterval(cron);
}

function reset() {
    minute = 0;
    second = 0;
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
}

function timer() {
    if ((second += 1) == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        window.alert("You ran out of time!")
    }

    document.getElementById('minute').innerText = returnData(minute);
    document.getElementById('second').innerText = returnData(second);
}

function returnData(input) {
    return input > 10 ? input : `0${input}`
}
// End of timer

// declaring all the different pages and questions as objects

pages = [
    intro = {
        question: "Coding Quiz Challenge",
        text: "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds",
        possibleAnswers: ["Begin test!"]
    },

    end = {
        question: "All done!",
        text: "Your final score is 22.",
        text2: "Enter initials:"
    },

    scorePageInfo = {
        question: "High scores",
        place1: "",
        place2: "",
        place3: "",
        place4: "",
        place5: "",
    }
]

questions = [

    quesOne = {
        question: "Commonly used data type DO Not Include;",
        possibleAnswers: ["alerts", "string", "booleans", "numbers"]
    },

    quesTwo = {
        question: "The considiton in an if / else statement is enclosed with ________.",
        possibleAnswers: ["parenthesis", "quotes", "curly brackets", "square brackets"]
    },

    quesThree = {
        question: "Arrays in JavaScript can be used to store ________.",
        possibleAnswers: ["other arrays", "numbers and strings", "booleans", "all of the above"]
    },

    quesFour = {
        question: "String values must be enclosed within ________ when being assigned to variables.",
        possibleAnswers: ["parenthesis", "commas", "curly brackets", "quotes"]
    },

    quesFive = {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        possibleAnswers: ["console.log", "terminal/bash", "JavaScript", "for loops"]
    },
]


function wrap() {

    start();

    let count = 0;
    i = 0;
    console.log(count);
    QuestionsBuild(count);

    function QuestionsBuild(value) {
        questionEl.innerHTML = questions[value].question;
        for (i = 0; i < 4; i++) {
            var buttonMain = document.createElement("button");
            buttonMain.className = "main-btn btn";
            buttonMain.id = i;
            buttonMain.innerHTML = questions[value].possibleAnswers[i];
            answerEl.appendChild(buttonMain);
            var check = document.getElementById(i)
            check.addEventListener("click", function (event) {
                feedbackEl.style.display = "block";
                if (event.target.innerText == ("booleans" || "parenthesis" || "all of the above" || "quotes" || "console.log")) {
                    feedbackEl.innerHTML = "True";
                    count++;
                    i = 0;
                    QuestionsBuild(count);
                }
                else {
                    feedbackEl.innerHTML = "False";
                }
            });
        }
    }
}

wrap();

// let styling = {
//     style: contentEl.style.textAlign = "center";
//     style: answer1El.style.margin = "auto";
//     style: answer1El.style.textAlign = "center";
//     style: answer1El.style.width = "auto";
//     style: answer2El.style.display = "none";
//     style: answer3El.style.display = "none";
//     style: answer4El.style.display = "none";
// }

// var startPage = function () {
//     //style changes
//     answer2El.style.display = "none"
//     answer3El.style.display = "none"
//     answer4El.style.display = "none"
//     contentEl.style.textAlign = "center"
//     answer1El.style.display = "block"
//     answer1El.style.margin = "auto"
//     answer1El.style.textAlign = "center"
//     answer1El.style.width = "auto"

//     // content changes
//     questionEl.innerHTML = intro.question;
//     textEl.innerHTML = intro.text;
//     answer1El.innerHTML = "Start Quiz";

//     // actions
//     answer1El.addEventListener("click", questionPage1)
// }

// var questionPage1 = function () {
//     // style changes
//     contentEl.style.textAlign = ""
//     answer1El.style.display = ""
//     answer1El.style.margin = ""
//     answer1El.style.textAlign = ""
//     answer1El.style.width = ""
//     answer2El.style.display = ""
//     answer3El.style.display = ""
//     answer4El.style.display = ""

//     // actions
//     start();
//     answer1El.addEventListener("click", checkT)
//     answer1El.addEventListener("click", questionPage2)
//     answer2El.addEventListener("click", checkF)
//     answer3El.addEventListener("click", checkF)
//     answer4El.addEventListener("click", checkF)
// }
