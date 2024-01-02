import React from 'react'
import '../Styles/Home.css'
import { Link } from "react-router-dom";
import error from '../assets/404 Error-pana (1).svg'

const NotFound = () => {
  return (
    <>
        <div className='w-100 h-100 d-flex-flex-column align-items-center justify-content-center text-center notfound'>
            <img className='w-50' src={error} alt="" />
            <h5>The page you're looking for does not exist</h5>
            <div className="d-flex align-items-center justify-content-center gap-3 py-3 w-100 text-center">
                <Link className='btn log' to={'/'}>Go to home</Link>
                <Link to={'/shop'} className='btn log'>Go to shop</Link>
            </div>
        </div>
    </>
  )
}

export default NotFound