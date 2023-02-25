import { React } from "react";

import {
    signInWithGooglePopup, 
    createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
    // create instance
    async function logGoogleUser () {
        const { user } = await signInWithGooglePopup();
        // console.log(user)
        const userDocRef = await createUserDocumentFromAuth(user);
    }

    return (
        <div>
            <button onClick={logGoogleUser}>
                Sign in with google Popup
            </button>
            <h1>sign in page</h1>
            <SignUpForm />
        </div>
    )
}

export default SignIn;