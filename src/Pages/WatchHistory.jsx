import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { deleteHistoryAPI, getHistoryAPI } from '../Services/allAPI'

function WatchHistory() {
  const [history, setHistory] = useState([])

  useEffect(() => {
    getHistory()
  }, [])

  const getHistory = async () => {
    const result = await getHistoryAPI()
    if (result.status === 200) {
      setHistory(result.data)
    } else {
      console.log("API failed")
      setHistory([])
    }
  }

  console.log(history);

  const removeVideoHistory=async(id)=>{
    await deleteHistoryAPI(id)
    getHistory()
  }

  return (
    <>
      <div className="container mt-5 mb-3 d-flex justify-content-between">
        <h2>Watch History</h2>
        <Link style={{ textDecoration: "none", color: "black", fontSize: "30px" }} to={"/home"}>
          Back to Home <i className="fa-solid fa-arrow-rotate-left fa-beat-fade"></i>
        </Link>
      </div>

      <div className="container mt-5 mb-3 w-100">
        <table className="table shadow w-100">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Video URL</th>
              <th>Timestamp</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {history.length > 0 ? (
              history.map((video, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{video?.caption}</td>
                  <td>
                    <a href={video?.link} target="_blank" rel="noopener noreferrer">
                      {video?.link}
                    </a>
                  </td>
                  <td>{video?.timeStamp}</td>
                  <td>
                    <Button className="text-danger btn" onClick={()=>removeVideoHistory(video?.id)}>
                      <i className="fa-solid fa-trash"></i>
                    </Button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-danger fw-bolder text-center">
                  Nothing to Display
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default WatchHistory
