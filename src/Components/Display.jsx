import React, { useState } from "react";
import axios from "axios";
import "../Styles/Shop.css";
import { useEffect } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../Firebase";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, getProducts } from "../Services/Controls";
import { ToastContainer, toast } from "react-toastify";
import { add } from "../Redux/cartSlice";

const Display = () => {
  const { isFetchingBooks, books, fetchingBooksFailed } = useSelector((state)=>state.BookSlice)
  const { isFetchingProducts, products, fetchingProductsFailed } = useSelector((state)=>state.productSlice)
  const [color, setcolor] = useState('left')
  const cart = JSON.parse(localStorage.getItem('cart')) || []
  const dispatch =  useDispatch()
  const navigate = useNavigate()
  const route = window.location.pathname.split('/')
  const myLocation = route[route.length-1]

  useEffect(() => {
    if (myLocation == 'books' || '' || null) {
      setcolor('left')
    } else if (myLocation == 'others') {
      setcolor('right')
    }
  }, [myLocation])
  
  return (
    <>
      <div className="display container p-4">
        <ToastContainer />
        <div className="dd w-100 d-flex flex-column align-items-center justify-content-evenly">
          <h4 className="text-start w-100 py-3 px-5">All items</h4>
          <div className="toggle-div">
            <div className="d-flex align-items-stretch rounded-3 shadow-sm toggle position-relative">
              <div className={color == 'left'? 'color w-50 position-absolute top-0 bottom-0 rounded-3 start-0': 'color w-50 position-absolute top-0 bottom-0 rounded-3 end-0'}></div>
              <Link to={'books'} className={color == 'left'? "text-decoration-none p-2 px-4 rounded-start-3 books text-white": "text-decoration-none p-2 px-4 rounded-start-3 books"}>Books</Link>
              <Link to={'others'} className={color == 'left'? "text-decoration-none p-2 px-4 rounded-end-3 others": "text-decoration-none p-2 px-4 rounded-end-3 others text-white"}>Others</Link>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Display;
