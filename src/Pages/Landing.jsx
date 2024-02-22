import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsWhatsapp, BsFacebook, BsInstagram, BsTwitterX } from 'react-icons/bs'
// import { FaXTwitter } from 'react-icons/fa6'
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { RiTwitterLine, RiMailLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import '../Styles/Landing.css'
import learning from '../assets/Learning-amico.svg'
// import {ReactComponent as Reading} from '../assets/house-bookshelves-animate.svg'
// import learning from '../assets/Learning-amico.svg'
import book from '../assets/book.jpg'
import reading from '../assets/man_with_bible.jpg'
import hood from '../assets/cards.jpg'
import podcast from '../assets/podcast.jpg'
import hood_fv from '../assets/hood_fv.jpg'
import hood_bv from '../assets/hood_bv.jpg'
import brandhood from '../assets/brand hood.jpg'

const Landing = () => {
    // const [rand, setrand] = useState(15)
    // setrand(Math.floor(Math.random(10, 15)))
  return (
    <>
        <div>
            <div className="land d-flex flex-column ">
                <div className="top">
                    <div className="home d-flex align-items-center justify-content-center">
                        <div className="amico w-100 h-100 d-flex justify-content-center">
                            <h1 className='w-75 text-center d-flex flex-column align-items-center justify-content-center'>Power the future today.<Link to={'/shop'} className="btn text-white">Get Started</Link></h1>
                        </div>
                    </div>
                </div>
                <div className="offers text-center bg-white d-flex flex-column justify-content-center align-items-center p-5">
                    <h1 className='my-5'>What we offer</h1>
                    <div className="offer-div d-flex justify-content-around align-items-stretch offers">
                        <div className='offer shadow rounded-2 p-1'>
                            <img src={book} className='w-100 rounded-top-1' alt="" />
                            <div className='div text-start d-flex flex-column justify-content-between'>
                                <div className="p-2">
                                    <h5>Bookstore</h5>
                                    <span>Find soull lifting, edifying, informative and spiritual books here</span>
                                </div>
                                <Link to={'/shop'} className="btn w-100 text-white">View bookstore</Link>
                            </div>
                        </div>
                        <div className='offer shadow rounded-2 p-1'>
                            <img src={podcast} className='w-100 rounded-top-1' alt="" />
                            <div className='div text-start d-flex flex-column justify-content-between'>
                                <div className="p-2">
                                    <h5>Podcast</h5>
                                    <span>On this page we shall be investing in Posterity by learning and engaging the principle of a fulfilled life, transforming men and women with the tool of wisdom in stewarding God's resources and living a Legendary life.</span>
                                </div>
                                <button disabled className="btn w-100 text-white">Coming soon</button>
                            </div>
                        </div>
                        <div className='offer shadow rounded-2 p-1'>
                            <img src={reading} className='w-100 rounded-top-1' alt="" />
                            <div className='div text-start d-flex flex-column justify-content-between'>
                                <div className="p-2">
                                    <h5>Scribing</h5>
                                    <span>Are you in need of a scribbler? <br /> This page is coming soon</span>
                                </div>
                                <button disabled className="btn w-100 text-white">Coming soon</button>
                            </div>
                        </div>
                        {/* <div><Reading /></div> */}
                    </div>
                </div>
                <div className="h-100 about d-flex flex-wrap justify-content-center align-items-center p-5" id='about'>
                        <img src={hood} className='h-100 w-50' alt="" />
                        <div className="w-50 text-start d-flex flex-column gap-3 text-light">
                            <h1 className='text-md-start'>About Us</h1>
                            <span className='text-black w-100'>Elixir is a brand geared towards personal growth and empowerment.

Discover a world of transformation through our skill-building resources, enlightening books, and insightful podcasts. <br /> Elixir is your partner in the journey of unlocking your potential, cultivating meaningful relationships, and achieving financial prosperity. <br />

Join our community and embrace a life of purpose, as we guide you to become a leader in every sphere of your life. <br />

Empower yourself with Elixir. Your journey to a better you starts here.


Your journey to a better you is our is our utmost priority!
</span>
                        </div>
                    {/* </div> */}
                </div>
                <div className="team container offers about p-5 d-flex flex-column justify-content-center align-items-center">
                    <div className="d-flex align-items-center justify-content-around w-100 container gap-5">
                        <hr className='bg-light border-light w-100' /><h1 className='text-center text-light py-5'>MEET THE TEAM</h1><hr className='bg-light border-light w-100' />
                    </div>
                    <div className="offer-div d-flex justify-content-start align-items-stretch offers gap-5 py-3">
                        <div className='offer shadow rounded-2 p-1'>
                            {/* <img src={hood_fv} className='' alt="" /> */}
                            <div className="img img1 rounded-top-1"></div>
                            <div className='text-start h-50 d-flex flex-column justify-content-between'>
                                <div className="p-2 text-center">
                                    <h5 className='fw-bold py-2'>John Doe</h5>
                                    <span>Lorem ipsum dolor</span>
                                </div>
                            </div>
                        </div>
                        <div className='offer shadow rounded-2 p-1'>
                            <div className="img img2 rounded-top-1"></div>
                            {/* <img src={hood_bv} className='w-100 h-75 rounded-top-1' alt="" /> */}
                            <div className='text-start h-50 d-flex flex-column justify-content-between'>
                                <div className="p-2 text-center">
                                    <h5 className='fw-bold py-2'>John Doe</h5>
                                    <span>Lorem ipsum dolor</span>
                                </div>
                                {/* <button className="btn w-100 text-white">Lorem, ipsum.</button> */}
                            </div>
                        </div>
                        <div className='offer shadow rounded-2 p-1'>
                            <div className="img img3 rounded-top-1"></div>
                            {/* <img src={brandhood} className='w-100 h-75 rounded-top-1' alt="" /> */}
                            <div className='text-start h-50 d-flex flex-column justify-content-between'>
                                <div className="p-2 text-center">
                                    <h5 className='fw-bold py-2'>John Doe</h5>
                                    <span>Lorem ipsum dolor</span>
                                </div>
                                {/* <button className="btn w-100 text-white">Lorem, ipsum.</button> */}
                            </div>
                        </div>
                        {/* <div><Reading /></div> */}
                    </div>
                </div>
                {/* <div className='contact py-5' id='contact'>
                    <div className="container px-5">
                        <h1 className='text-center mb-5'>Contact us</h1>
                        <div className='div d-flex align-items-stretch justify-content-around gap-5'>
                            <form className='d-flex flex-column w-50 justify-content-center gap-4'>
                                <textarea className='rounded-3 p-2 px-3' name="" id="" cols="50" rows="5" placeholder='Write what you want to tell us here...'></textarea>
                                <input className='rounded-3 p-2 px-3' type="text" placeholder='Your name' />
                                <button className="btn rounded-3">Send</button>
                            </form>
                            <div className="d-flex flex-column align-items-center justify-content-around w-50 py-2">
                                <p className="w-75 d-flex align-items-center gap-2" ><FaWhatsapp className='h4' /> +234 802 077 9250</p>
                                <p className="w-75 d-flex align-items-center gap-2" ><FaInstagram className='h4' /> test.instagram.com</p>
                                <p className="w-75 d-flex align-items-center gap-2" ><RiTwitterLine className='h4' /> test.twitter.com</p>
                                <p className="w-75 d-flex align-items-center gap-2" ><RiMailLine className='h4' /> test@gmail.com</p>
                                <p className="w-75 d-flex align-items-center gap-2" ><CiLocationOn className='h4' /> test area, test street, test, city, Nigeria</p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </>
  )
}

export default Landing