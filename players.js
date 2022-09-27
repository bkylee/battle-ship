const Player = board=>{
    const openSpots = [];
    const findOpen = ()=>{
        for(let i = 0; i < board.length; i ++){
            for(let j = 0; j < board.length; j++){
                if (board[i][j] !== "X" || board[i][j] !== "O"){
                    openSpots.push[i,j];
                };
            };
        };
    };

    const move = ()=>{
        
    }
}