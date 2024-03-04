import React from 'react'
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { RiTwitterFill } from "react-icons/ri";
import "../Styles/Home.css"
import logo from "../assets/logo 1.png"

const Footer = () => {
  return (
    <>
        <footer className='footer p-5'>
            <div className="container d-flex justify-content-around align-items-start w-100 h-100 gap-5">
                <div className='text-start d-flex flex-column gap-4'>
                    <img src={logo} width={'150px'} alt="" />
                    <span className='text-white'>Power the future today</span>
                </div>
                <div className='text-white links'>
                    <h4 className='py-3'>Quick Links</h4>
                    <div className='d-flex flex-column w-100 text-start'>
                        <Link to={'/shop'} className='text-white w-100 text-start'>Shop</Link>
                        {/* <Link className='text-white w-100 text-start'>Podcast</Link> */}
                        <Link to={'/cart'} className='text-white w-100 text-start'>Cart</Link>
                        <Link to={'/admin/dashboard'} className='text-white w-100 text-start fw-normal'><small>Admin</small></Link>
                        {/* <Link className='text-white w-100 text-start'>Lorem ipsum</Link>
                        <Link className='text-white w-100 text-start'>Lorem ipsum</Link> */}
                    </div>
                </div>
                <div className='text-white follow'>
                    <h4 className='py-3'>Follow us</h4>
                    <div className=' d-flex flex-column gap-3 w-100 text-start'>
                        <Link to={'https://instagram.com/elixir_bookss'} className='d-flex align-items-center justify-conteent-center text-white'><FaInstagramSquare className='icon h3' />&nbsp; &nbsp; @elixir_bookss</Link>
                        <Link to={'https://instagram.com/theelixir_brand'} className='d-flex align-items-center justify-content-center text-white'><FaInstagramSquare className='icon h3' />&nbsp; &nbsp; @theelixir_brand</Link>
                        {/* <Link className='d-flex align-items-center justify-conteent-center text-white'><RiTwitterFill className='icon h3' /></Link> */}
                    </div>
                </div>
            </div>
            <hr />
            <div className="text-center mt-5">
                <hr className='text-white' />
                <small className='w-100 text-center text-secondary'>© 2023 The elixir brand. All rights reserved.</small>
            </div>
        </footer>
    </>
  )
}

export default Footer