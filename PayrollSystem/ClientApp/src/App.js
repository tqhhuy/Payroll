import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';
import { BrowserRouter as Suspense, Switch, Route, BrowserRouter } from "react-router-dom";

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

import SignIn from './auth/Signin';
import Layout from "./components/Layout/layout.js";
import Home from "./views/home.js"
import Taxes from "./views/taxes.js"
import Register from './views/register';

//import "./assets/css/Navbar.css";
// Configure Firebase.
const config = {
    apiKey: "AIzaSyC373L24Sdhih-2oDikayTgVT5heMNoQ0U",
    authDomain: "payroll-9642e.firebaseapp.com",
    projectId: "payroll-9642e",
    storageBucket: "payroll-9642e.appspot.com",
    messagingSenderId: "635041237967",
    appId: "1:635041237967:web:743052b216c15d747b60ba",
    measurementId: "G-DV8QKF9YVS"
};

firebase.initializeApp(config);

function App() {
    // Listen to the Firebase Auth state and set the local state.
    // Handle firebase auth change
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [name, setName] = useState('User#001'); // Local signed-in state.
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
            console.log('Logged in user: ', user.getIdToken(true));
            setName(user.displayame);
            setIsSignedIn(!!user);
            
        });
        return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);
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
