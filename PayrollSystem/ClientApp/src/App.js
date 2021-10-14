import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';
import { BrowserRouter as Suspense, Switch, Route, BrowserRouter } from "react-router-dom";

import Layout from "./components/Layout/layout.js";
import Home from "./views/home.js"
import Taxes from "./views/taxes.js"
import Register from './views/register';

//import "./assets/css/Navbar.css";
// Configure Firebase.

function App() {
    // Listen to the Firebase Auth state and set the local state.
    // Handle firebase auth change
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [name, setName] = useState('User#001'); // Local signed-in state.
   
    return (
        <div className="App">
            <Suspense fallback={<div>Loading ...</div>}>
                <BrowserRouter >
                <Layout name={name} isSignedIn={isSignedIn}>
                    <Switch>
                            {/*<Route exact path='/' component={SignIn} />*/}
                        {<Route exact path='/' component={Home} />}
                        <Route path='/home' component={Home} />
                        <Route path='/taxes' component={Taxes} />
                        <Route path='/register' component={Register} />
                        
                    </Switch>
                </Layout>
                </BrowserRouter>
            </Suspense>
        </div>
    );
}

export default App;
