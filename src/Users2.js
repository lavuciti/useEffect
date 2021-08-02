import React, {useEffect, useState} from 'react';

function Users2(){

    const [display, setDisplay] = useState(true)

    //
    
        useEffect(()=>{
            console.log("Rendering");

            //kada se pokrene aplikacija u consoli ce se videti rendering a nece se videti component unmounted
            //u svakom trenutku kada se promeni display tada se pokrece ova funkcija i rendering
            return ()=>{
                console.log("Component unmounted");
            }
        },[display])

    return(
        <div className={"container text-center"}>
            <button onClick={()=>{ setDisplay(!display) }}>Toggle</button>

            {/* kada je display true tada prikazuje desnu stranu a kada je display false tada ne prikazuje */}
            {display && <div style={{width:"200px", height: "200px", background: "tomato"}}></div>}   
        </div>
    )
}

export default Users2;
