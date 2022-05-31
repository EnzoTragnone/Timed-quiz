function loadData() {
    localStorage.setItem("data", array);
    memoryArray = localStorage.getItem("data");
    if (!memoryArray) {
        return false;
    } else {
        memoryArray = JSON.parse(data);
        array.concat(memoryArray);
    };
}

function endPage() {
    loadData();
    questionEl.innerHTML = pages[1].question;

    textEl.innerHTML = pages[1].text + " " + second + " ."

    submitEl.addEventListener("click", function () {
        var name = document.querySelector('input').value
        if (!name) {
            window.alert("Please insert your initials to continue")
        }
        else {
            userData = {}
            userData.name = name;
            userData.score = second;
            array.push(userData);
            saveData();
            scorePage();
        }
    })
}

const array = [];
const memoryArray = []

function saveData() {
    localStorage.setItem("data", JSON.stringify(array));
    console.log(array)
}

