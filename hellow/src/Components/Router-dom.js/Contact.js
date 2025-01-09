import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
//import style component
import styled from 'styled-components';
function Contact() {
  //without re-rendaring

  const [data,setdata] = useState([]);
  const [Theme,settheme] = useState(false);

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
   
    <ContactContainer changeTheme = {Theme}>
      <ContactHeader>
      <h1>Contact Page</h1>
      <button onClick={()=>settheme(pre=>pre?false:true)}>Change theme</button>
      </ContactHeader>
      
    {data?.map(({id,title})=>(<Link to={`/Contact/${id}`} key={id}>

    <Contacttitle changeTheme={Theme}>
    <div><h3>{title}</h3></div>
    </Contacttitle>
    </Link>))}
    
    </ContactContainer>
  )
}

export default Contact

//give styles
//main means html element insted of main you can use any element (ex:main);
//in here change background color accessing ContactContainer property
const ContactContainer = styled.main`
background-color: ${(props)=>(props.changeTheme ? 'black':'red')};
`
const ContactHeader = styled.h1`
color: green;
`
const Contacttitle = styled.div`
background-color:${({changeTheme}) =>
{
  if(changeTheme)
    {
      return'yellow'
    }
    else
    {
      return'#b6dedb'
    }
}
};
  padding: 15px;
  margin: 10px 0;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;

  &:hover{
  background-color: inherit;
  }
`