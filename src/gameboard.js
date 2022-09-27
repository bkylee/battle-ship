import Ship from './ship.js';

const Gameboard = () =>{
    const ship1 = Ship(2);
    const ship2 = Ship(3);
    const ship3 = Ship(3);
    const ship4 = Ship(4);
    const ship5 = Ship(5);
    let misses = 0;
    const board = [
        ["1","1"," "," "," "," "," "," "," "," ",],
        [" "," "," "," "," "," ","4"," "," "," ",],
        [" "," "," "," "," "," ","4"," "," "," ",],
        [" "," "," "," "," "," ","4"," "," "," ",],
        [" "," "," "," "," "," ","4"," "," "," ",],
        [" "," "," "," "," "," "," "," "," "," ",],
        ["2"," "," "," "," ","5","5","5","5","5",],
        ["2"," "," "," "," "," "," "," "," "," ",],
        ["2"," ","3","3","3"," "," "," "," "," ",],
        [" "," "," "," "," "," "," "," "," "," ",],
    ];
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

    const checkSunk = ()=>{

    };

    const receiveAttack = (x,y) =>{
        if (board[x][y] === "X"){
            return;
        }
        if(board[x][y] === "O"){
            return;
        }
        if(board[x][y] === " "){
            board[x][y] = "O";
        };
        let edit = checkShip(board[x][y]);
            edit.hit();
            board[x][y] = "X";
        
    };
    
    return{
        board,receiveAttack, missedAttacks
    }
};