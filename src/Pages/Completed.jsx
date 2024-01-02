import React from 'react'
import '../Styles/Completed.css'
import { GiCheckMark } from "react-icons/gi";

const Completed = () => {
  return (
    <>
        <div className="complete">
            <div className="bg">
                <h1 className='text-white h-100 w-100 d-flex align-items-center justify-content-center gap-4'>Thank you</h1>
            </div>
            <div className="d-flex flex-column align-items-center justify-content-center gap-4 w-100 py-5">
                <GiCheckMark className='check' />
                <h6>Your order is completed</h6>
                <span>You'll get a feedback from us soon</span>
                <div className="d-flex gap-3">
                    <button className="btn">Continue shopping</button>
                    <button className="btn">Go to Home</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Completed