import React, {useEffect, useState} from 'react';

function Users1(){

    const [account, setAccount] = useState({name:"Danilo", deposit:11000})

    //u ovom primeru useEffect kada god se menja u account.deposit nesto tada ce se pozivati consol.log('Rendering'). To smo postigli komandom [account.deposit] 
    
        useEffect(()=>{
            console.log("Rendering");
        },[account.deposit])

    return(
        <div className={"container text-center"}>
            <h1>{account.name} --- {account.deposit}</h1>
            <input type="text" placeholder="name" onChange={event=>{ setAccount({...account, name:event.target.value})}}/>
            <input type="text" placeholder="deposit" onChange={event=>{ setAccount({...account, deposit:event.target.value})}}/>
        </div>
    )
}

export default Users1;