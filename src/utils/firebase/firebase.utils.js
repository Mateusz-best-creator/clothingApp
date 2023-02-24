import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup,
    GoogleAuthProvider 
} from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
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
export const signInWithGoogleRedirect = () => {
    return signInWithRedirect(auth, googleProvider)
}

export const database = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(database, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }

    return userDocRef;
}