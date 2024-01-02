import React, { useState } from 'react'
import '../Styles/View.css'
import img from '../assets/hood_fv.jpg'
import back from '../assets/hood_bv.jpg'
import hood from '../assets/brand_hood.jpg'

const View = () => {
    const [view, setview] = useState(img)
  return (
    <>
        <div className="view w-100">
            <div className="bg">
                <h1 className='text-white h-100 w-100 d-flex align-items-center justify-content-center'>View Item</h1>
            </div>
            <div className='div w-100 container d-flex align-items-end justify-content-center gap-3 py-5'>
                <div className="images w-50 d-flex flex-column align-items-center justify-content-center gap-3 rounded-3">
                    <img src={view} className='w-75' alt="" />
                    <div className="d-flex overflow-auto justify-content-start gap-2">
                        <img src={img} className='img btn p-0' onClick={(e)=>{setview(e.target.src)}} alt="" />
                        <img src={back} className='img btn p-0' onClick={(e)=>{setview(e.target.src)}} alt="" />
                        <img src={hood} className='img btn p-0' onClick={(e)=>{setview(e.target.src)}} alt="" />
                    </div>
                </div>
                <div className='w-50 details'>
                    <h5>Rich Dad, Poor Dad</h5>
                    <p>Bishop David Oyedepo</p>
                    <span>Cultivate financial literacy from an early age. Uncover the secrets to wealth accumulation by smartly investing in assets and mastering the art of money management.</span>
                    <p>$50</p>
                    <button className="btn">Add book</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default View