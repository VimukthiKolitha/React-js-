import React, { useEffect, useState } from 'react'

function EffectHook() {

    const  [click,setclick] = useState(0);
    let  [count,setcount] = useState(0);

    const clicCount = () =>{
          setclick(click + 1);
    }
    const test = () =>{
        setcount(count = click)
    }
    //every time something change use effect will be work
    useEffect(()=>{
      document.title = `you click ${count} times` //when click test btn this will set 'title as you click ${count} times'

      //this is called dependancy array
    },[count]);
  return (
    <div>
        <button style={{border:'1px solid black'}} onClick={clicCount}>Click</button>
        <button style={{border:'1px solid black'}} onClick={test}>Test</button>
        <div>{click}</div>
    </div>
  )
}

export default EffectHook