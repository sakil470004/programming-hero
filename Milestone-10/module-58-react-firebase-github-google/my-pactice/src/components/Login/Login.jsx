import React, { useState } from 'react';
import { GoogleAuthProvider, GithubAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.init';

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const handelGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                setUser(loggedInUser)
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }
    const handleSignOut = () => {
        signOut(auth).then(() => {
            setUser(null)
        }).catch((error) => {
            // An error happened.
        });
    }
    const handelGithubSignIn = () => {
        const githubProvider = new GithubAuthProvider();
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                const loggedInUser = result.user;
                setUser(loggedInUser)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            {!user && <div>
                <button onClick={handelGoogleSignIn}>Google Login</button>
                <button onClick={handelGithubSignIn}>Github Login</button></div>}
            {user && <div>
                <button onClick={handleSignOut}>Sign Out</button>
                <h1>User {user.displayName}</h1>
                <h3>User {user.email}</h3>
                <img src={user.photoURL} alt="ppp" />
            </div>
            }
        </div>
    );
};

export default Login;