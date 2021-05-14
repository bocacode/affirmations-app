import React, { useContext, useEffect } from 'react'
import firebase from 'firebase'
import { UserAuthContext } from '../../App'

if (firebase.apps.length === 0) {
  firebase.initializeApp({
    apiKey: "AIzaSyC9lr-QBQGv6Jqp61tuuvD_VvZ4rfjYq-4",
    authDomain: "affirm-bc.firebaseapp.com",
    projectId: "affirm-bc",
    storageBucket: "affirm-bc.appspot.com",
    messagingSenderId: "978102774864",
    appId: "1:978102774864:web:f6d1313263276c17317555"
  })
}

function LoginButton() {
  const { user, setUser } = useContext(UserAuthContext)
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")))
  }, [])
  const clickHandler = () => {
    if (user) {
      setUser(null)
      localStorage.removeItem("user")
    } else {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
        .then(res => {
          setUser(res.user)
          localStorage.setItem("user", JSON.stringify(res.user))
        })
        .catch(err => alert(err))
    }
  }
  const style = (user)
    ? {
      backgroundImage: `url("${user.photoURL}")`,
      backgroundSize: "cover"
    }
    : {}
  return (
    <button
      style={style}
      className="login-button"
      onClick={() => clickHandler()}>
      {user ? '' : '#'}
    </button>
  )
}

export default LoginButton