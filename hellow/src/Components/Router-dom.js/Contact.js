import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Contact() {
  //without re-rendaring

  const [data,setdata] = useState([]);

  useEffect(()=>{
    const DataFetchData = async () =>{
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
      const data = await res.json();

      if(data)
      {
        setdata(data);
      }
    }
    DataFetchData();
  },[])
  return (
    <div><h1>Contact Page</h1>
    {data?.map(({id,title})=>(<Link to={`/Contact/${id}`} key={id}><div><h3>{title}</h3></div></Link>))}
    
    </div>
  )
}

export default Contact