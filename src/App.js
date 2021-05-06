import Header from './components/Header'
import Affirmations from './components/Affirmations'
import Footer from './components/Footer'
import Container from 'react-bootstrap/Container'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Header />
      <Container>
        <Affirmations />
      </Container>
      <Footer />
    </>
  )
}

export default App
