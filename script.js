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
    const boxes = document.querySelectorAll('.box');
    playerTurnText = document.getElementById('playerTurnText');
    playerTurnText.textContent = 'Player 1 Turn';
    const markGrid= () => {
        document.addEventListener('click', function printToGrid(event) {
            if(event.target.matches('.box')) {
                for(let i= 0; i < boxes.length; i++) {
                    if(event.target.matches(`.box${i}`)) {
                        let newMark;
                    }
                    if(playerTurn()=== 'p1') {
                        newMark = 'X'
                    }
                    if(playerTurn()=== 'p2') {
                        newmark = 'O'
                    }
                    return gameBoard.square.splice(i, 1, newMark)
                }
            }

    }, false);
}





    //reset button

    //prints X's and O's onto the screen by render function
    /*Render() {

    };
    */

    return {
        markGrid
    };
    
});


//###############################players-2 (Factory)##########################################//
const player = () => {
    const numX = 0;
    const numO = 0;
    const playerTurn = () => {
        if (numX > numO) {
            return 'p2'
        }
        if (numx === numO) {
            return 'p1'
        }
    }

    //player turns who starts where

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
    }
};