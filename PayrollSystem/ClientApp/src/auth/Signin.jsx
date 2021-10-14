import React, {useState, useEffect} from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import FirebaseAuth from './FirebaseAuth';

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

// Configure FirebaseUI.
const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // signInSuccessUrl: '/home',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

function SignIn(props) {
  const [name, setName] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false); // Local signed-in state.
  // Listen to the Firebase Auth state and set the local state.
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
      
    });
    return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
  }, []);

  if (!isSignedIn) {
    return (
      <div>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
        
      </div>
    );
  }
  return (
    <div>
      <button onClick={() => firebase.auth().signOut()}>
        Sign-out
      </button>
      {/* <p> {firebase.auth().currentUser.displayName}</p> */}
    </div>
  );
}

export default SignIn;



