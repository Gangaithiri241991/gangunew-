import logo from './logo.svg';
import './App.css';
import img1 from './component/imggg.png'
import img2 from './component/imggggg.avif'
import img3 from './component/imag.avif'
import Page from './component/page';
import Card3 from './component/card3'
import img4 from './component/full.png'

import Portfolio from './component/portfolio';
import Home from './component/home'
import {Route, Routes, useNavigate} from 'react-router-dom';

function App() {

  const myStyle={
    backgroundImage:`url(${img2})`,
    backgroundSize:'cover',
    height:'150vh',
    backgroundRepeat:'no-repeat',


  }
  return (
    <div className="App">
       
   <div  className= "back1 "style={myStyle}>
  
    <div>
    <h3>Gangaithiri Selvaraj
      <h6>Full Stack Developer</h6>
    </h3>
    </div>
 
      <div  className= "back " >
    <Page/>
      
      </div><br/>
      <div className='container'>
    <Card3 image={img4}/>
      </div>
      
      </div>
   
    </div>
  );
}

export default App;
