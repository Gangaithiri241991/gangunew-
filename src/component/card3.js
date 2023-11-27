
import React from 'react'
const Card1=(props)=>{
    return(
    <div>
        
      
            
     
            <div class="col-lg-4">
            <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                  <h5 class="card-title text-muted text-uppercase text-center"> {props.title}</h5><hr/>
                  
                 <img src={props.image} height="90%" width="90%"/>
                  
           
              
            </div>
          </div>
       </div>
        </div>
      
        )
}
export default  Card1
//It is a process involving the creation,maintenance of application ,