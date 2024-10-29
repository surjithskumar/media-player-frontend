import React from 'react'
import { Button, Card } from 'react-bootstrap'

function VideoCard() {
  return (
    <>
      
      <Card style={{ width: '18rem', marginBottom:'20px' }}>
      <Card.Img variant="top" width={"100%"} height={"300px"}  src="https://upload.wikimedia.org/wikipedia/en/3/39/Munjya_2024.jpg" />
      <Card.Body>
       <div className='d-flex justify-content-between'>
       <Card.Title>Card Title</Card.Title>
       <Button className="text-danger btn"><i class="fa-solid fa-trash"></i></Button>
       </div>
      </Card.Body>
    </Card>

    </>
  )
}

export default VideoCard
