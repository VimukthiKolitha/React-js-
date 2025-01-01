
import './App.css';
import Main from './Components/Main';
import LOL  from './Components/TestComp';

function App() {
  return (
    //you have to send only one element via return 
  <>
  <div>
    <h>Hellow</h>
  </div>
    {/*calling to Main page*/}
     <Main/>
     <Main/>
     <Main/>
     <Main name3 = 'golang' name4 = 'html'/>
     <LOL/>
 
  </>
  );
}

export default App;
