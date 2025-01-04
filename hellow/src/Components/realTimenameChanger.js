import { useState } from "react";

const NameChanger = function Chage() {
 
    //hook
    const [name,setname] = useState('No Name yet');
    console.log(name);

    return(
        <div>
            <br/> <br/>
            <h1>Name changer</h1>
            <h2>{name}</h2>
            <input type="text" placeholder="Enter yor your name" style={{
                border:'1px solid black'
            }} onChange={(e) => setname(e.target.value)}/>
          
        </div>
        
    )
}
export default NameChanger;