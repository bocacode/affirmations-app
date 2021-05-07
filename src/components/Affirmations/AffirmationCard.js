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
              <Media.Body>
                {affirmation.displayName}
              </Media.Body>
              <Image
                roundedCircle
                width="36"
                height="36"
                src={affirmation.photoUrl}
                alt={affirmation.displayName}
              />
            </Media>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default AffirmationCard