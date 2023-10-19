import React from 'react'
import { useState } from 'react';

const Content = () => {

    const [startName,setName] = useState("create"); 
    
    function handleNameChange(){
    const name = ["create","explore","find","rule"];
    const int = Math.floor(Math.random()*4);
    setName( name[int]);
}

// const handleClick = () => {
//     console.log('Yeah Thank You For Your Support');
// }

const handleClick = (name) => {
    console.log(`Yeah Thank You For Your Support ${name}`);
}

const handleClick2 = (e) => {
    // console.log(e);
    console.log(e);
}

  return (
    <main>
        <p> Let's {startName} the world <br/> <br/> </p>
        {/* <button onClick={() => handleClick('Fasna')}>
             Sure </button> */}
        <button onClick={handleNameChange}>
             Sure </button>
    </main>
  )
}

export default Content