const Ship = length =>{
    const shipLength = [];
    while (shipLength.length < length){
        shipLength.push(" ");
    };
    const hit = spot =>{
        shipLength[spot] = "X";
    };
    const sunk = ()=>{
        counter = 0;
        shipLength.forEach(spot =>{
            if(spot === "X"){
                counter++;
            };
        });
        if (counter === shipLength.length){
            return "Sunk";
        };
    };
    return {shipLength, hit, sunk}
};

export {Ship}; 