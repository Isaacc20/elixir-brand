import React, { useEffect, useState } from 'react'
import '../Styles/View.css'
import img from '../assets/hood_fv.jpg'
import back from '../assets/hood_bv.jpg'
import hood from '../assets/brand_hood.jpg'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const View = () => {
    const { isFetchingBooks, books, fetchingBooksFailed } = useSelector((state)=>state.BookSlice)
    const { isFetchingProducts, products, fetchingProductsFailed } = useSelector((state)=>state.productSlice)
    const [oneProduct, setoneProduct] = useState(null)
    const [view, setview] = useState('')
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const route = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        console.log(isFetchingBooks, books, fetchingBooksFailed);
      if (books || products) {
        let book = books.find(el=>el.id === route.id)
        let product = products.find(el=>el.id === route.id)
        if (book) {
            setoneProduct(book)
            setview(book.data.front)
        } else if (product) {
            setoneProduct(product)
            setview(product.data.images[0])
        }
      }
    }, [])

    const find = (val) => {
        let get = cart.find(el=>el.id == val)
        if (get) {
        return (
            <button onClick={(e)=>{e.preventDefault;navigate('/cart')}} className="btn download" style={{whiteSpace: 'nowrap'}}>View in cart</button>
        )
        } else {
        return (
            <button onClick={(e)=>addOne(e, val)} className="btn download text-white">
            <FaCartPlus />
            </button>
        )
        }
    }
    
  return (
    <>
        <div className="view w-100">
            <div className="bg">
                <h1 className='text-white h-100 w-100 d-flex align-items-center justify-content-center'>View Product</h1>
            </div>
            {
                oneProduct &&
                <div className='div w-100 container d-flex align-items-end justify-content-center gap-3 py-5'>
                <div className="images w-50 d-flex flex-column align-items-center justify-content-center gap-3 rounded-3">
                    <img src={view} className='w-75 image' alt="" />
                    <div className="d-flex overflow-auto justify-content-start gap-2">
                        {
                            oneProduct.data.front && 
                            <img src={oneProduct.data.front} className='img btn p-0' onClick={(e)=>{setview(e.target.src)}} alt="" />
                        }
                        {
                            oneProduct?
                            oneProduct.data.images.map((el, i)=>(
                                <img key={i} src={el} className='img btn p-0' onClick={(e)=>{setview(e.target.src)}} alt="" />
                            )): oneProduct? oneProduct.data.images.map((el, i)=>(
                                <img key={i} src={el} className='img btn p-0' onClick={(e)=>{setview(e.target.src)}} alt="" />
                            )): null
                        }
                        
                        {/* 
                        <img src={hood} className='img btn p-0' onClick={(e)=>{setview(e.target.src)}} alt="" /> */}
                    </div>
                </div>
                <div className='w-50 details'>
                    <h5>{oneProduct.data.name || oneProduct.data.title}</h5>
                    <p>{oneProduct.data.author && oneProduct.data.author}</p>
                    <span>{oneProduct.data.about}</span>
                    <p>₦ {oneProduct.data.price}</p>
                    {
                        find(oneProduct.id)
                    }
                </div>
            </div>
            }
        </div>
    </>
  )
}

export default View