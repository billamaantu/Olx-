import React, { Component } from 'react';
import logo from '../imaged/logo11.png';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown , faSearch ,faPlus} from '@fortawesome/free-solid-svg-icons';
import img3 from '../imaged/olx-banner.PNG';
import '../App.css'

class Header extends Component {
    render() {


        const nav = [
            
           {ID:1, label: "mobile phone"},
            {ID:2, label: "Cars"},
            {ID:3, label: "Motorcycles"},
            {ID:4, label: "Houses"},
            {ID:5, label: "TV-Video-Audio"},
            {ID:6, label: "Tablets"},
            {ID:7, label: "Land & Plots"},


        ];


        return (


            <React.Fragment>           
                
                <div>

                <div className=" header fixed flex aic">

                    <div className="logo">
                        <img src={logo} />
                    </div>

                    <div className="location rel flex aic">

                        <div className="icon-search ico  " /><FontAwesomeIcon className="s24" icon={faSearch}/>
                        <input className="label s15 font" placeholder="Your Location" value=" Pakistan" />
                        <button className="icon-chevron-down  arro s24" ><FontAwesomeIcon icon={faChevronDown}/></button>

                    </div>

                    <div className="search flex aic">

                        <input type="text" placeholder="Find Cars , Mobile phones and more...." className="query  font s15" />
                        <button className="icon-search go s24 cfff"><FontAwesomeIcon icon={faSearch}/></button>


                    </div>

                    <div className="actions flex aic">

                      <Link to="/account/signin" className="color fontb s16 noulh noul">Sign in</Link>
                      <button className="sell  flex color aic">

                    <div className="icon-plus ico  s24"   /><FontAwesomeIcon className="ico" icon={faPlus}/>
                    <h2 className="s18 fontb">sell</h2>

                      </button>


                    </div>

                </div>
                 


            </div>

            <div className="hnav fixed flex aic">

          <button className="view-cates flex aic color">
          <h2 className="s18 font ">All Categories</h2>
          <button className="icon-chevron-down  arro s24" ><FontAwesomeIcon icon={faChevronDown}/></button>

          </button>

          {
              nav.map(item => {

                return (

                <Link to={"/browser/" + item.ID} className="noul noulh color bl font s15">{item.label}</Link>
                )
              })
          }

            </div>

         <div className="hclr" />

      <div className="banner">

         <img className="imgsize" src={img3} />

         </div>
            </React.Fragment>
 
        );
    }
}

export default Header;


