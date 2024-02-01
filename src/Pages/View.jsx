import React, { useEffect, useState } from 'react'
import '../Styles/View.css'
import img from '../assets/hood_fv.jpg'
import back from '../assets/hood_bv.jpg'
import hood from '../assets/brand_hood.jpg'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const View = () => {
    const { isFetchingBooks, books, fetchingBooksFailed } = useSelector((state)=>state.BookSlice)
    const { isFetchingProducts, products, fetchingProductsFailed } = useSelector((state)=>state.productSlice)
    const route = useParams()
    const [view, setview] = useState('')
    const [oneProduct, setoneProduct] = useState(null)

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
                    <button className="btn">Add to cart</button>
                </div>
            </div>
            }
        </div>
    </>
  )
}

export default View