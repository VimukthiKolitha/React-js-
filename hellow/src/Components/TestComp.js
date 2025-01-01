function LOL()
{
    const data = [
        {
            name:'kolitha',
            city:'kegalle',
            position:'web developer'
        },{
            name:'jayawadena',
            city:'kandy',
            position:'android developer'
        },{
            name:'nethma',
            city:'colombo',
            position:'software engineer'
        },{
            name:'imesh',
            city:'gampaha',
            position:'dev ops engineer'
        }
    ]
    return(

        //loop elements
      // the key attribute is used to help identify components  uniquely
        <>
         {data.map((ele,index) =>{
            return(
                <div>
                    <p>key:{index}</p>
                    <p>{ele.name}</p>
                    <p>{ele.city}</p>
                    <p>{ele.position}</p>
                </div>
            )
         })}
        </>
    )
}
export default LOL