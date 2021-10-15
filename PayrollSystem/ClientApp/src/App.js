import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/App.css';
import { BrowserRouter as Suspense, Switch, Route, BrowserRouter } from "react-router-dom";
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import Layout from "./components/Layout/layout.js";
import Home from "./views/home.js"
import Taxes from "./views/taxes.js"
import Register from './views/register';

import CompanyApi from './api/companyApi.js';
import Authorise from './api/authorise';
//import "./assets/css/Navbar.css";
// Configure Firebase.

function App() {
    // Listen to the Firebase Auth state and set the local state.
    // Handle firebase auth change
    const [isSignedIn, setIsSignedIn] = useState(false);
    const [name, setName] = useState('User#001'); // Local signed-in state.
    const [companyList,setCompanyList] = useState([]);
    var tokenTxt ='';
    const [TKID,setTKID] = useState('');
    useEffect(()=> {
        const fetchCompany = () => {
            var id ='1';
                const response = CompanyApi.getAll(id);
                console.log('Company: ',response);
            
        }
    fetchCompany();
    },[]);
    useEffect(() => {
        const unregisterAuthObserver = firebase.auth().onAuthStateChanged(   async (user) => {
          if (!user){
            console.log('User is not login');
            return
          }
          const username = user.displayName;
          setName(username);
          console.log('Logged in user: ', name);
           tokenTxt =  (await user.getIdToken());
          console.log('Logged in user Token: ',tokenTxt);
          setTKID(tokenTxt);
          const response = await Authorise.getTokenAuthen(tokenTxt);
          console.log(response);
          
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
