
let score = 0;
let winsLoses = [0, 0, 0];
const choices = ["rock", "scissors", "paper"];
const winMatrix =
    [
        [0, 1, -1],
        [-1, 0, 1],
        [1, -1, 0],
    ]
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function play(buttonId) {
    const computerChoice = getRandomInt(choices.length);
    const playerChoice = choices.indexOf(buttonId);
    const whoWon = winMatrix[playerChoice][computerChoice];
    score = score + whoWon;
    const index = whoWon + 1;
    winsLoses[index]++;
    console.log(choices[playerChoice], " vs ", choices[computerChoice], " ->", whoWon);
    const opponents = document.querySelectorAll(".opponent");
    for (let opponent of opponents)
        opponent.classList.remove("active");
    const element = document.getElementById("op-" + choices[computerChoice]);
    element.classList.add("active");

    const results = document.getElementById("results").children;
    for (let result of results)
        result.classList.remove("active");
    results[index].classList.add("active");

    setValue("points", score);
    setValue("wins", winsLoses[2]);
    setValue("draws", winsLoses[1]);
    setValue("loses", winsLoses[0]);

}
function setValue(id, value) {
    const element = document.getElementById(id);
    element.textContent = value;
}

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".button");
    function onClick(event) {
        for (let button of buttons)
            button.classList.remove("active");
        const button = event.currentTarget;
        button.classList.add("active");
        play(button.id);
    }
    for (let button of buttons)
        button.addEventListener("click", onClick);
});
