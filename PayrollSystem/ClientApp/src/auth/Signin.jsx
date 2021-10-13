import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import FirebaseAuth from './FirebaseAuth';

SignIn.propTypes = {

};
  // Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
    signInFlow: 'popup',
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: '/home',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID
  ],
};

function SignIn() {
  return (
      <div className="row">
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </div>
  );
}

export default SignIn;