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

function play(buttonId){
    const computerChoice = getRandomInt(choices.length);
    const playerChoice = choices.indexOf(buttonId);
    const whoWon = winMatrix[playerChoice][computerChoice];
    console.log(choices[playerChoice], " vs ", choices[computerChoice], " ->", whoWon);
    const opponents = document.querySelectorAll(".opponent");
    for (let opponent of opponents)
        opponent.classList.remove("active");
    const element = document.getElementById("op-"+choices[computerChoice]);
    element.classList.add("active");

}
document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".button");
    function onClick(event)
    {
        for (let button of buttons)
            button.classList.remove("active");
        const button = event.currentTarget;
        button.classList.add("active");
        play(button.id);
    }
    for (let button of buttons)
        button.addEventListener("click", onClick);
});