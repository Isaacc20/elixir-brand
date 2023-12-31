import React from 'react'
import '../Styles/Home.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import logo1 from '../assets/logo 1.png'
import { BsCart, BsCart2 } from 'react-icons/bs'
import {FaBars} from 'react-icons/fa6'
// import Themes from './Toggles/Themes'

const Topnav = () => {
  return (
    <div className='topnav d-flex justify-content-between align-items-stretch px-5 py-2 shadow-sm'>
        {/* <img src={require("../images/logo.jpg")} width={'100px'} alt="" /> */}
        <Link to={'/'} className='my-2 logo'><img src={logo} width={'90px'} alt="LOGO" /></Link>
        {/* <div className='d-flex align-items-center gap-2'>
            <div className="search rounded-pill d-flex align-items-center">
                <input className='h-100 px-3 py-1 text-white' type="text" name="" id="" placeholder="Search..." />
                <button className='bg-transparent text-white py-1 px-3'><FaSearch /></button>
            </div>
            <Themes />
        </div> */}
        <div className="dropdown d-flex align-items-end justify-content-end">
            <button className="btn menu mx-5"><FaBars /></button>
            <div className="drop">
                <button className="btn menu cancel d-none mx-5">⨉</button>
                <div className='div d-flex align-items-stretch gap-3'>
                    <img className='d-none' src={logo1} width={'90px'} alt="LOGO" />
                    <Link to={'/'} className="rounded-1 text-decoration-none text-black px-3 py-2 d-flex align-items-center justify-content-between small">Home</Link>
                    <Link to={'/shop'} className="rounded-1 text-decoration-none text-black px-3 py-2 d-flex align-items-center justify-content-between small">Shop</Link>
                    <a href='/#about' className="rounded-1 text-decoration-none text-black px-3 py-2 d-flex align-items-center justify-content-between small">ABOUT</a>
                    <a href='/#contact' className="rounded-1 text-decoration-none text-black px-3 py-2 d-flex align-items-center justify-content-between small">Contact us</a>
                    <Link to={'/cart'} className="rounded-1 text-decoration-none text-black px-3 py-2 d-flex align-items-center justify-content-between gap-2"><BsCart2 /></Link>
                    {/* <Link className="btn text-start px-3 d-flex align-items-center justify-content-between log text-white">Log in</Link>
                    <Link className="btn text-start px-3 d-flex align-items-center justify-content-between sign">Sign up</Link> */}
                    {/* <Link className="btn text-white text-start px-3 d-flex align-items-center justify-content-between"><FaBell /></Link>
                    <Link className="btn text-white text-start px-3 d-flex align-items-center justify-content-between"><FaUser /></Link> */}
                    {/* <Link>About us</Link> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topnav