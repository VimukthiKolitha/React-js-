//in prevous user state we can constantly chnage values 
const { useState } = require("react")
function PrevousHook ()
{
  const initialState = 0;
  const [Count,setCount] = useState('initialState');

  const reset = () =>{
    
    setCount(initialState);
  }
  const increase = () =>{
    setCount(Count + 1);
  }
  const decrease =() =>{
    setCount(Count - 1);
  }

  return (
    <div>
      <h1>{Count}</h1>
      <button style={{
        fontSize:'10px',
        border: '1px solid black',
        padding: '7px 10px',
      
      }} onClick={reset}>reset</button>
      <button style={{
        fontSize:'10px',
        border: '1px solid black',
        padding: '7px 10px',
      
      }} onClick={increase}>+</button>
      <button style={{
        fontSize:'10px',
        border: '1px solid black',
        padding: '7px 10px',
      
      }} onClick={decrease}>-</button>
    </div>
  )
}
export default PrevousHook;