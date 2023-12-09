import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import logo from '../assets/logo_1.png'
import {FaBell, FaSearch, FaUser} from 'react-icons/fa'
import Themes from './Toggles/Themes'

const Topnav = () => {
  return (
    <div className='topnav d-flex justify-content-between align-items-stretch px-5 shadow-sm'>
        {/* <img src={require("../images/logo.jpg")} width={'100px'} alt="" /> */}
        <Link to={'/'} className='my-2'><img src={logo} width={'90px'} alt="LOGO" /></Link>
        <div className='d-flex align-items-center gap-2'>
            <div className="search rounded-pill d-flex align-items-center">
                <input className='h-100 px-3 py-1 text-white' type="text" name="" id="" placeholder="Search..." />
                <button className='bg-transparent text-white py-1 px-3'><FaSearch /></button>
            </div>
            <Themes />
        </div>
        <div className='d-flex align-items-stretch gap-3'>
            <div className='category d-grid justify-content-center align-items-center'>
                <button className='btn dropdown-toggle text-white'>Categories</button>
                <div className="position-relative">
                    <div className='d-none bg-white category-dropdown rounded-bottom-3 pb-4 gap-4 py-2 text-start'>
                        <div className="author d-flex align-items-start justify-content-between">
                            <button className="btn text-start px-2 d-flex justify-content-between w-100">Authors <span>▸</span></button>
                            <div className="position-relative author-dropside">
                                <div className="d-none author-dropdown rounded-0 pb-4 py-1 gap-2 rounded-end-3 rounded-bottom-3">
                                    <Link className='text-decoration-none text-black px-3 py-1 w-100'>Kenneth E. Hagin</Link>
                                    <Link className='text-decoration-none text-black px-3 py-1 w-100'>Kathryn Kumar</Link>
                                    <Link className='text-decoration-none text-black px-3 py-1 w-100'>Reignhard Bonkeyh</Link>
                                    <Link className='text-decoration-none text-black px-3 py-1 w-100'>E.A Adeboye</Link>
                                    <Link className='text-decoration-none text-black px-3 py-1 w-100'>W.F Kumuyi</Link>
                                    <Link className='text-decoration-none text-black px-3 py-1 w-100'>Bishop Oyedepo</Link>
                                </div>
                            </div>
                        </div>
                        <div className="author d-flex align-items-start justify-content-between">
                            <button className="btn text-start px-2 d-flex justify-content-between w-100">Topics <span>▸</span></button>
                            <div className="position-relative author-dropside">
                                <div className="d-none author-dropdown rounded-0 pb-4 py-1 gap-2 rounded-end-3 rounded-bottom-3">
                                    <Link className='text-decoration-none text-black px-3 py-1 w-100'>Spiritual Growth</Link>
                                    <Link className='text-decoration-none text-black px-3 py-1 w-100'>Fasting</Link>
                                    <Link className='text-decoration-none text-black px-3 py-1 w-100'>Relationship</Link>
                                    <Link className='text-decoration-none text-black px-3 py-1 w-100'>Communication</Link>
                                    <Link className='text-decoration-none text-black px-3 py-1 w-100'>Revival</Link>
                                    <Link className='text-decoration-none text-black px-3 py-1 w-100'>Holy Spirit</Link>
                                </div>
                            </div>
                        </div>
                        <Link className="btn text-start d-flex justify-content-start px-3">Stationeries</Link>
                    </div>
                </div>
            </div>
            <Link className="btn text-white text-start px-3 d-flex align-items-center justify-content-between small">ABOUT US</Link>
            <Link className="btn text-white text-start px-3 d-flex align-items-center justify-content-between">Cart</Link>
            <Link className="btn text-white text-start px-3 d-flex align-items-center justify-content-between"><FaBell /></Link>
            <Link className="btn text-white text-start px-3 d-flex align-items-center justify-content-between"><FaUser /></Link>
            {/* <Link>About us</Link> */}
        </div>
    </div>
  )
}

export default Topnav