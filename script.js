//##########################gameBoard obj (module)############################################//
const gameBoard = (function () {
    /*store the gameboard as an array inside of a Gameboard object*/
    const square= ['','','','','','','','',''];
    return {
        square
    };
})();









//#########################displayController (module)###########################################//
const displayController = (function () { 
//determines if the spot marked should be an X or an O based on who's turn it is
    function markBox(e) {
        let boxes= document.querySelectorAll('.box')
        document.addEventListener('click', function printToGrid(event) {
            if(event.target.matches('.box')) {
                console.log('hello!')
            }else {
                console.log('boo')
            }
        }
        )};


//prints X's and O's onto the screen
    function render() {
        const boxes= document.querySelectorAll('.box')
    }
    return {
        markBox
    };
})();













//###############################players-2 (Factory)##########################################//
const Player= function createPlayer() {
    //player names

    //player icons

    //player turns

    //player win totals

    //winning boxes

}