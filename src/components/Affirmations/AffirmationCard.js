import React from 'react'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Media from 'react-bootstrap/Media'
import Image from 'react-bootstrap/Image'

function AffirmationCard({ affirmation }) {
  return (
    <Col md={true}>
      <Card>
        <Card.Body>
          <Card.Title className="text-center">
            {affirmation.text}</Card.Title>
        </Card.Body>
        <Card.Body>
          <Card.Text>
            <Media>
              <Image
                roundedCircle
                src={affirmation.photoUrl}
                alt={affirmation.displayName}
              />
              <Media.Body>
                <p>{affirmation.displayName}</p>
              </Media.Body>
            </Media>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default AffirmationCard