import { useState, createContext } from 'react'
import Header from './components/Header'
import Affirmations from './components/Affirmations'
import Footer from './components/Footer'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export const UserAuthContext = createContext(null)

export const AffirmationsContext = createContext(null)

function App() {
  const [user, setUser] = useState(null)
  const [affirmationsList, setAffirmationsList] = useState(null)
  return (
    <AffirmationsContext.Provider value={{ affirmationsList, setAffirmationsList }}>
      <UserAuthContext.Provider value={{ user, setUser }}>
        <Header />
        <Container>
          <Affirmations />
        </Container>
        <Footer />
      </UserAuthContext.Provider>
    </AffirmationsContext.Provider>
  )
}

export default App
