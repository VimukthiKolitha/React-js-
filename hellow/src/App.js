import './App.css';

//import export default file
import Main from './Components/Main';
import LOL  from './Components/TestComp';
import {F1} from './Components/cssUsing';

//import export file
//"{Data1}" in export data export as objects
import { Data1,Data2 } from './Components/export';


function App() {
  return (
    //you have to send only one element via return 
  <div>
  <div>
    <h>Hellow</h>
  </div>
    {/*calling to Main page*/}
     <Main/>
     <Main/>
     <Main/>
     <Main name3 = 'golang' name4 = 'html'/>

     <LOL/>
  
     <Data1/>
     <Data2/>
     <div className='f1'>
     <F1 />
     </div>
     
  </div>
  );
}

export default App;
