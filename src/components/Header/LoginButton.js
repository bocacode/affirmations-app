import React, { useState } from 'react'
import firebase from 'firebase'

firebase.initializeApp({
  apiKey: "AIzaSyC9lr-QBQGv6Jqp61tuuvD_VvZ4rfjYq-4",
  authDomain: "affirm-bc.firebaseapp.com",
  projectId: "affirm-bc",
  storageBucket: "affirm-bc.appspot.com",
  messagingSenderId: "978102774864",
  appId: "1:978102774864:web:f6d1313263276c17317555"
})

function LoginButton() {
  const [user, setUser] = useState(null)
  const clickHandler = () => {
    if(user) {
      setUser(null)
    } else {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
        .then(res => setUser(res.user))
        .catch(err => alert(err))
    }
  }
  return (
    <button onClick={() => clickHandler()}>#</button>
  )
}

export default LoginButton