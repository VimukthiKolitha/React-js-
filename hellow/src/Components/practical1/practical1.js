import { useState } from "react";
import './practical1.css';
import Units from "./Units";

function Data() {
    const [img, setimg] = useState("");
    const [ID, setID] = useState("");
    const [city, setcity] = useState("");
    const [coutry, setcountry] = useState(""); 
    //create an array in use state
    const [data,setdata] = useState([]);

    console.log(data);
    return (
        <div>
            <form style={{ backgroundColor: 'yellow' }} onSubmit={(e) => e.preventDefault()}>
                <h1>This is practical1</h1>
             <div className="centerContainer">
             <input placeholder=" Enter image url"
                    style={{ border: '1px solid black' }}
                    type="text"
                    value={img}
                    onChange={(e) => setimg(e.target.value)}
                  className="text"/>
                  <br/>
                <input placeholder=" Enter Id"
                    style={{ border: '1px solid black' }}
                    type="text"
                    value={ID}
                    onChange={(e) => setID(e.target.value)}
                    className="text"/>
                     <br/>
                <input placeholder=" Enter city name"
                    style={{ border: '1px solid black' }}
                    type="text"
                    value={city}
                    onChange={(e) => setcity(e.target.value)}
                    className="text"/>
                     <br/>
                <input placeholder=" Enter coutry name"
                    style={{ border: '1px solid black' }}
                    type="text"
                    value={coutry}
                    onChange={(e) => setcountry(e.target.value)}
                    className="text"/>
                     <br/>
                
                <button className="btn"
                    style={{ border: '1px solid black' }}
                    onClick={(e) => {
                        {/*console all values as object*/}
                        e.preventDefault(); 
                        {
                            setdata((pre) =>[
                                {/*spread data*/}
                                ,...pre,
                                {
                                    img,
                                    ID,
                                    city,
                                    coutry,
                                },
                            ]);
                             {/*clear image feld after click save btn*/}
                            setimg((pre) =>{
                                if(pre.length > 0)
                                {
                                    return '';
                                }
                                else{
                                    return pre;
                                }
                            })
                            setID((pre) =>{
                                if(pre.length > 0)
                                {
                                    return '';
                                }
                                else{
                                    return pre;
                                }
                            })
                            setcity((pre) =>{
                                if(pre.length > 0)
                                {
                                    return '';
                                }
                                else{
                                    return pre;
                                }
                            })
                            setcountry((pre) =>{
                                if(pre.length > 0)
                                {
                                    return '';
                                }
                                else{
                                    return pre;
                                }
                            })
                        }
                    }}
                >
                    Save
                </button>
             </div>
             {/*pass data to Units */}
            {data?.map((item,index)=>
                (
                    <Units
                        img = {item.img}
                        ID = {item.ID}
                        city = {item.city}
                        coutry = {item.coutry}
                        key = {index}

                    />
                )
            )}
            </form>
        </div>
    );
}

export default Data;
