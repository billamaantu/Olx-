import React, { Component , useEffect,useState } from 'react';
import Aditem from './Aditem';
import img from '../imaged/phone-app.webp';
import img1 from '../imaged/appstore_2x.webp';
import img2 from '../imaged/playstore_2x.webp';
import Product from './product';



function Home(){
    

        const [list,setlist] = useState([]);
        const [loading,setLoading] = useState(true);

        useEffect(()=>{
       
            if(loading){

                var _list = [];

                for(let i=0; i<18; i++ ){
                 

                    _list.push(
                    
                    
                    <Aditem  placeholder={true}/>
                   

                  
                        
                        
                        
                        );

     
                }
    
                setlist(_list);
    
            }

        },list);

      

        
 
        return (
            
            <>
                
                <div className="home-page">

               

                 <div className="ad-list flex">

                     {list}

                

                     </div>

                     <button className="load-more fontb c33 b anim s20">
                         load more
                     </button>
                     
                    
                     
                </div>

              
              <div className="app-ribbon flex aic">
         
                <div className="img">
                    <img className="bl" src={img}  />
                </div>
                <div className="meta">

                     <h2 className="title fontb s30 color" >TRY THE OLX APP</h2>
                     <h2 className="slogan font s18 color" > Buy, sell and find just about anything using the app on your mobile.</h2>
               
                </div>

                <div className="links">
       
                <h2 className="title fontb s20 color" >Get Your App Today</h2>
                <div className="flex  as">
                <a href="#" className="noul bl"><img src={img1}/></a>
                <a href="#" className="noul bl"><img src={img2}/></a>

                 </div>
                </div>

              </div>
                        
            </>
        );
    
}

export default Home;