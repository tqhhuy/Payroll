import React, { Component,useEffect,useState } from "react";
import { Button } from "reactstrap";
import SignIn from '../../auth/Signin';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
function Nvarbar(props) {

    const [isSignedIn, setIsSignedIn] = useState(false);
    useEffect(() => {
        setIsSignedIn(props.isSignIn)
    })
    const auth = firebase.auth();
    function logout() {
    auth.signOut().then(() => {
        console.log("Singout");
    })
    }
    return (
        <>
            <nav className="navbar navbar-expand-sm bg-light navbar-light">
                <div className="justify-content-end navbar-collapse collapse">
                    <div className="nav mr-auto navbar-nav">
                        <form role="Search" className="navbar-form navbar-left navbar-search-form ml-3 ml-lg-0">
                            <div className="input=group">
                                <i className="nc-icon nc-zoom-split">
                                    <input placeholder="Search..." type="text" className="form-control"></input>
                                </i>
                            </div>
                        </form>
                    </div>
                    {isSignedIn == true && (
                        <button id="logout" className="btn-primary" onClick= {logout()}>
                            Logout
                        </button>
                    )}
                    {isSignedIn == false && (
                        <SignIn />
                    )}


                </div>
            </nav>
        </>
    );
};

export default Nvarbar