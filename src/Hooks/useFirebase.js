import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";
import axios from 'axios'
import swal from 'sweetalert'

import initializeFirebaseApp from "../Pages/Login/Firebase/Firebase.init"


// inititalize firebase app 
initializeFirebaseApp()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('')

    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();


    //  Create New User with email & Password
    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('')
                const newUser = { email, displayName: name }
                setUser(newUser)

                // save user to the database
                saveUser(email, name, 'post')

                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                history.push('/')
                swal({
                    title: "Good job!",
                    text: "Successfully Created an Account!",
                    icon: "success",
                    buttons: false,
                    timer: 1500,
                });
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    // login User Wih email & password
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false))
    }


    // Google pop Up sign 

    const signInWithGoogle = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)
                const destination = location?.state?.from || '/'
                history.replace(destination)

                // save user to the database
                saveUser(result.user.email, result.user.displayName, 'put')
                setAuthError('')
            }).catch((error) => {

                setAuthError(error.message)

            }).finally(() => setIsLoading(false))
    }


    // observer user state change 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken);
                    })
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [auth])


    // check admin or normal user 
    useEffect(() => {
        const url = `http://localhost:5000/users/${user.email}`
        axios.get(url)
            .then(res => setAdmin(res.data.admin))
    }, [user.email])

    const logout = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        }).finally(() => setIsLoading(false))
    }


    // save user information into our database
    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        if (method === 'post') {
            axios.post('http://localhost:5000/users', user)
                .then((res) => {
                    if (res.data.insertedId) {
                        swal({
                            title: "Good job!",
                            text: "Successfully Created an Account!",
                            icon: "success",
                            buttons: false,
                            timer: 1500,
                        });
                    }
                })
        }
        if (method === 'put') {
            axios.put('http://localhost:5000/users', user)
                .then((res) => {
                    if (res.data.upsertedId) {
                        swal({
                            title: "Good job!",
                            text: "Successfully Created an Account!",
                            icon: "success",
                            buttons: false,
                            timer: 1500,
                        });
                    }
                })
        }
    }




    return {
        user,
        admin,
        token,
        registerUser,
        loginUser,
        logout,
        signInWithGoogle,
        isLoading,
        authError
    }

}
export default useFirebase