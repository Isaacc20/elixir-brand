import React from 'react'
import "../../Styles/Admin.css"
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const back = ()=>{
        navigate(-1)
    }
  return (
    <>
        <div className="login">
            <div className="div w-100 h-100 d-flex align-items-center justify-content-center">
                <div className="container d-flex flex-column align-items-center justify-content-center">
                    <small className='w-50 text-white'>NOTE: This page is only for admins of this website <br />Kindly <Link onClick={back}>Go back</Link> if you missed your way</small>
                    <form action="" className='d-flex flex-column gap-3 p-5 form-control shadow w-50 bg-white'>
                        <h5>Admin Login</h5>
                        <label htmlFor="id">Your id
                            <input type="text" className="form-control" />
                        </label>
                        <label htmlFor="id">Your password
                            <input type="password" className="form-control" />
                        </label>
                        <Link className="text-decoration-none text-center form-control">Continue</Link>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login