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
            <div className="container d-flex justify-content-around align-items-start w-100 h-100">
                <div className='text-start'>
                    <img src={logo} width={'150px'} alt="" />
                </div>
                <div className='text-white '>
                    <h4 className='py-3'>Features</h4>
                    <div className='text-start'>
                        <p>• Lorem, ipsum.</p>
                        <p>• Lorem, ipsum.</p>
                        <p>• Lorem, ipsum.</p>
                        <p>• Lorem, ipsum.</p>
                        <p>• Lorem, ipsum.</p>
                    </div>
                </div>
                <div className='text-white links'>
                    <h4 className='py-3'>Quick Links</h4>
                    <div className='d-flex flex-column w-100 text-start'>
                        <Link className='text-white w-100 text-start'>Shop</Link>
                        <Link className='text-white w-100 text-start'>Podcast</Link>
                        <Link className='text-white w-100 text-start'>Lorem ipsum</Link>
                        <Link className='text-white w-100 text-start'>Lorem ipsum</Link>
                        <Link className='text-white w-100 text-start'>Lorem ipsum</Link>
                    </div>
                </div>
                <div className='text-white follow'>
                    <h4 className='py-3'>Follow us</h4>
                    <div className=' d-flex gap-3 w-100 text-start'>
                        <Link className='d-flex align-items-center justify-conteent-center text-white'><FaFacebook className='icon h3' /></Link>
                        <Link className='d-flex align-items-center justify-conteent-center text-white'><FaInstagramSquare className='icon h3' /></Link>
                        <Link className='d-flex align-items-center justify-conteent-center text-white'><RiTwitterFill className='icon h3' /></Link>
                    </div>
                </div>
            </div>
            <div className="text-center mt-5">
                <span className='w-100 text-center text-white'>© 2023 The elixir brand. All rights reserved.</span>
            </div>
        </footer>
    </>
  )
}

export default Footer