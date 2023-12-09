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
import book from '../assets/flipped_open_book.jpg'
import reading from '../assets/man_with_bible.jpg'
import hood from '../assets/brand_hood-removebg-preview.png'
import podcast from '../assets/podcast.jpg'

const Landing = () => {
    // const [rand, setrand] = useState(15)
    // setrand(Math.floor(Math.random(10, 15)))
  return (
    <>
        <div>
            <div className="land d-flex flex-column ">
                <div className="top">
                    <div className="home d-flex align-items-center justify-content-between">
                        <h1 className='px-5 w-50 text-start'>Lorem ipsum <br /> dolor sit <br /> amet consectetur <br /> adipisicing. <br /><button className="btn text-white">Lorem ipsum</button></h1>
                        <div className='amico w-75 h-100'>
                            {/* <img src={learning} className='w-75' alt="" /> */}
                            <img src={learning} className='w-75' alt="" />
                        </div>
                    </div>
                </div>
                <div className="offers text-center py-5">
                    <h1 className='my-5'>What we offer</h1>
                    <div className="offer-div d-flex justify-content-around align-items-stretch offers">
                        <div className='offer rounded-2 p-1'>
                            <img src={book} className='w-100 h-50 rounded-top-1' alt="" />
                            <div className='text-start h-50 d-flex flex-column justify-content-between'>
                                <div className="p-2">
                                    <h5>Lorem, ipsum dolor.</h5>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus eveniet, aut vel modi eaque voluptates qui quaerat mollitia fugit?</span>
                                </div>
                                <button className="btn w-100 text-white">Lorem, ipsum.</button>
                            </div>
                        </div>
                        <div className='offer rounded-2 p-1'>
                            <img src={podcast} className='w-100 h-50 rounded-top-1' alt="" />
                            <div className='text-start h-50 d-flex flex-column justify-content-between'>
                                <div className="p-2">
                                    <h5>Lorem, ipsum dolor.</h5>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus eveniet, aut vel modi eaque voluptates qui quaerat mollitia fugit?</span>
                                </div>
                                <button className="btn w-100 text-white">Lorem, ipsum.</button>
                            </div>
                        </div>
                        <div className='offer rounded-2 p-1'>
                            <img src={reading} className='w-100 h-50 rounded-top-1' alt="" />
                            <div className='text-start h-50 d-flex flex-column justify-content-between'>
                                <div className="p-2">
                                    <h5>Lorem, ipsum dolor.</h5>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus eveniet, aut vel modi eaque voluptates qui quaerat mollitia fugit?</span>
                                </div>
                                <button className="btn w-100 text-white">Lorem, ipsum.</button>
                            </div>
                        </div>
                        {/* <div><Reading /></div> */}
                    </div>
                </div>
                <div className="about-div" id='about'>
                    <div className="about d-flex align-items-center">
                        <div className="text-start p-5 d-flex flex-column gap-5 mx-5 text-light">
                            <h1 className='text-center'>ABOUT US</h1>
                            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nisi similique excepturi quia? Quibusdam iure alias eveniet commodi itaque laborum quasi provident maxime officia! Soluta corporis quae quo nostrum dignissimos, esse aliquid ipsam voluptatibus consectetur iusto enim recusandae laudantium eveniet pariatur rerum sapiente obcaecati fugit id voluptate quos doloremque magnam!</h5>
                        </div>
                        <div className='h-100 w-50 img'>
                            <img src={hood} className='h-100' alt="" />
                        </div>
                    </div>
                </div>
                {/* <div className="first">
                    <div className='inner h-100 d-flex align-items-center'>
                        <div className="container w-50 float-start px-5 mx-5 d-flex flex-column gap-5">
                            <h1 className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, perspiciatis!</h1>
                        </div>
                    </div>
                </div> */}
                <div className="team offers about py-5">
                    <div className="d-flex align-items-center justify-content-around w-100 container gap-5">
                        <hr className='bg-light border-light w-100' /><h1 className='text-center text-light py-5'>MEET THE TEAM</h1><hr className='bg-light border-light w-100' />
                    </div>
                    {/* <div className="d-flex">
                        <div className="d-flex-flex-column p-1">

                        </div>
                    </div> */}
                    <div className="offer-div d-flex justify-content-around align-items-stretch offers">
                        <div className='offer rounded-2 p-1'>
                            <img src={book} className='w-100 h-75 rounded-top-1' alt="" />
                            <div className='text-start h-50 d-flex flex-column justify-content-between'>
                                <div className="p-2 text-light text-center">
                                    <h5 className='text-light fw-bold py-2'>John Doe</h5>
                                    <span>Lorem ipsum dolor</span>
                                </div>
                                {/* <button className="btn w-100 text-white">Lorem, ipsum.</button> */}
                            </div>
                        </div>
                        <div className='offer rounded-2 p-1'>
                            <img src={podcast} className='w-100 h-75 rounded-top-1' alt="" />
                            <div className='text-start h-50 d-flex flex-column justify-content-between'>
                                <div className="p-2 text-light text-center">
                                    <h5 className='text-light fw-bold py-2'>John Doe</h5>
                                    <span>Lorem ipsum dolor</span>
                                </div>
                                {/* <button className="btn w-100 text-white">Lorem, ipsum.</button> */}
                            </div>
                        </div>
                        <div className='offer rounded-2 p-1'>
                            <img src={reading} className='w-100 h-75 rounded-top-1' alt="" />
                            <div className='text-start h-50 d-flex flex-column justify-content-between'>
                                <div className="p-2 text-light text-center">
                                    <h5 className='text-light fw-bold py-2'>John Doe</h5>
                                    <span>Lorem ipsum dolor</span>
                                </div>
                                {/* <button className="btn w-100 text-white">Lorem, ipsum.</button> */}
                            </div>
                        </div>
                        {/* <div><Reading /></div> */}
                    </div>
                </div>
                <div className='contact py-5' id='contact'>
                    <div className="container px-5">
                        <h1 className='text-center mb-5'>Contact us</h1>
                        <div className='d-flex align-items-stretch justify-content-around gap-5'>
                            {/* <h4>Our socials</h4> */}
                            <form className='d-flex flex-column w-50 justify-content-center gap-4'>
                                <textarea className='rounded-4 p-2' name="" id="" cols="50" rows="5" placeholder='Write what you want to tell us here...'></textarea>
                                <input className='rounded-pill p-2' type="text" placeholder='Your name' />
                                <button className="btn rounded-pill">Send</button>
                            </form>
                            <div className="d-flex flex-column align-items-center justify-content-around w-50 py-2">
                                <p className="rounded-pill w-75 d-flex align-items-center gap-2" ><FaWhatsapp className='h4' /> +234 802 077 9250</p>
                                <p className="rounded-pill w-75 d-flex align-items-center gap-2" ><FaInstagram className='h4' /> test.instagram.com</p>
                                <p className="rounded-pill w-75 d-flex align-items-center gap-2" ><RiTwitterLine className='h4' /> test.twitter.com</p>
                                <p className="rounded-pill w-75 d-flex align-items-center gap-2" ><RiMailLine className='h4' /> test@gmail.com</p>
                                <p className="rounded-pill w-75 d-flex align-items-center gap-2" ><CiLocationOn className='h4' /> test area, test street, test, city, Nigeria</p>
                                {/* <button className="btn rounded-pill">send</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Landing