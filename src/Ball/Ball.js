import React, { useState} from "react";
import "./Ball.css";

function Ball(){

    const [possition, moveRight] = useState(0);

    const style = {
        left : possition + "px"
    }

    function moveBall(){
        //prevPossition radi tako sto uzima vrednosti koje su prethodno bile
        //u ovom slucaju da je bilo position + 20 on bi se povecavao za 20 a ovako on se povecava za 100 jer on u useState bukvalno upisuje vrednosti
        for (let i = 0; i < 5; i++) {
            
            moveRight((prevPossition)=>{return prevPossition + 20});    
        }
    }

    return(
        <div onClick={moveBall} className="Ball" style={style}></div>
    )
}

export default Ball;