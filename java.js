document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll(".celula");
    const player1Input = document.querySelector(".player-1");
    const player2Input = document.querySelector(".player-2");
    let currentPlayer = "X";
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    cells.forEach(cell => {
        cell.addEventListener("click", handleCellClick);
    });

    function handleCellClick(event) {
        const cell = event.target;
        const cellIndex = Array.from(cells).indexOf(cell);

        if (cell.textContent === "") {
            cell.textContent = currentPlayer;
            if (checkWin()) {
                const winnerName = currentPlayer === "X" ? player1Input.value : player2Input.value;
                alert(`${winnerName} ganhou o jogo, parabéns!`);
                resetBoard();
            } else if (isBoardFull()) {
                alert("Empate!");
                resetBoard();
            } else {
                currentPlayer = currentPlayer === "X" ? "O" : "X";
            }
        }
    }

    function checkWin() {
        return winningConditions.some(condition => {
            return condition.every(index => {
                return cells[index].textContent === currentPlayer;
            });
        });
    }

    function isBoardFull() {
        return Array.from(cells).every(cell => {
            return cell.textContent !== "";
        });
    }

    function resetBoard() {
        cells.forEach(cell => {
            cell.textContent = "";
        });
        currentPlayer = "X";
    }
});




// let nome = window.prompt('Qual o seu nome ?')
// document.write(`<h2> Seja bem vindo <strong> ${nome.toUpperCase()} </strong> ! </h2>`)








// // const el = document.getElementById("paragrafo__inicial")
// // console.log(el);
// // el.innerText = "Seja bem vindo " + nome
// // el.style ""    
