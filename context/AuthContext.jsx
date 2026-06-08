'use client'

import { auth, db } from "@/firebase"
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, confirmPasswordReset } from "firebase/auth"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider(props) {
    const { children } = props
    const router = useRouter()

    const [currentUser, setCurrentUser] = useState(null)
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true)

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email)
    }

    function confirmReset(oobCode, newPassword) {
        return confirmPasswordReset(auth, oobCode, newPassword)
    }

    async function logout() {
        setCurrentUser(null)
        setUserData(null)
        await signOut(auth)
        router.replace('/')
    }

    async function saveToFirebase(data) {
        try {
            const userRef = doc(db, 'users', currentUser.uid)
            await setDoc(userRef, { subscriptions: data }, { merge: true })
        } catch (err) {
            console.log(err.message)
        }
    }

    async function handleAddSubscription(newSubscription) {
        if (userData.subscriptions.length > 30) { return }

        const newSubscriptions = [...userData.subscriptions, newSubscription]
        setUserData({ subscriptions: newSubscriptions })
        await saveToFirebase(newSubscriptions)
    }

    async function handleDeleteSubscription(index) {
        const newSubscriptions = userData.subscriptions.filter((val, valIndex) => {
            return valIndex !== index
        })
        setUserData({ subscriptions: newSubscriptions })
        await saveToFirebase(newSubscriptions)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            try {
                setCurrentUser(user)

                if (!user) {
                    setUserData(null)
                    setLoading(false)
                    return
                }

                setLoading(true)

                const docRef = doc(db, 'users', user.uid)
                const docSnap = await getDoc(docRef)

                let firebaseData = { subscriptions: [] }

                if (docSnap.exists()) {
                    firebaseData = docSnap.data()
                }

                setUserData(firebaseData)
                setLoading(false)

            } catch (err) {
                console.log(err.message)
                setUserData({ subscriptions: [] })
                setLoading(false)
            }
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser, userData, loading, signup, login, logout, resetPassword, confirmReset, handleAddSubscription, handleDeleteSubscription
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
