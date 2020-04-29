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
                        if (event.target.textContent === '') {                      //still need to check if a winner results here prior to marking
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
                    }
                }
            }

        }, false);
    }





    //reset button
    function reset() {
        return gameBoard.square.textContent = ['', '', '', '', '', '', '', '', '']
    }

    //prints X's and O's onto the screen by render function
    function render() {
        const boxes = document.querySelectorAll('.box');
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].textContent = gameBoard.square[i]
        }
    };


    return {
        markGrid, reset
    };
})();


//###############################players-2 (Factory)##########################################//
const player = () => {
    const playerTurn = () => {
        const numX = gameBoard.square.filter(x=> x === 'X').length;
        const numO = gameBoard.square.filter(x=> x === 'O').length;
        if (numX > numO) {
            return 'p2'
        }
        if (numX === numO) {
            return 'p1'
        }
    }



    //winning combinations
    const winning = () => {
        const winCombos = {
            0: [0, 1, 2],
            1: [3, 4, 5],
            2: [6, 7, 8],
            3: [0, 3, 6],
            4: [1, 4, 7],
            5: [2, 5, 8],
            6: [0, 4, 8],
            7: [2, 4, 6]
        }
        //need to check the board and count X and O locations



        //player win totals

    }
    return {
        playerTurn
    };
};

displayController.markGrid()