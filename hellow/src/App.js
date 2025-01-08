import './App.css';

//import export default file
import Main from './Components/Main';
import LOL  from './Components/TestComp';
import {F1} from './Components/cssUsing';

//import export file
//"{Data1}" in export data export as objects
import { Data1,Data2 } from './Components/export';
import Hook from './Components/Hooks';
import Spread from './Components/SpredOpertor';
import PrevousHook from './Components/previousState';
import NameChanger from './Components/realTimenameChanger';
import DATA from './Components/practical1/practical1';
import UseEffect from './Components/useEffectPractice/UseEffect'
import Main1 from './Components/Router-dom.js/Main';

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
     <Hook />
     
     <Spread />

     <PrevousHook/>

     <NameChanger/>
     <DATA/>
     <UseEffect/>
     <Main1/>
  </div>
  );
}

export default App;
