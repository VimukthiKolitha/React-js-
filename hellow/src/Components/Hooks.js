
//hooks are use for handle the event in react.  in this case i need to change my name after i click the button. if you not use hook it not going to change.that is the place hooks are use full to us.

const { useState } = require("react");
function Hook ()
{
      //hook
      //befare click button value is 'vimukthi'
          const [name,setname] = useState('vimukthi');
       
          //after the click button value is 'kolitha'
          const nameChange = () =>
          {
            setname('Kolitha');
            console.log(name);
          }
        
    return (
        <>
        <h1>{name}</h1>
        <button style={{
            padding:'7px 8px',
            border:'1px solid'
        }} onClick={nameChange}>Click here</button>
        </>
    )
}
export default Hook;