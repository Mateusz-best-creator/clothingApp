import React from "react";

import { 
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
    signInWithGoogleRedirect
} from '../../utils/firebase/firebase.utils';


const SignIn = () => {
    // create instance
    async function logGoogleUser () {
        const { user } = await signInWithGooglePopup();
        // console.log(user)
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    async function logGoogleUserRedirect () {
        const { user } = await signInWithGoogleRedirect();
        console.log(user);
    }

    return (
        <div>
            <button onClick={logGoogleUser}>
                Sign in with google Popup
            </button>
            <button onClick={logGoogleUserRedirect}>
                Sign in with google redirect
            </button>
            <h1>sign in page</h1>
        </div>
    )
}

export default SignIn;