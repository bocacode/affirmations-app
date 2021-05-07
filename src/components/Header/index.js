import React, { useContext, useState } from 'react'
import LoginButton from './LoginButton'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import PostNew from '../PostNew'
import { UserAuthContext } from '../../App'
import './header.css'

function Header() {
  const { user } = useContext(UserAuthContext)
  const [showModal, setShowModal] = useState(false)
  return (
    <>
      <Navbar className="justify-content-between">
        <Navbar.Brand>Affirmations</Navbar.Brand>
        <Nav>
          {user &&
            <button
              className="add-button"
              onClick={() => setShowModal(true)}>
              +
            </button>
          }&nbsp;
        <LoginButton />
        </Nav>
      </Navbar>
      <PostNew show={showModal} onHide={() => setShowModal(false)} />
    </>
  )
}

export default Header