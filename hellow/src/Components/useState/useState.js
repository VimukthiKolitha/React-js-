import React from 'react'
import { useState } from 'react';

function useStateUse() {

   // let num1 = 20;

   //usestate             2 means initial value
   const [num1,setnum1] = useState(2);

   //usestate for counter

   const [num2,setnum2] = useState(0);

    function changrNum()
    {
        //this way num1 does not change
      // num1 = 30;
      // alert(num1);

      //set new num1 value
      setnum1(3)

    }

    const plus = () =>{

        setnum2(num2 + 1);
    }
    const minus = () =>{
            setnum2(num2 - 1);
    }

  return (
    <>
     <button onClick={changrNum} style={{ border: '1px solid black'}}>OK</button>
    <div id='num'>{num1}</div>
      
    <button onClick={plus} style={{ border: '1px solid black'}}>+</button>
    <button onClick={minus} style={{ border: '1px solid black'}}>-</button>

    <div>{num2}</div>
    </>
  )
}

export default useStateUse