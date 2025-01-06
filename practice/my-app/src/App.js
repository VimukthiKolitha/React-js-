
import { useState } from 'react';
import './App.css';
import Units from './Units'
import NavBar from './navBar';

function App() {
  const [name,setname] = useState('');
  const [imageUrl,setimageUrl] = useState('');
  const [age,setage] = useState('');
  //creating array for store data
  const [data,setdata] = useState([]);

  console.log(name);
  console.log(imageUrl);
  console.log(age);
  return (
  <div className='full'>
    <NavBar/>
    <div className='inputs'>
      <input type='text' placeholder='Enter name' className='name' onChange={(e) =>setname(e.target.value)} value={name}/><br/>
      <input type='text' placeholder='Enter image url' className='imageUrl' onChange={(e) =>setimageUrl(e.target.value)} value={imageUrl}/><br/>
      <input type='text' placeholder='Enter age' className='age' onChange={(e) =>setage(e.target.value)} value={age}/><br/>
      <button className='submit' onClick={
        (e) =>{
          e.preventDefault();
          {
            setdata((pre) =>[
              ...pre,
              { 
                name,
                imageUrl,
                age
              },
            ]);
               {/*clear image feld after click save btn*/}
               setname(''); // Reset name field
               setimageUrl(''); // Reset image URL field
               setage(''); // Reset age field
        }}
      }>Save</button>
      {data?.map((items,index) =>
         (
          <Units
          name={items.name}
          imageUrl={items.imageUrl}
          age={items.age}
          key={index}
          />
         )
      )};

    </div>
  </div>
  );
}

export default App;
