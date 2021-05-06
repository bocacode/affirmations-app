import React from 'react'
import Card from 'react-bootstrap/Card'
import Image from 'react-bootstrap/Image'

function AffirmationCard({ affirmation }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className="text-center">
          {affirmation.text}</Card.Title>
        <Card.Text className="align-right">
          {affirmation.displayName}
          <Image src={affirmation.photoUrl} roundedCircle />
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default AffirmationCard