//declaring all variables from HTML to be used in JS
let questionEl = document.querySelector("#question");
let answer1El = document.querySelector("#answer1");
let answer2El = document.querySelector("#answer2");
let answer3El = document.querySelector("#answer3");
let answer4El = document.querySelector("#answer4");
let answerEl = document.querySelector("#answers");
let textEl = document.querySelector("#text");
let scoreListEl = document.querySelector("#score-list");
let feedbackEl = document.querySelector("#feedback");
let timeEl = document.querySelector(".timer");
let minute = 0;
let second = 0;
let cron;
let scorepageEl = document.querySelector("#score-btn");
let submitEl = document.querySelector("#submit");
let homeEl = document.querySelector("#back");
let clearScoreEl = document.querySelector("#clear-score");
let contentEl = document.querySelector(".content");

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
            }
            else {
                feedbackEl.innerHTML = "False";
            }
        });
    }
}

QuestionsBuild(0);





// //if answer is incorrect
// var checkF = function () {
//     feedbackEl.style.display = "block";
//     feedbackEl.innerHTML = "False";
// }

// var check = function () {
//     var checkValue = function () {
//         if (answer1El, answer2El, answer3El, answer4El) {
//             value = false;
//             return value;
//         }
//         else {
//             value = true;
//             return value;
//         }
//     }

//     if (value) {
//         feedbackEl.style.display = "block";
//         feedbackEl.innerHTML = "True";
//         num;
//     }
//     if (!value) {
//         second + 10
//         feedbackEl.style.display = "block";
//         feedbackEl.innerHTML = "False";
//     }
// }

// function PageBuild(num) {
//     questionEl.innerHTML = pagesArray[num].question;

//     textEl.innerHTML = pagesArray[num].text

//     answer1El.innerHTML = pagesArray[num].possibleAnswers[0];
//     answer2El.innerHTML = pagesArray[num].possibleAnswers[1];
//     answer3El.innerHTML = pagesArray[num].possibleAnswers[2];
//     answer4El.innerHTML = pagesArray[num].possibleAnswers[3];

// }



// function pages() {
//     function page1() {
//         PageBuild(0);
//         contentEl.style.textAlign = "center";
//         answer1El.style.margin = "auto";
//         answer1El.style.textAlign = "center";
//         answer1El.style.width = "auto";
//         answer2El.style.display = "none";
//         answer3El.style.display = "none";
//         answer4El.style.display = "none";

//         answer1El = false;

//         answer1El.addEventListener("click", check);

//     };

//     function page2() {
//         PageBuild(1);
//         contentEl.style.textAlign = "";
//         answer1El.style.margin = "";
//         answer1El.style.textAlign = "";
//         answer1El.style.width = "";
//         answer2El.style.display = "";
//         answer3El.style.display = "";
//         answer4El.style.display = "";
//         textEl.style.display = "none"

//         answer3El = false;

//         eventFun(answerEl, check);
//         eventFun(answer2El, check);
//         eventFun(answer3El, check);
//         eventFun(answer4El, check);
//     }

//     page1();

// }

// pages();




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

//     // content changes
//     questionEl.innerHTML = question1.question;
//     textEl.innerHTML = ""
//     answer1El.innerHTML = question1.true;
//     answer2El.innerHTML = question1.false1;
//     answer3El.innerHTML = question1.false2;
//     answer4El.innerHTML = question1.false3;

//     // actions
//     start();
//     answer1El.addEventListener("click", checkT)
//     answer1El.addEventListener("click", questionPage2)
//     answer2El.addEventListener("click", checkF)
//     answer3El.addEventListener("click", checkF)
//     answer4El.addEventListener("click", checkF)
// }

// var questionPage2 = function () {
//     // content changes
//     questionEl.innerHTML = question2.question;
//     answer1El.innerHTML = question2.false2;
//     answer2El.innerHTML = question2.false1;
//     answer3El.innerHTML = question2.true;
//     answer4El.innerHTML = question2.false3;

//     // actions
//     answer1El.addEventListener("click", checkF)
//     answer2El.addEventListener("click", checkF)
//     answer3El.addEventListener("click", checkT)
//     answer3El.addEventListener("click", questionPage3)
//     answer4El.addEventListener("click", checkF)
// }

// var questionPage3 = function () {
//     // content changes
//     questionEl.innerHTML = question3.question;
//     answer1El.innerHTML = question3.false2;
//     answer2El.innerHTML = question3.true;
//     answer3El.innerHTML = question3.false1;
//     answer4El.innerHTML = question3.false3;

//     // actions
//     answer1El.addEventListener("click", checkF)
//     answer2El.addEventListener("click", checkF)
//     answer2El.addEventListener("click", checkT)
//     answer2El.addEventListener("click", questionPage4)
//     answer4El.addEventListener("click", checkF)
// }

// var questionPage4 = function () {
//     // content changes
//     questionEl.innerHTML = question4.question;
//     answer1El.innerHTML = question4.false2;
//     answer2El.innerHTML = question4.false3;
//     answer3El.innerHTML = question4.false1;
//     answer4El.innerHTML = question4.true;

//     // actions
//     answer1El.addEventListener("click", checkF)
//     answer2El.addEventListener("click", checkF)
//     answer2El.addEventListener("click", checkF)
//     answer4El.addEventListener("click", questionPage5)
//     answer4El.addEventListener("click", checkT)
// }

// var questionPage5 = function () {
//     // content changes
//     questionEl.innerHTML = question5.question;
//     answer1El.innerHTML = question5.false2;
//     answer2El.innerHTML = question5.false3;
//     answer3El.innerHTML = question5.false1;
//     answer4El.innerHTML = question5.true;

//     // actions
//     answer1El.addEventListener("click", checkF)
//     answer2El.addEventListener("click", checkF)
//     answer2El.addEventListener("click", checkF)
//     answer4El.addEventListener("click", endPage)
//     answer4El.addEventListener("click", checkT)
// }

// startPage();