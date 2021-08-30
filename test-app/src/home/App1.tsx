import React  , { useState, useEffect } from 'react';
//import logo from './logo.svg';
import './App.css';


function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        naslov 123
      </header>







  
      <div  className="tijelo"> 
  
      


        <img  src="https://www.greenqueen.com.hk/wp-content/uploads/2021/06/WEF-Investments-In-Nature-Based-Solutions-Have-To-Triple-By-2030-To-Address-Climate-Change-Biodiversity-Loss.jpg"   alt="Logo"  className="slika"/>
  
        

        
       <img src="https://s3-us-west-2.amazonaws.com/uw-s3-cdn/wp-content/uploads/sites/6/2017/11/04133712/waterfall-750x500.jpg"     alt="Logo" className="slika" />           
       
 
       
       </div>
      
     
   
      <footer className="dolje">
        footer
      </footer>

   
    </div>
  
  


  );
}






function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
    console.log({count});
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export {Example, App}  ;
