import React, { useState } from 'react'
import "../../Styles/Admin.css"
import { Link, useNavigate } from 'react-router-dom';

const Add = () => {
    const [type, settype] = useState("")
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
                        <h5>Add item</h5>
                        <select className='form-control' name="type" id="" onChange={(e)=>settype(e.target.value)}>
                            <option selected hidden value="">Item Type</option>
                            <option value="book">Book</option>
                            <option value="item">Others</option>
                        </select>
                        {
                            type == "book"?
                            <div className='d-flex flex-column gap-2'>
                                <label htmlFor="title">Book title
                                    <input type="text" name='title' id='title' className="form-control w-100" />
                                </label>
                                <label htmlFor="author">Author
                                    <input type="text" name='author' id='author' className="form-control w-100" />
                                </label>
                                <label htmlFor="topic">Topic 
                                    <input type="text" name='topic' id='topic' className="form-control" placeholder='e.g Finances, Relationship' />
                                </label>
                                <label htmlFor="about">About
                                    <textarea type="text" name='about' id='about' className="form-control w-100" cols={60} rows={3} />
                                </label>
                                <label htmlFor="images">Images (front cover first)
                                    <input type="file" accept='image/*' multiple name='images' id='images' className="form-control w-100" />
                                </label>
                                <label htmlFor="price">Price ₦
                                    <input type="number" name='price' id='price' className="form-control" />
                                </label>
                            </div>: type == "item"?
                            <div className='d-flex flex-column gap-2'>
                                <label htmlFor="name">Name
                                    <input type="text" name='name' id='name' className="form-control w-100" />
                                </label>
                                <label htmlFor="about">About
                                    <textarea type="text" name='about' id='about' className="form-control w-100" cols={60} rows={3} />
                                </label>
                                <label htmlFor="images">Images
                                    <input type="file" accept='image/*' multiple name='images' id='images' className="form-control w-100" />
                                </label>
                                <label htmlFor="price">Price ₦
                                    <input type="number" name='price' id='price' className="form-control" />
                                </label>
                            </div>:
                            <div>
                                <p>Kindly select item type</p>
                            </div>
                        }
                        
                        <Link className="text-decoration-none text-center form-control">Continue</Link>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Add