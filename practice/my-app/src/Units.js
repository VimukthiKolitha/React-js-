import React from 'react'
function Units({name,imageUrl,age}) {
  return (
    <div>
 
        <img src={imageUrl} alt='img' style={{
            width:'100px',
            height:'70px'
        }}/>
        <h1 style={{color:'white' }}>{name}</h1>
        <h1 style={{color:'white'}}>{age}</h1>
    </div>
  )
}

export default Units