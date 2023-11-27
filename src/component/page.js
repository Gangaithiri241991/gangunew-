import React from 'react'
import img1 from './imggg.png'
import Res from './aji.pdf'
import img2 from './git.png'
import img3 from './guvi.png'

import {Route, Routes, useNavigate,NavLink,Link} from 'react-router-dom';

export default function Page() {


    
    return(
     <div className='container'>
     <div className='card1'>

    
        <NavLink to='https://elaborate-moonbeam-4bc156.netlify.app/'>Portfolio</NavLink>
        </div>

         <div className='card1'>

   
        <NavLink to='https://github.com/Gangaithiri241991'>
            <img src={img2} height="60%"width="70%"/>Github</NavLink>
        </div>
        <div className='card1'>

   
<NavLink to ={Res}>Resume </NavLink>
</div>
<div className='card1'>

   
        <NavLink to=' https://www.guvi.in/ajimansamy2954'>
            <img src={img3} height="60%"width="70%"/>Guvi</NavLink>
        </div>
   </div>

        

       
    );
}
