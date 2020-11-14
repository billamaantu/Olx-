import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from "./Header";

class Mobile extends Component {
    render() {
        return (

            <div>

                <Link to="Mobile"/>
                <Header/>

            </div>
        );
    }
}

export default Mobile;