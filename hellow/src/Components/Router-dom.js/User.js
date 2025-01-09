import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
function User() {

       const[data,setdata] = useState({})
       const {id} = useParams();

       useEffect(() =>{
        const getdata = async () =>{
             const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
             const data = await res.json();

             if(data)
             {
              setdata(data);
             }
        }
       getdata();

       return () =>{
          getdata();
       }
       },[id])
    console.log('id is:'+id);
  return (
    <div> 
      
      <h1>Use Page</h1>
      {data?(<div>
         <h2>{data.title}</h2>
         <h1>{data.id}</h1>
      </div>):null}
      <Link to={`/Contact`}>back</Link>
      </div>
  )
}

export default User