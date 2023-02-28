import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    // signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from 'firebase/auth';

import {
    getFirestore,
    // retrieve documents inside of our firestore database
    doc,
    // get documents data
    getDoc,
    // set documents data
    setDoc,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDIWJOOpSA_9RKBVPoywEf860Gbwk2vqRc",
    authDomain: "crown-clothing-app-733b1.firebaseapp.com",
    projectId: "crown-clothing-app-733b1",
    storageBucket: "crown-clothing-app-733b1.appspot.com",
    messagingSenderId: "434563010428",
    appId: "1:434563010428:web:3d48e2c08160b200d89ef9"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
    return signInWithPopup(auth, googleProvider);
}
// export const signInWithGoogleRedirect = () => {
//     return signInWithRedirect(auth, googleProvider)
// }

// Database

export const database = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if (!userAuth) return;
    // We check if there is an existing document reference
    const userDocRef = doc(database, 'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const dataCreated = new Date();
        try {
            await setDoc(userDocRef, {
                // now we pass the data we want to set it with
                displayName,
                email,
                dataCreated,
                ...additionalInformation,
            })
        } catch(error) {
            console.log("Error! : ", error);
        }
    }

    return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
};