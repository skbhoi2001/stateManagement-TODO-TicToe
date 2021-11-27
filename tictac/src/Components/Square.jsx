import React from "react";
import "./Game.css"

function Square({value,chooseSquare}){
    return(
     <div className="square" onClick={chooseSquare}>{value}</div>
     );
}

export default Square;