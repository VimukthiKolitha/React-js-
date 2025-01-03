const { useState } = require("react")

function Spread(name,city,grade)
{
 
    const [data,setdata] = useState({
        name:'python',
        city:'kegalle',
        grade:'A'
    })
   const ok = () =>
   {
    setdata({
        //spread operator
        ...data,
        name:'java',
        city:'kandy',
        grade:'A+'
    }) 
   }
   console.log(data);

    return(
       <>
       <br/><br/>
       <h>{data.name}</h>
       <br/>
       <h>{data.city}</h>
       <br/>
       <h>{data.grade}</h>
       <br/>
        <button style={{
            padding:'7px 8px',
            border:'1px solid'
        }}onClick={ok}>click me</button>
       </>
    )
}
export default Spread;