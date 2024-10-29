import React, { useState } from 'react'
import { Button, FloatingLabel, Form, Modal } from 'react-bootstrap';

function Add() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>

      <div className='d-flex'>
        <h2>Upload Videos</h2>
        <button onClick={handleShow} className='btn'><i class="fa-solid fa-upload fa-beat fs-3"></i></button>
      </div>

      <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      >
       <Modal.Header closeButton>
         <Modal.Title>Video Details</Modal.Title>
       </Modal.Header>
       <Modal.Body> 

        <Form>

        <FloatingLabel controlId="floatingInput1" label="Video Id" className='mb-3'>
          <Form.Control type="text" placeholder="Video Id" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput2" label="Video Title" className='mb-3'>
          <Form.Control type="text" placeholder="Video Title" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput3" label="Image URL" className='mb-3'>
          <Form.Control type="text" placeholder="Image URL" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingInput4" label="Video URL" className='mb-3'>
          <Form.Control type="text" placeholder="Video URL" />
        </FloatingLabel>

        </Form>

       </Modal.Body>
       <Modal.Footer>
         <Button variant="warning" onClick={handleClose}>Cancel</Button>
         <Button variant="primary">Upload</Button>
       </Modal.Footer>
      </Modal>
    </>
    
  )
}

export default Add