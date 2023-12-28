import React from 'react'
import "../Styles/Shop.css"
import { FaSearch } from "react-icons/fa";
import Sidenav from '../Components/Sidenav';
import Display from '../Components/Display';

const Shop = () => {
  return (
    <>
        <div className='shop'>
            <div className="search">
                <div className="search-div w-100 h-100 text-center d-flex flex-column align-items-center justify-content-center gap-5">
                    <h1 className='text-white'>Lorem is a dummy text</h1>
                    <div className='d-flex align-items-center justify-content-center search-input'>
                        <div className="d-flex align-items-stretch rounded-4 w-75">
                            <input className='w-100 px-3 rounded-start-2' type="text" />
                            {/* <select className='py-3'>
                                <option value="">All categories</option>
                                <option value="">All books</option>
                                <option value="">Authors</option>
                                <option value="">Topics</option>
                            </select> */}
                            <button className='px-3 py-2 search-btn rounded-end-2'><FaSearch /></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-flex">
                {/* <Sidenav /> */}
                <Display />
            </div>
        </div>
    </>
  )
}

export default Shop