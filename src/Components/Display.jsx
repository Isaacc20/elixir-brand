import React, { useState } from "react";
import axios from "axios";
import "../Styles/Shop.css";
import { useEffect } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../Firebase";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, getProducts } from "../Services/Controls";
import { ToastContainer } from "react-toastify";
import { add } from "../Redux/cartSlice";

const Display = () => {
  const { isFetchingBooks, books, fetchingBooksFailed } = useSelector((state)=>state.BookSlice)
  const { isFetchingProducts, products, fetchingProductsFailed } = useSelector((state)=>state.productSlice)
  // const [addCart, setaddCart] = useState()
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  const dispatch =  useDispatch()
  const navigate = useNavigate()
  
  const addOne = (e, val) => {
    e.preventDefault()
    // console.log(event);
    console.log(val);
    const book = books.find(el=>el.id == val)
    const product = products.find(el=>el.id == val)
    if (book) {
      cart.push(book)
      localStorage.setItem('cart', JSON.stringify(cart))
      // setaddCart(
      //   <button onClick={()=>navigate('/cart')} className="btn download text-white" style={{whiteSpace: 'nowrap'}}>View in cart</button>
      // )
    } else if (product) {
      cart.push(product)
      localStorage.setItem('cart', JSON.stringify(cart))
      // setaddCart(
      //   <button onClick={()=>navigate('/cart')} className="btn download text-white" style={{whiteSpace: 'nowrap'}}>View in cart</button>
      // )
    }
  }

  const find = (val) => {
    let get = cart.find(el=>el.id == val.id)
    if (get) {
      // setaddCart(
      //   <button onClick={()=>navigate('/cart')} className="btn download text-white" style={{whiteSpace: 'nowrap'}}>View in cart</button>
      // )
      return (
        <button onClick={()=>navigate('/cart')} className="btn download text-white" style={{whiteSpace: 'nowrap'}}>View in cart</button>
      )
    } else {
      // setaddCart(
      //   <button onClick={(e)=>addOne(e, val.id)} className="btn download text-white">
      //     <FaCartPlus />
      //   </button>
      // )
      return (
        <button onClick={(e)=>addOne(e, val.id)} className="btn download text-white">
          <FaCartPlus />
        </button>
      )
    }
  }
  
  return (
    <>
      <div className="display container p-4">
        <ToastContainer />
        <div className="dd w-100 d-flex flex-column align-items-center justify-content-evenly">
          <h4 className="text-start w-100 py-3 px-5">All items</h4>
          <div className="card-div d-flex flex-wrap justify-content-evenly gap-5">
            {
              books && books.map((el, i)=>(
                <Link key={i} to={`/view/${el.id}`} className="cards d-flex flex-column gap-1 rounded-2 text-decoration-none text-dark">
                  <div className="img position-relative h-100 rounded-1">
                    <img src={el.data.images[Math.floor(Math.random() * el.data.images.length)]} alt="" />
                  </div>
                  <span className="px-2 fw-bold w-100 text-start">{el.data.title}</span>
                  <span className="px-2 w-100 text-start">{el.data.author}</span>
                  <div className="d-flex align-items-end justify-content-between w-100 p-1">
                    <small className="px-2 w-100 text-start">$ {el.data.price}</small>
                    {
                      find(el)
                    }
                    
                  </div>
                </Link>
              ))
            }
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
                      find(el)
                    }
                  </div>
                </Link>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Display;
