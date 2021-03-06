//HTML class and ids as elements that will be used (In order of HTML and use)
let scoreBtnEl = document.querySelector("#score-btn");
let contentEl = document.querySelector(".content");
let textEl = document.querySelector("#text");
let questionEl = document.querySelector("#question");
let answerEl = document.querySelector("#answers");
let feedbackEl = document.querySelector("#feedback");
let submitEl = document.querySelector("#submit");
let scoreListEl = document.querySelector(".score-list");
let backEl = document.querySelector("#back");
let clearScoreEl = document.querySelector("#clear-score");
let finishEl = document.querySelector("#finish-page");
let text2 = document.querySelector("#text2");
let scorePageEl = document.querySelector("#score-page");


// Timer
let timeEl = document.querySelector(".timer");
let second = 100;
let cron;
function startTimer() {
    pause();
    cron = setInterval(() => { timer(); }, 1000);
}

function pause() {
    clearInterval(cron);
}

function reset() {
    second = 100;
    document.getElementById('second').innerText = '100';
}


function timer() {
    if ((second -= 1) == 0 || second < 0) {
        second = 0;
        window.alert("You ran out of time! Try again")
        resetState();
        styleReset();
        endPage();
    }
    document.getElementById('second').innerText = returnData(second);
}

function penalty() {
    second = second - 10;
    document.getElementById('second').innerText = returnData(second);
}

function returnData(input) {
    return input > 10 ? input : `0${input}`
}
// End of timer



// declaring all the different pages and questions as objects inside arrays
const pages = [
    intro = {
        question: "Coding Quiz Challenge",
        text: "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds",
        answer: "Begin test!"
    },

    end = {
        question: "All done!",
        text: "Your final score is",
        text2: "Enter initials:"
    },

    scorePageInfo = {
        question: "High scores",
    }
]
const questions = [
    {
        question: "Commonly used data type DO Not Include;",
        answers: [
            { text: "alerts", correct: false },
            { text: "string", correct: false },
            { text: "booleans", correct: true },
            { text: "numbers", correct: false },
        ]
    },

    {
        question: "The considiton in an if / else statement is enclosed with ________.",
        answers: [
            { text: "parenthesis", correct: true },
            { text: "quotes", correct: false },
            { text: "curly brackets", correct: false },
            { text: "square brackets", correct: false },
        ]
    },

    {
        question: "Arrays in JavaScript can be used to store ________.",
        answers: [
            { text: "other arrays", correct: false },
            { text: "numbers and strings", correct: false },
            { text: "booleans", correct: false },
            { text: "all of the above", correct: true },
        ]
    },

    {
        question: "String values must be enclosed within ________ when being assigned to variables.",
        answers: [
            { text: "parenthesis", correct: false },
            { text: "commas", correct: false },
            { text: "curly brackets", correct: false },
            { text: "quotes", correct: true },
        ]
    },

    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            { text: "console.log", correct: true },
            { text: "terminal/bash", correct: false },
            { text: "JavaScript", correct: false },
            { text: "for loops", correct: false },
        ]
    },
]

// view score btn
scoreBtnEl.addEventListener("click", function () {
    loadData();
    resetState();
    styleReset();
    finishEl.style.display = "none"
    text2.style.display = "none"
    text.style.display = "none"
    scorePageEl.style.display = "block"
    scorePage();
})


// start page with trigger for counter
function startPage() {
    // declaration of the innerHTMl and creation of button
    questionEl.innerHTML = pages[0].question;

    textEl.innerHTML = pages[0].text
    textEl.style.display = "block"

    var startBtn = document.createElement("button");
    startBtn.className = "main-btn btn";
    startBtn.id = "startBtn"
    startBtn.innerHTML = pages[0].answer;
    answerEl.appendChild(startBtn);

    // styling for startPage
    contentEl.style.textAlign = "center"
    startBtn.style.textAlign = "center"
    startBtn.style.width = "auto"
    startBtn.style.margin = "auto"

    //call for timer and questions to start
    startBtn.addEventListener("click", styleReset);
    startBtn.addEventListener("click", startTimer);
    startBtn.addEventListener("click", nextQuestion);
}

