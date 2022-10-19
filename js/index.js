const cells = document.querySelectorAll(".game__cell");
const playerTurn = document.querySelector(".game__turn-el");
const resetBtn = document.querySelector(".game__reset-btn");
const announce = document.querySelector('.game__announce');

let playerSwitch = "X";
let isGameActive = true;
const list = ['', '', '', '', '', '', '', '', ''];
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

for (let i = 0; i < cells.length; i++) {
    const cell = cells[i];
    cell.addEventListener("click", () => {
        if(cell.innerText === "" && isGameActive){
            cell.innerText = playerSwitch;
            cell.classList.add(`player${playerSwitch}`);
            playerTurn.classList.remove(`player${playerSwitch}`);
            list[i] = playerSwitch;
            checkCondition();
            playerSwitch = playerSwitch === "X" ? "O" : "X";
            playerTurn.classList.add(`player${playerSwitch}`);
            playerTurn.innerText = playerSwitch;

            
        }
    })
}

function checkCondition() {
    for (let j = 0; j < 8; j++) {
        const condition = winningConditions[j];
        const num1 = list[condition[0]]
        const num2 = list[condition[1]]
        const num3 = list[condition[2]]

        if (num1 === '' || num2 === '' || num3 ==='') {
            continue
        }
        if(num1 === num2 && num2 === num3){
            isGameActive = false
            announce.innerHTML = `Player <span class="player${playerSwitch}">${playerSwitch}</span> won!`;
        }
    }    
}

resetBtn.onclick = () => window.location.reload();