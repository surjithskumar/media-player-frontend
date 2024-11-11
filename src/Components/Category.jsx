import React, { useEffect, useState } from 'react'
import { Button, Col, FloatingLabel, Form, Modal, Row } from 'react-bootstrap';
import { addCategoryAPI, deleteCategoryAPI, getAVideoAPI, getCategoryAPI, updateCategoryAPI } from '../Services/allAPI';
import VideoCard from './VideoCard';

function Category({dropVideoResponse}) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const[categoryName,setCategoryName]=useState("")
  const[allCategories,setAllCategories]=useState([])

  const handleAdd = async()=>{
    if(categoryName){
      const result = await addCategoryAPI({categoryName,allVideos:[]})

      if(result.status>=200 && result.status<300){
        handleClose()
        setCategoryName("")

        //add without refreshing
        getCategories()
      }else{
        console.log(result.message);
      }
    }else{
      alert("Please fill the missing fields")
    }
  }

  const removeCategory=async(id)=>{
    await deleteCategoryAPI(id)
    getCategories()
  }

  const getCategories=async()=>{
    const {data}=await getCategoryAPI()
    setAllCategories(data)
  }
  //console.log(allCategories);

  const dragOver=(e)=>{
    console.log("Video drag over the category");
    e.preventDefault()
  }

  const videoDrop=async(e,categoryId)=>{
    const videoId = e.dataTransfer.getData("videoId")
    console.log(videoId,"dropped into category id:",categoryId);

    const {data} = await getAVideoAPI(videoId)
    console.log("Video data fetched:",data);

    const selectedcategory=allCategories.find(item=>item.id==categoryId)
    selectedcategory.allVideos.push(data)
    console.log(selectedcategory);

    await updateCategoryAPI(categoryId,selectedcategory)
    getCategories()
  }

  useEffect(()=>{
    getCategories()
  },[dropVideoResponse])

  const videDragStarted=(e,videoId,categoryId)=>{
    let dataShare={videoId,categoryId}
    e.dataTransfer.setData("data",JSON.stringify(dataShare))
  }


  return (
    <>
      
      <div className='d-flex'>
      <Button onClick={handleShow} className="btn btn-primary">Add Category</Button>
      </div>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>

              <FloatingLabel controlId="floatingInput1" label="Category Name" className='mb-3'>
              <Form.Control type="text" placeholder="enter a category Name" onChange={e=>setCategoryName(e.target.value)}/>
            </FloatingLabel>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>

      {
        allCategories?.length>0?allCategories.map(Category=>(
          <div className="border border-3 m-3 p-3" droppable='true' onDragOver={e=>dragOver(e)} onDrop={e=>videoDrop(e,Category?.id)}>
            <div className="d-flex justify-content-between al">
              <h3>{Category?.categoryName}</h3>
              <button className='text-danger btn' onClick={()=>removeCategory(Category?.id)}><i className='fa-solid fa-trash'></i></button>
            </div>

            <Row>
              {
                Category?.allVideos.length>0?Category?.allVideos.map(card=>(
                  <Col sm={12} md={6} lg={4} className='mb-3 mt-2 p-2' draggable onDragStart={e=>videDragStarted(e,card.id,Category.id) }>
                  <VideoCard video={card} insideCategory={true} />
                  </Col>
                )):null
              }
            </Row>

          </div>
        )):<p className='text-danger'>No categories created</p>
      }

    </>
  )
}

export default Category
