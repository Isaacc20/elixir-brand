import React, { useEffect } from 'react'
import "../Styles/Shop.css"
import { FaSearch } from "react-icons/fa";
import Sidenav from '../Components/Sidenav';
import Display from '../Components/Display';
import { getBooks, getProducts } from '../Services/Controls';
import { useDispatch, useSelector } from 'react-redux';
import icon from '../assets/logo-icon.png'

const Shop = () => {
    const { isFetchingBooks, books, fetchingBooksFailed } = useSelector((state)=>state.BookSlice)
    const { isFetchingProducts, products, fetchingProductsFailed } = useSelector((state)=>state.productSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        getBooks(dispatch)
        getProducts(dispatch)
      }, [])
  return (
    <>
        <div className='shop'>
        {(isFetchingBooks || isFetchingProducts) && <div className="position-absolute top-0 start-0 d-flex align-items-center justify-content-center loader"><div className="spinner-grow"></div></div>}
            <div className="search">
                <div className="search-div w-100 h-100 text-center d-flex flex-column align-items-center justify-content-center gap-5">
                    <h1 className='text-white'>Find your desired resources</h1>
                    <div className='d-flex align-items-center justify-content-center search-input'>
                        <div className="d-flex align-items-stretch rounded-3 w-75">
                            <input className='w-100 px-3 rounded-start-3' type="text" />
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