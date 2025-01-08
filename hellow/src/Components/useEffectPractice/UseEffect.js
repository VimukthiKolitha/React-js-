import React, { useEffect, useState } from 'react'

function UseEffect() {
    const [apiID,setapiID] = useState('1');
    const [data,setdata] = useState({});
    
    console.log(apiID);

    //console data
    console.log(data);

    //use effect
    useEffect(() =>{
        console.log('Use effect running');

        //if api length > 0 run this part
     if(apiID.length > 0)
     {
        
        console.log('Use Effect if condition running');
        
        //fetch data 
        const apiCall = async() =>{

          //to mesure how many tome apiCall runs
          console.log('api call running');
            const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${apiID}`);
              const data = await res.json()
              
              //if there any data set to that data to data
              if(data)
              {
                setdata(data);
              }
        }
        //validate (apiId should be betweeen 0 and 100)
        if(apiID.length > 0 && Number(apiID) > 0 && Number(apiID) < 100)
        {
          //call api function 
         apiCall();
        }
        //cleanup function
          return() =>
          {
            console.log('cleanup');
             apiCall();
          }
     }
     //this use effect runs only when there any data in api id
    },[apiID])
  return (
    <div>
        <input type='text' placeholder='Enter id:' value={apiID} onChange={((e)=>setapiID(e.target.value))}  style={{
            border:'1px solid black'
        }}/>

        {data && (
          <div>
            <h1>{data.title}</h1>
            <h1>{data.id}</h1>
          </div>
        )}
    </div>
  )
}

export default UseEffect