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
  const [cart, setcart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
  const [all, setall] = useState([])
  // const [find, setfind] = useState(null)
  const dispatch =  useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
  
    getBooks(dispatch)
    getProducts(dispatch)
    if (books && products) {
      setall([...books, ...products])
    }
  }, [])

  useEffect(() => {
    
    if(all.length>0) {
      cart.forEach(element => {
        
      })
    }
  }, [cart])

  console.log(books, products);
  
  
  
  const addOne = (e, val) => {
    e.preventDefault()
    // console.log(event);
    console.log(val);
    const book = books.find(el=>el.id == val)
    const product = products.find(el=>el.id == val)
    const exist = cart.findIndex(el=>el.id == val)

    // if(exist) {
    //   cart[exist].copies += 1
    //   console.log(cart);
    // }
    if (book) {
      setcart([...cart, book])
      localStorage.setItem('cart', JSON.stringify(cart))
    } else if (product) {
      setcart([...cart, product])
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }

  const find = (val) => {
    let get = cart.find(el=>el.id == val.id)
    if (get) {
      return get
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
              books && 
              books.forEach((el, i)=>(
                <Link key={i} to={`/view/${el.id}`} className="cards d-flex flex-column gap-1 rounded-2 text-decoration-none text-dark">
                  <div className="img position-relative h-100 rounded-1">
                    <img src={el.data.images[Math.floor(Math.random() * el.data.images.length)]} alt="" />
                  </div>
                  <span className="px-2 fw-bold w-100 text-start">{el.data.title}</span>
                  <span className="px-2 w-100 text-start">{el.data.author}</span>
                  <div className="d-flex align-items-end justify-content-between w-100 p-1">
                    <small className="px-2 w-100 text-start">$ {el.data.price}</small>
                    {
                      find(el)?
                      <button onClick={(e)=>addOne(e, el.id)} className="btn download text-white">
                        <FaCartPlus />
                      </button>: <Link to={'/cart'} className="btn download text-white">View in cart</Link>
                      }
                  </div>
                </Link>
              ))
            }
            {
              products && 
              products.map((el, i)=>(
                <Link key={i} to={`/view/${el.id}`} className="cards d-flex flex-column gap-1 rounded-2 text-decoration-none text-dark">
                  <div className="img position-relative h-100 rounded-1">
                    <img src={el.data.images[Math.floor(Math.random() * el.data.images.length)]} alt="" />
                  </div>
                  <span className="px-2 fw-bold w-100 text-start">{el.data.name}</span>
                  {/* <span className="px-2 w-100 text-start">{el.data.author}</span> */}
                  <div className="d-flex align-items-end justify-content-between w-100 p-1">
                    <small className="px-2 w-100 text-start">$ {el.data.price}</small>
                    <button onClick={(e)=>addOne(e, el.id)} className="btn download text-white">
                      <FaCartPlus />
                    </button>
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
