import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth"
import initializeAuthentication from "../Firebase/firebase.init";


const useFirebase = () => {
    initializeAuthentication();

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);


    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();



    const signInUsingGoogle = () => {

        return signInWithPopup(auth, googleProvider)

    }


    // Sign out/log out
    const signOutHandle = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .finally(() => setIsLoading(false))
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }

            setIsLoading(false)
        })
    }, [auth])

    return {
        user,
        isLoading,
        signInUsingGoogle,
        signOutHandle,
    }
}

export default useFirebase;