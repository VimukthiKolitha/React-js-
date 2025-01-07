import { useEffect, useState } from "react";
import './practical1.css';
import Units from "./Units";
import NavBar from './practical2/NavBar';

function Data() {
    const [img, setimg] = useState("");
    const [ID, setID] = useState("");
    const [city, setcity] = useState("");
    const [coutry, setcountry] = useState(""); 
    //create an array in use state
    const [data,setdata] = useState([]);
    //use efect to window size
    const [windowWidth,setwindow] = useState(window.innerWidth);
   // console.log(data);
    //using use effect
    useEffect(()=>{
      console.log('using use effect');
    },[data])

    //window size
    useEffect(()=>{
        const changingWith = () =>{
            setwindow(window.innerWidth);
        };
        window.addEventListener('resize',changingWith);
        console.log('use effect calling');

        //run only one time (after change the state this function clear previos thigs)
        //cleanup proccess
        return () =>{
            window.removeEventListener('reset',changingWith);
            console.log('use effect clean up function');
        }
    });
       

    return (
        <div>
            <h1>{windowWidth}</h1>
            <form style={{ backgroundColor: 'yellow' }} onSubmit={(e) => e.preventDefault()}>
                <h1>This is practical1</h1>
                <NavBar/>
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
