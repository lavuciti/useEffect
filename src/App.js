import React, {useState} from "react";

function App(){

  //umesto state pisemo ovo dole tako sto bi name se nalazio u state u changeName bi bila funkcija. Moramo da importujemo usestate
  const [name, changeName] = useState("")

  return(
    <div className="containter text-center">
      <h1>{name}</h1>
      <input type="text" onChange={(event) => {changeName(event.target.value)}}/>
    </div>
  )
}


export default App;