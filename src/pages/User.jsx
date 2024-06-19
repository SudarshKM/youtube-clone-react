import React from 'react'
import { Link } from 'react-router-dom'

function User() {
  return (
    <div className='w-100 d-flex align-items-center justify-content-center flex-column' style={{height:"100vh",overflow: "hidden",color:"whitesmoke", backgroundColor: "rgba(18, 18, 18, 0.984)" }}> 
    <h3>Sudarsh K M : Logged In</h3>
    <p>Syncing..</p>
    <Link to={"/"} style={{textDecoration:"none" , color:"white"}} className='btn btn-danger'>Go Home</Link>
    </div>
  )
}

export default User