import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Sidebar from '../Sidebar/sidebar.js';
import Nvarbar from '../Nvarbar/Nvarbar.js';
import { Switch, Route } from "react-router-dom";
// import routes from "routes.js";
 function Layout(props){
    
        return (
            <>
            <div className="wrapper">
                <Sidebar name={props.name}/>
                <div className="main-panel">
                        <Nvarbar isSignIn={props.isSignedIn}/>
                    <div id="content">
                        <Container>
                            {props.children}
                        </Container>
                    </div>
                </div>
            </div>
            </>
        );
        
};
export default Layout