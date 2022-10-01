import {PC, P1, PCgameBoard, playerGB} from './game.js';

const main = document.createElement('div');
main.setAttribute('id','main');
document.body.appendChild(main);

const makeBoard = board =>{
    const wrapper = document.createElement('div');
    wrapper.setAttribute('id','wrapper');
    board.myBoard.forEach(element => {
        element.forEach(cell=>{
            const cellDOM = document.createElement('div');
            cellDOM.textContent = cell;
            cellDOM.setAttribute('class','cell');
            wrapper.appendChild(cellDOM);
        });     
    });
};

makeBoard(playerGB.myBoard);
makeBoard(PCgameBoard.myBoard);
