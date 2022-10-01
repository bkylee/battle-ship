const Player = enemyboard=>{
    let x; 
    let y; 

    const move = ()=>{
        rand1 = Math.floor((Math.random()* openSpots.length));
        rand2 = Math.floor((Math.random()* openSpots.length));
        x = rand1;
        y = rand2;
        let move = enemyboard.receiveAttack(x,y);
        if (move == false){
            move();
        };
    }
    return {x, y, move};
};

export {Player};