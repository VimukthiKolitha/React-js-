import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [apiID,setapiID] = useState('1');
    const [data,setdata] = useState({});
    
    console.log(apiID);
    console.log(data);

    useEffect(() =>{
        console.log('Use effect running');
     if(apiID.length > 0)
     {
        
        console.log('Use Effect if condition running');
        
        //fetch data 
        const apiCall = async() =>{
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${apiID}`);
              const data = await res.json()
        }
        if(data)
        {
            setdata(data);
        }
         apiCall();
     }

    },[apiID])
  return (
    <div>
        <input type='text' placeholder='Enter id:' value={apiID} onChange={((e)=>setapiID(e.target.value))}  style={{
            border:'1px solid black'
        }}/>
    </div>
  )
}

export default UseEffect