// import axios from "axios";
// const baseUrl = 'http://34.89.166.252/api/';

// const axiosInstance = axios.create({
//     baseURL: baseUrl,
//     timeout: 5000,
//     headers: {
//         Authorization: localStorage.getItem('access_token')
//             ? 'JWT ' + localStorage.getItem('access_token')
//             : null,
//         'Content-Type': 'application/json',
//         accept: 'application/json',
//     },

// });
// import React, { useContext, useState, useEffect } from "react"
// import { auth } from "../firebase"

// const AuthContext = React.createContext()

// export function useAuth() {
//     return useContext(AuthContext)
// }

// export function AuthProvider({ children }) {
//     const [currentUser, setCurrentUser] = useState()
//     const [loading, setLoading] = useState(true)

//     function signup(email, password, password2) {
//         return auth.createUserWithEmailAndPassword(email, password, password2)
//     }

//     function login(email, password) {
//         return auth.signInWithEmailAndPassword(email, password)
//     }

//     function logout() {
//         return auth.signOut()
//     }

//     function resetPassword(email) {
//         return auth.sendPasswordResetEmail(email)
//     }

//     function updateEmail(email) {
//         return currentUser.updateEmail(email)
//     }

//     function updatePassword(password) {
//         return currentUser.updatePassword(password)
//     }

//     useEffect(() => {
//         const unsubscribe = auth.onAuthStateChanged(user => {
//             setCurrentUser(user)
//             setLoading(false)
//         })

//         return unsubscribe
//     }, [])

//     const value = {
//         currentUser,
//         login,
//         signup,
//         logout,
//         resetPassword,
//         updateEmail,
//         updatePassword
//     }

//     return (
//         <AuthContext.Provider value={value}>
//             {!loading && children}
//         </AuthContext.Provider>
//     )
// }