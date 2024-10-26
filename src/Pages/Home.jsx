import React from 'react'
import Add from '../Components/Add'
import { Link } from 'react-router-dom'
import View from '../Components/View'
import Category from '../Components/Category'

function Home() {
  return (
    <>
      
      <div className="container mt-5 d-flex justify-content-between mb-3">
        <div className="add-videos">
          <Add/>
        </div>
        <Link to={'/watch-history'} style={{textDecoration:"none"}} className='fw-bolder fs-2 text-primary'>Watch-History <i class='fa-solid fa-arrow-right-to-bracket'></i></Link>
      </div>

      <div className="container-fluid mt5 w-100 row">
        <div className="col-lg-9 all-videos">
          <View/>
        </div>
        <div className="col-lg-3 all-category">
          <Category/>
        </div>
      </div>


    </>
  )
}

export default Home
