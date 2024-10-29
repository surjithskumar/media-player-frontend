import React from 'react'
import { Link } from 'react-router-dom'

function WatchHistory() {
  return (
    <>
      
      <div className="container mt-5 mb-3 d-flex justify-content-between">
        <h2>Watch-history</h2>
        <Link style={{textDecoration:"none",color:"black",fontSize:"30px"}} to={"/home"}>Back to Home<i className="fa-solid fa-arrow-rotate-left fa-beat-fade"></i>
        </Link>
      </div>

    </>
  )
}

export default WatchHistory