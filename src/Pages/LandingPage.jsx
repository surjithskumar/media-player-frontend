import React from 'react'
import { Button, Row, Col } from 'react-bootstrap'

function LandingPage() {
  return (
    <>
      <Row>
        <Col></Col>

        <Col lg={5}>
          <h1 style={{ color: "blueviolet", fontSize: "40px" }}>
            Welcome to <span className='text-warning'>Media-Player</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam cumque voluptatum minima fugit quos illo facere in a incidunt sit. Dolorum cum autem quidem quaerat neque quam expedita minus temporibus?
          </p>
          <Button className="btn btn-info">Get Started</Button>
        </Col>

        <Col lg={5}>
          <img
            src="https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif"
            alt="Media player animation"
          />
        </Col>

        <Col></Col>
      </Row>
    </>
  )
}

export default LandingPage
