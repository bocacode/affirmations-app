import React from 'react'
import LoginButton from './LoginButton'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Header() {
  return (
    <Navbar className="justify-content-between">
      <Navbar.Brand>Affirmations</Navbar.Brand>
      <Nav>
        <Nav.Link>+</Nav.Link>
        <Nav.Link><LoginButton /></Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Header