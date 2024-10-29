import React from 'react'
import { Button, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <>
    {/* head */}
      <Row>
        <Col></Col>

        <Col lg={5}>
          <h1 style={{ color: "blueviolet", fontSize: "40px" }}>
            Welcome to <span className='text-warning'>Media-Player</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam cumque voluptatum minima fugit quos illo facere in a incidunt sit. Dolorum cum autem quidem quaerat neque quam expedita minus temporibus?
          </p>
          <Link style={{textDecoration:"none"}} to={'/home'} className="btn btn-info">Get Started</Link>
        </Col>

        <Col lg={5}>
          <img
            src="https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif"
            alt="Media player animation"
          />
        </Col>

        <Col></Col>
        
      </Row>

      {/*Card Section */}
      <div className="container mt-3 mb-4 flex-column justify-content-center align-items-center flex-column w-100">
        <h5 className='text-center text-warnin'>Features</h5>
        <div className='card mb-5 mt-5 d-flex align-items-center justify-content-between w-100'>

          <Card style={{ width: '18rem' }} className='bg-info'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Managing Videos</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className='bg-info'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Categorized Video</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className='bg-info'>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Watch History</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>

        </div>
      </div>

      {/* details section*/}
      <div className="container border d-flex align-items-center justify-content-center mt-5 p-5">
        <div className="col-lg-5">
          <h4 className='text-warning fw-bolder' >Simple,Powerful & Fast</h4>
          <h6 className='m-3'><span className='text-warning fw-bolder'>Play Everything</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit voluptatem alias accusantium deleniti voluptas eum sapiente a reprehenderit fugiat unde illum quam, maxime quibusdam non quisquam porro, exercitationem sed enim!</h6>

          <h6 className='m-3'><span className='text-warning fw-bolder'>Categorize Video</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit voluptatem alias accusantium deleniti voluptas eum sapiente a reprehenderit fugiat unde illum quam, maxime quibusdam non quisquam porro, exercitationem sed enim!</h6>

          <h6 className='m-3'><span className='text-warning fw-bolder'>Managing Videos</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit voluptatem alias accusantium deleniti voluptas eum sapiente a reprehenderit fugiat unde illum quam, maxime quibusdam non quisquam porro, exercitationem sed enim!</h6>

        </div>

        <div className='col-lg-5 ms-2'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/exkJKrAVzAc?si=hwtDrMj_-LNiJiGb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

      </div>

    </>
  )
}

export default LandingPage
