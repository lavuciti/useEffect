import React, { useState} from "react";
import "./Ball.css";

function Ball(){

    const [possition, moveRight] = useState(0);

    const style = {
        left : possition + "px"
    }

    function moveBall(){
        //prevPossition radi tako sto uzima vrednosti koje su prethodno bile
        for (let i = 0; i < 5; i++) {
            moveRight((prevPossition)=>{return prevPossition + 20});    
        }
    }

    return(
        <div onClick={moveBall} className="Ball" style={style}></div>
    )
}

export default Ball;