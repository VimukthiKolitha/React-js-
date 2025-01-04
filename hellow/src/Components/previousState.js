//in prevous user state we can constantly chnage values 
const { useState } = require("react")
function PrevousHook ()
{
  const initialState = 0;
  const [Count,setCount] = useState('initialState');

  const reset = () =>{
    
    setCount(initialState);
  }
  //in this part when you click button constantly count increase only by one
     const clickHandle = () =>{
      setTimeout(() =>{
        console.log(Count);
          setCount(Count + 1);
      },3000);
     }
  //solution for (in this part when you click button constantly count increase only by one)   
  const decrease =() =>{
    setTimeout(() =>{
      setCount((prev) => prev - 1);
    },3000)
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
      
      }} onClick={clickHandle}>+</button>
      <button style={{
        fontSize:'10px',
        border: '1px solid black',
        padding: '7px 10px',
      
      }} onClick={decrease}>-</button>
    </div>
  )
}
export default PrevousHook;