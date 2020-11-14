import React, { Component } from 'react';
import Bick from '../imaged/bick.jpg';


function Aditem(props){

    if("placeholder" in props ){

        return(

            <div className="ad-item">
             
             <div className="poster anim placeholder">
        
             <img src={Bick} height="100%" width="100%"/>
             
             <h1>Bicks</h1>
             <h2>45000</h2>

             </div>
             {/* <div className="title anim placeholder"/> */}
             {/* <div className="tagline anim placeholder"/> */}
             {/* <div className="ftr anim flex">

             <div className="anim location placeholder"/>
             <div className="anim stamp placeholder"/>





            </div> */}
           
    
            </div>
        )

    }

    return(

        <div className="ad-item">


      
           
        </div>
    )


}


export  default Aditem;