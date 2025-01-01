//components most likely work as function

//even  variable are outside the funcnction it will work
const k = 'java';

const createObj = {
    name:'pyhon',
    name2:'c++',
};


function main({name3,name4})
{
   

    const i = 'ruby';
    const j = 'angular';
    return(<>
    <ul>
        <li>{i}</li>
        <li>{j}</li>
        <li>{createObj.name}</li>
        <li>python</li>
        <li>{k}</li>
        <li>{createObj.name2}</li>
        <li>{name3}</li>
        <li>{name4}</li>
    </ul>
    
    </>);
}
export default main;