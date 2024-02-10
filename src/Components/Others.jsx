import React from 'react'
import { useSelector } from 'react-redux'
import '../Styles/Shop.css'
import { FaCartPlus } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';

const Others = () => {
    const { isFetchingProducts, products, fetchingProductsFailed } = useSelector((state)=>state.productSlice)
    const navigate = useNavigate()
    const cart = JSON.parse(localStorage.getItem('cart')) || []

    
    const addOne = (e, val) => {
        e.preventDefault()
        console.log(val);
        const product = products.find(el=>el.id == val)
        if (product) {
        cart.push(product)
        localStorage.setItem('cart', JSON.stringify(cart))
        toast.success(`Product added to cart`)
        }
    }
    
    const find = (val) => {
        let get = cart.find(el=>el.id == val)
        if (get) {
        return (
            <button onClick={()=>navigate('/cart')} className="btn download text-white" style={{whiteSpace: 'nowrap'}}>View in cart</button>
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
        <div className="card-div d-flex flex-wrap justify-content-evenly gap-5 py-5">
            {
              products && products.map((el, i)=>(
                <Link key={i} to={`/view/${el.id}`} className="cards d-flex flex-column gap-1 rounded-2 text-decoration-none text-dark">
                  <div className="img position-relative h-100 rounded-1">
                    <img src={el.data.images[Math.floor(Math.random() * el.data.images.length)]} alt="" />
                  </div>
                  <span className="px-2 fw-bold w-100 text-start">{el.data.name}</span>
                  {/* <span className="px-2 w-100 text-start">{el.data.author}</span> */}
                  <div className="d-flex align-items-end justify-content-between w-100 p-1">
                    <small className="px-2 w-100 text-start">$ {el.data.price}</small>
                    {
                      find(el.id)
                    }
                  </div>
                </Link>
              ))
            }
        </div>
    </>
  )
}

export default Others