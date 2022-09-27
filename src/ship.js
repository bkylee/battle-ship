const Ship = length =>{
    const hitCount = 0;
    while (shipLength.length < length){
        shipLength.push(" ");
    };
    const hit = spot =>{
        hitCount++;
    };
    const sunk = ()=>{
      if (hitCount === length){
        return "sunk";
        };
    };
    return {shipLength, hit, sunk}
};

export {Ship}; 