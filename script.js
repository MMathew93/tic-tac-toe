//##########################gameBoard obj (module)############################################//
const gameBoard = (() => {
    /*store the gameboard as an array inside of a Gameboard object*/
    const square = ['', '', '', '', '', '', '', '', ''];
    return {
        square
    };
})();
//#########################displayController (module)###########################################//
const displayController = (() => {
    //determines if the spot marked should be an X or an O based on who's turn it is
    const markGrid = () => {
        const boxes = document.querySelectorAll('.box');
        playerTurnText = document.getElementById('playerTurnText');
        playerTurnText.textContent = 'Player 1 Turn';
        const markPlayer = player();
        document.addEventListener('click', function printToGrid(event) {
            if (event.target.matches('.box')) {
                for (let i = 0; i < boxes.length; i++) {
                    if (event.target.matches(`.box${i}`)) {
                        if (event.target.textContent === '') {
                            let newMark;
                            if (markPlayer.playerTurn() === 'p1') {
                                newMark = 'X';
                                playerTurnText.textContent = 'Player 2 Turn'
                            }
                            if (markPlayer.playerTurn() === 'p2') {
                                newMark = 'O';
                                playerTurnText.textContent = 'Player 1 Turn'
                            }
                            //still need a winner call back here
                            gameBoard.square.splice(i, 1, newMark);
                            render();
                        }
                        markPlayer.winning();
                    }
                }
            }
        }, false);
        reset();
    }
    //reset button
    function reset() {
        const reset = document.getElementById('reset')
        reset.addEventListener('click', function resetBoard() {
            gameBoard.square = ['', '', '', '', '', '', '', '', ''];
            playerTurnText.textContent = 'Player 1 Turn';
            render()
        }, false);
    }
    //prints X's and O's onto the screen by render function
    function render() {
        const boxes = document.querySelectorAll('.box');
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].textContent = gameBoard.square[i]
        }
    };


    return {
        markGrid,
        reset
    };
})();
//###############################players-2 (Factory)##########################################//
const player = () => {
    const playerTurn = () => {
        const numX = numberOf().X
        const numO = numberOf().O
        if (numX > numO) {
            return 'p2'
        }
        if (numX === numO) {
            return 'p1'
        }
    }

    function numberOf() {
        let numX = 0
        let numO = 0
        for (let i = 0; i < gameBoard.square.length; i++) {
            if (gameBoard.square[i] === 'X') {
                numX += 1
            }
            if (gameBoard.square[i] === 'O') {
                numO += 1
            }
        }
        return {
            X: numX,
            O: numO
        }
    }
    //winning combinations
    const winning = () => {
        const winCombos = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        //need to check the board and count X and O locations
        for (let i = 0; i < winCombos.length; i++) {
            let matchedX = 0
            let matchedO = 0
            for (let j = 0; j < winCombos[i].length; j++) {
                if (gameBoard.square[winCombos[i][j]] == "X") {
                    matchedX += 1
                    if (matchedX == 3) {
                        playerTurnText.textContent = 'Player 1 is the winner!'
                        break;
                    }
                }
                if (gameBoard.square[winCombos[i][j]] == "O") {
                    matchedO += 1
                    if (matchedO == 3) {
                        playerTurnText.textContent = 'Player 2 is the winner!'
                        break;
                    }
                }
                if (numberOf().X === 5 && numberOf().O === 4) {
                    playerTurnText.textContent = 'It\'s a tie!'
                    break;
                }
            }
        }
        //player win totals

    }
    return {
        playerTurn,
        winning
    };
};

displayController.markGrid()