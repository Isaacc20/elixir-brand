import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { getOrders } from '../../Services/Controls'
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import '../../Styles/Shop.css'

const Orders = () => {
  const { gettingOrders, orders, gettingOrdersFailed } = useSelector(state=>state.OrderSlice)
  const [color, setcolor] = useState('left')
  const dispatch = useDispatch()
  const toastId = React.useRef(null)
  const load = () => toastId.current = toast.loading('Getting Orders', {position: 'top-center'})
  const route = window.location.pathname.split('/')
  const myLocation = route[route.length-1]

  useEffect(() => {
    if (myLocation == 'new' || '' || null) {
      setcolor('left')
    } else if (myLocation == 'delivered') {
      setcolor('right')
    }
  }, [myLocation])

  useEffect(() => {
    getOrders(dispatch)
  }, [])
  useEffect(() => {
    if (gettingOrders) {
      load()
    }else if (orders) {
      toast.dismiss(toastId.current)
      console.log(orders);
    }else if (gettingOrdersFailed) {
      toast.dismiss(toastId.current)
      toast.error(gettingOrdersFailed)
      console.log(gettingOrdersFailed);
    }
  }, [gettingOrders, orders, gettingOrdersFailed])
  
  
  return (
    <>
        <div className="orders">
          <ToastContainer />
          <div className='toggle-div w-100 p-4'>
            <div  className="d-flex align-items-stretch rounded-3 shadow-sm toggle position-relative w-100">
              <div className={color == 'left'? 'color w-50 position-absolute top-0 bottom-0 rounded-3 start-0': 'color w-50 position-absolute top-0 bottom-0 rounded-3 end-0'}></div>
              <Link to={'new'} className={color == 'left'? "w-50 text-center text-decoration-none p-2 px-4 rounded-start-3 books text-white": "w-50 text-center text-decoration-none p-2 px-4 rounded-start-3 books"}>Standing orders</Link>
              <Link to={'delivered'} className={color == 'left'? "w-50 text-center text-decoration-none p-2 px-4 rounded-end-3 others": "w-50 text-center text-decoration-none p-2 px-4 rounded-end-3 others text-white"}>Delivered</Link>
            </div>
          </div>
          <Outlet />
        </div>
    </>
  )
}

export default Orders