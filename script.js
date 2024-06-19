let turn = "X";
let clickaudio= new Audio("music.mp3")
let gameOver = false;

// Function to change turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

// Function to check for a win
const checkWin = () => {
    let boxtext = document.getElementsByClassName("boxtext");
    let winCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    winCombinations.forEach(e => {
        if (boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
            boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
            boxtext[e[0]].innerText !== "") {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            gameOver = true; 
            // document.querySelector('.imgbox img').style.width = "200 px"; ->> wrong way
            document.querySelector('.imgbox img').style.width = "200px";
            
        }
    });
}

// Adding event listeners to each box
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && !gameOver) {
            boxtext.innerText = turn;
            clickaudio.play();
            checkWin(); 
            if (!gameOver) { 
                turn = changeTurn();
                document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
            }
        }
    });
});


