import React from 'react'
import { Col, Row } from 'react-bootstrap'
import VideoCard from './VideoCard' // Import VideoCard component

function View() {
  return (
    <>
     <Row>

      <Col sm={12} md={6} lg={4}>
      <VideoCard/>
      </Col>
      <Col sm={12} md={6} lg={4}>
      <VideoCard/>
      </Col>
      <Col sm={12} md={6} lg={4}>
      <VideoCard/>
      </Col>
      <Col sm={12} md={6} lg={4}>
      <VideoCard/>
      </Col>

      </Row> 
    </>
  )
}

export default View
