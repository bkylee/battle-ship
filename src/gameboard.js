import Ship from './ship.js';

const Gameboard = () =>{
    const ship1 = Ship(2);
    const ship2 = Ship(3);
    const ship3 = Ship(3);
    const ship4 = Ship(4);
    const ship5 = Ship(5);
    let totalSunk = 0;
    let missedAttacks = 0;
    const createGameboard = arr =>{
        return arr;
    };
    const myBoard = createGameboard(arr);

    const checkShip = (boardThing)=>{
        switch(boardThing){
            case "1":
                return ship1; 
            case "2":
                return ship2;
            case "3":
                return ship3;
            case "4":
                return ship4;
            case "5":
                return ship5;
        };
    };

    const checkSunk = (boardThing)=>{
        let sunk = boardThing.sunk();
        if (sunk !== null){
            totalSunk ++;
            return sunk;
        };
        return;
    };

    const receiveAttack = (x,y) =>{
        if (myBoard[x][y] === "X"){
            return false;
        }
        if(myBoard[x][y] === "O"){
            return false;
        }
        if(myBoard[x][y] === " "){
            myBoard[x][y] = "O";
            missedAttacks ++;
            return true;
        };
        let edit = checkShip(myBoard[x][y]);
            edit.hit();
            myBoard[x][y] = "X";
            return true;
        let sunk = checkSunk(myBoard[x][y]);
        //if sunk return sunkmessage or something
    };
    
    return{
        createGameboard,myBoard,receiveAttack, missedAttacks
    }
};