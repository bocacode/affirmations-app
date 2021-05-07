import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row'
import CardColumns from 'react-bootstrap/CardColumns'
import Spinner from 'react-bootstrap/Spinner'
import AffirmationCard from './AffirmationCard'
import 'bootstrap/dist/css/bootstrap.min.css'
import './affirmation.css'

function Affirmations() {
  const [affirmationsList, setAffirmationsList] = useState(null)
  useEffect(() => {
    fetch('https://affirm-bc-api.web.app/affirmations')
      .then(response => response.json())
      .then(data => setAffirmationsList(data))
      .catch(err => console.log({ err }))
  }, [])
  return (
    <CardColumns>
      <Row>
        {!affirmationsList ? (<Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>) : affirmationsList.map(one => {
          return <AffirmationCard affirmation={one} />
        })}
      </Row>
    </CardColumns>
  )
}

export default Affirmations