// calls for reset state and calls question
function nextQuestion() {
    resetState();
    counter();
}

// resets page styling and deletes buttons
function resetState() {
    while (answerEl.firstChild) {
        answerEl.removeChild
            (answerEl.firstChild)
    }
}
function styleReset() {
    try {
        contentEl.style.textAlign = ""
        startBtn.style.textAlign = ""
        startBtn.style.width = ""
        startBtn.style.margin = ""
        textEl.style.display = "none"
    } catch (err) {
        contentEl.style.textAlign = ""
        button = display = "none"
        feedbackEl.style.display = "none"
    }

}

var count = 0;
// loop for the questions and call for the endPage
function counter() {
    QuestionsBuild(count);

    function QuestionsBuild(value) {
        questionEl.innerHTML = questions[value].question;

        questions[value].answers.forEach(answer => {
            const button = document.createElement("button")
            button.innerText = answer.text
            button.className = "main-btn btn"
            if (answer.correct) {
                button.dataset.correct = answer.correct
                button.addEventListener("click", checkTrue)
            } else {
                button.addEventListener("click", checkFalse)
            }
            answerEl.appendChild(button)
        })
    }

    function checkTrue() {
        feedbackEl.style.display = "block"
        feedbackEl.innerHTML = "True"
        if (count < 4) {
            count++
            nextQuestion();
        } else {
            resetState();
            styleReset();
            endPage();
        }
    }

    function checkFalse() {
        feedbackEl.style.display = "block"
        feedbackEl.innerHTML = "False"
        penalty();
    }

}

//loads data from localmemory into array
function loadData() {
    if ("data" in localStorage) {
        array = localStorage.getItem('data');
        array = JSON.parse(array);
    }
    else {
        array = []
    }
}

//end page with timer pause and savedata call
function endPage() {
    pause();
    finishEl.style.display = "flex"
    textEl.style.display = "block"

    questionEl.innerHTML = pages[1].question;


    textEl.innerHTML = pages[1].text + " " + second + " ."

    textEl.style.textAlign = "left"


    submitEl.addEventListener("click", function () {
        var name = document.querySelector('input').value
        if (!name) {
            window.alert("Please insert your initials to continue")
        }
        else {
            loadData();
            userData = {}
            userData.name = name;
            userData.score = second;
            array.push(userData);
            saveData();
        }
    })
}

//saves array into local memory
function saveData() {
    localStorage.setItem("data", JSON.stringify(array));
    console.log(array);
    scorePage();
}

// clears all of the local memory
function clearData() {
    localStorage.clear();
}

// highscore page
function scorePage() {
    questionEl.innerHTML = pages[2].question;
    pause();

    scoreBtnEl.style.display = "none"
    // calls data from local memory
    array = localStorage.getItem('data');
    array = JSON.parse(array);

    // sorts the array from highest to lowest score
    function compare(a, b) {
        const scoreA = a.score;
        const scoreB = b.score;

        let comparison = 0;
        if (scoreA < scoreB) {
            comparison = 1;
        }
        else if (scoreA > scoreB) {
            comparison = -1;
        }
        return comparison;
    }

    try {
        array.sort(compare);

        // creates the score elements
        for (let i = 0; i < array.length; i++) {
            let li = document.createElement("li");
            li.innerText = (i + 1) + "." + array[i].name + "-    " + array[i].score;
            scoreListEl.appendChild(li);
        }

    } catch {
        window.alert("There are no scores!")
    }

    // styling
    finishEl.style.display = "none"
    text2.style.display = "none"
    scorePageEl.style.display = "block"

    // end of the quiz, decides wether to restart or to clear data and restart
    clearScoreEl.addEventListener("click", function () {
        clearData();
        restart();
    });

    backEl.addEventListener("click", function () {
        restart();
    });
}

// due to styling and bubble effect, it was easier to just refresh the page, since if user choses scores wont be lost
function restart() {
    location.reload(true)
}

// trigger for the operation of the website
startPage();