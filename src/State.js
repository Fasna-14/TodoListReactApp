import React, { useState } from 'react'

const State = () => {    
    function namee() {
        return console.log("yeah you have done");
    }

    function increamentFunction(){
        //setCount(count + 1)
        // setCount ((count) => {return count + 1});
        // setCount ((count) => {return count + 1});
        // setCount ((count) => {return count + 1});
        setCount (prevCount => prevCount + 1);
    }

    function decrementFunction(){
        setCount (prevCount => prevCount - 1);
    }

    const [count,setCount] = useState(0);
    const [name,setName] = useState(() => namee());

  return (
    <main>
        <button onClick={decrementFunction}> - </button>
        <span> {count} </span>
        <button onClick={increamentFunction}> + </button>
    </main>
  )
}

export default State;