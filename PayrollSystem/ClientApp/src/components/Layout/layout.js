import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Sidebar from '../Sidebar/Sidebar.js';
import Nvarbar from '../Nvarbar/Nvarbar.js';
import { Switch, Route } from "react-router-dom";
// import routes from "routes.js";
 function Layout(props){
    
        return (
            <>
            <div className="wrapper">
                <Sidebar dataFromParent={props.dataFromParent}/>
                <div className="main-panel">
                        <Nvarbar dataFromParent={props.dataFromParent}/>
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