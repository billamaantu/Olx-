import React ,{Component} from 'react';
import './App.css';
import './Props.css';
import {BrowserRouter as Router,Switch,Route,Link, BrowserRouter} from "react-router-dom";
import Home from './component/Home';
import Header from './component/Header';
import Fotter from './component/Footer';
import Mobile from './component/Mobile';

function App() {
  return (
    

 <BrowserRouter>

 <Header/>
 <Route  path="/" component={Home} />
 <Route  path="/Mobile" component={Mobile} />

 <Fotter/>
 
 </BrowserRouter>
 









  );
}

export default App;
