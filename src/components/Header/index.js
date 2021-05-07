import React, { useContext } from 'react'
import LoginButton from './LoginButton'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { UserAuthContext } from '../../App'
import './header.css'

function Header() {
  const { user } = useContext(UserAuthContext)
  return (
    <Navbar className="justify-content-between">
      <Navbar.Brand>Affirmations</Navbar.Brand>
      <Nav>
        {user && <button className="add-button">+</button>}&nbsp;
        <LoginButton />
      </Nav>
    </Navbar>
  )
}

export default Header