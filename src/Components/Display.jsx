import React from 'react'
import axios from 'axios';
import '../Styles/Shop.css'
import { useEffect } from 'react';
import { FaSave, FaStar, FaEllipsisV } from 'react-icons/fa';
import { GiSaveArrow } from "react-icons/gi";

const Display = () => {
  return (
    <>
        <div className='display container p-4'>
        <div>
          <h4>Recently viewed</h4>
          <div className="card-div d-flex">
            <div className='card d-flex flex-column gap-1'>
              <div className='position-relative h-75'>
                <button className='save bg-transparent text-light shadow-sm position-absolute top-0 end-0 p-2 rounded-circle'><FaEllipsisV /></button>
              </div>
              <span className='px-2 fw-bold'>The power of God</span>
              <span className='px-2'>Kenneth Hagin</span>
              <small className='px-2'>$ 3.4</small>
              <button className="btn download text-white"><GiSaveArrow /> Download</button>
            </div>
            <div className='card d-flex flex-column gap-1'>
              <div className='position-relative h-75'>
                <button className='save bg-transparent text-light shadow-sm position-absolute top-0 end-0 p-2 rounded-circle'><FaEllipsisV /></button>
              </div>
              <span className='px-2 fw-bold'>The power of God</span>
              <span className='px-2'>Kenneth Hagin</span>
              <small className='px-2'>$ 3.4</small>
              <button className="btn download text-white"><GiSaveArrow /> Download</button>
            </div>
            <div className='card d-flex flex-column gap-1'>
              <div className='position-relative h-75'>
                <button className='save bg-transparent text-light shadow-sm position-absolute top-0 end-0 p-2 rounded-circle'><FaEllipsisV /></button>
              </div>
              <span className='px-2 fw-bold'>The power of God</span>
              <span className='px-2'>Kenneth Hagin</span>
              <small className='px-2'>$ 3.4</small>
              <button className="btn download text-white"><GiSaveArrow /> Download</button>
            </div>
            <div className='card d-flex flex-column gap-1'>
              <div className='position-relative h-75'>
                <button className='save bg-transparent text-light shadow-sm position-absolute top-0 end-0 p-2 rounded-circle'><FaEllipsisV /></button>
              </div>
              <span className='px-2 fw-bold'>The power of God</span>
              <span className='px-2'>Kenneth Hagin</span>
              <small className='px-2'>$ 3.4</small>
              <button className="btn download text-white"><GiSaveArrow /> Download</button>
            </div>
            <div className='card d-flex flex-column gap-1'>
              <div className='position-relative h-75'>
                <button className='save bg-transparent text-light shadow-sm position-absolute top-0 end-0 p-2 rounded-circle'><FaEllipsisV /></button>
              </div>
              <span className='px-2 fw-bold'>The power of God</span>
              <span className='px-2'>Kenneth Hagin</span>
              <small className='px-2'>$ 3.4</small>
              <button className="btn download text-white"><GiSaveArrow /> Download</button>
            </div>
            <div className='card d-flex flex-column gap-1'>
              <div className='position-relative h-75'>
                <button className='save bg-transparent text-light shadow-sm position-absolute top-0 end-0 p-2 rounded-circle'><FaEllipsisV /></button>
              </div>
              <span className='px-2 fw-bold'>The power of God</span>
              <span className='px-2'>Kenneth Hagin</span>
              <small className='px-2'>$ 3.4</small>
              <button className="btn download text-white"><GiSaveArrow /> Download</button>
            </div>
            <div className='card d-flex flex-column gap-1'>
              <div className='position-relative h-75'>
                <button className='save bg-transparent text-light shadow-sm position-absolute top-0 end-0 p-2 rounded-circle'><FaEllipsisV /></button>
              </div>
              <span className='px-2 fw-bold'>The power of God</span>
              <span className='px-2'>Kenneth Hagin</span>
              <small className='px-2'>$ 3.4</small>
              <button className="btn download text-white"><GiSaveArrow /> Download</button>
            </div>
            <div className='card d-flex flex-column gap-1'>
              <div className='position-relative h-75'>
                <button className='save bg-transparent text-light shadow-sm position-absolute top-0 end-0 p-2 rounded-circle'><FaEllipsisV /></button>
              </div>
              <span className='px-2 fw-bold'>The power of God</span>
              <span className='px-2'>Kenneth Hagin</span>
              <small className='px-2'>$ 3.4</small>
              <button className="btn download text-white"><GiSaveArrow /> Download</button>
            </div>
            <div className='card d-flex flex-column gap-1'>
              <div className='position-relative h-75'>
                <button className='save bg-transparent text-light shadow-sm position-absolute top-0 end-0 p-2 rounded-circle'><FaEllipsisV /></button>
              </div>
              <span className='px-2 fw-bold'>The power of God</span>
              <span className='px-2'>Kenneth Hagin</span>
              <small className='px-2'>$ 3.4</small>
              <button className="btn download text-white"><GiSaveArrow /> Download</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Display