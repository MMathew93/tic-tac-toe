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
        const numX = gameBoard.square.filter(x => x === 'X').length;
        const numO = gameBoard.square.filter(x => x === 'O').length;
        if (numX > numO) {
            return 'p2'
        }
        if (numX === numO) {
            return 'p1'
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
                        alert('Player 1 Wins')
                        break;
                    }
                }
                if (gameBoard.square[winCombos[i][j]] == "O") {
                    matchedO += 1
                    console.log(matchedO)
                    if (matchedO == 3) {
                        alert('Player 2 Wins')
                        break;
                    }
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