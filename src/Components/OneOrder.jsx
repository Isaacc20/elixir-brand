import { doc, setDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../Firebase'
import { toast } from 'react-toastify'

const OneOrder = () => {
    const { gettingOrders, orders, gettingOrdersFailed } = useSelector(state=>state.OrderSlice)
    const [currentOrder, setcurrentOrder] = useState()
    const navigate = useNavigate()
    const route = useParams()
    const id = route.id
    const toastId = React.useRef(null)
    const load = () => toastId.current = toast.loading('Saving', {position: 'top-center'})


    const getCurrentOrder = () => {
        if (orders && orders.length > 0) {
            const find = orders.find(el=>el.id == id)
            if (find) {
                setcurrentOrder(find)
            } else{
                navigate('/notfound')
            }
          }
    }
    useEffect(() => {
      getCurrentOrder()
    }, [])

    useEffect(() => {
      getCurrentOrder()
    }, [orders])
    
    // const confirmOrder = async(val)=>{
    //     const confirmAction = confirm(`Are you sure you have delivered to ${currentOrder.data.name}`)
    //     if (confirmAction) {
    //         load()
    //         try {
    //             let myOrder = currentOrder
    //             myOrder.data.delivered = true
    //             const myDoc = doc(db, 'Orders', val)
    //             await setDoc(myDoc, myOrder).then((res)=>{
    //                 console.log('Successful');
    //                 toast.dismiss(toastId.current)
    //                 toast.success('Successful')
    //                 setTimeout(() => {
    //                     navigate('/admin/dashboard/orders')
    //                 }, 5000);
    //             }).catch((err)=>{
    //                 console.log(err);
    //                 toast.dismiss(toastId.current)
    //                 toast.error(err.message)
    //             })
    //         } catch (error) {
    //             // console.log(error);
    //                 toast.dismiss(toastId.current)
    //                 toast.error(error.message)
    //         }
    //     } else{
    //         console.log(val);
    //         toast.info("Ok, fine")
    //     }
    // }

    const confirmOrder = async (val) => {
        const confirmAction = confirm(`Are you sure you have delivered to ${currentOrder.data.name}`);
        
        if (confirmAction) {
          load();
          
          try {
            // Create a new object with the updated 'delivered' property
            const myOrder = {
              ...currentOrder,
              data: {
                ...currentOrder.data,
                delivered: true,
              },
            };
      
            const myDoc = doc(db, 'Orders', val);
      
            await setDoc(myDoc, myOrder).then((res) => {
              console.log('Successful');
              toast.dismiss(toastId.current);
              toast.success('Successful');
              
              setTimeout(() => {
                navigate('/admin/dashboard/orders');
              }, 5000);
            }).catch((err) => {
              console.log(err);
              toast.dismiss(toastId.current);
              toast.error(err.message);
            });
          } catch (error) {
            console.log(error);
            toast.dismiss(toastId.current);
            toast.error(error.message);
          }
        } else {
          console.log(val);
          toast.info('Ok, fine');
        }
      };
      
    
  return (
    <>
        <div>
            {
                currentOrder && 
                <div className='container'>
                    <div className="one">
                        <h4>User details</h4>
                        <h6>Name : <span className="fw-normal">{currentOrder.data.name}</span></h6>
                        <h6>Email address : <span className="fw-normal">{currentOrder.data.email}</span></h6>
                        <h6>Phone number : <span className="fw-normal">{currentOrder.data.number1}</span></h6>
                        <h6>Alternative phone number : <span className="fw-normal">{currentOrder.data.number2}</span></h6>
                        <h6>Location : <span className="fw-normal">{currentOrder.data.location}</span></h6>
                    </div>
                    <div className="one">
                        <h4>Products</h4>
                        {
                            currentOrder.data.products.map((el, i)=>(
                                <div key={i}>
                                    <img src={el.data.front || el.data.images[0]} width={'250px'} className='rounded-3' alt="" />
                                    <h6>Name : <span className="fw-normal">{el.data.name || el.data.title}</span></h6>
                                    <h6>Author : <span className="fw-normal">{el.data.name || el.data.author}</span></h6>
                                    <h6>Price per copy : <span className="fw-normal">₦{el.data.price.toLocaleString()}</span></h6>
                                    <h6>Copies : <span className="fw-normal">{el.copies}</span></h6>
                                    <h6>Total price : <span className="fw-normal">₦{el.price.toLocaleString()}</span></h6>
                                    <h6>Category : <span className="fw-normal">{el.data.category}</span></h6>
                                    <h6>Location : <span className="fw-normal">{el.data.location}</span></h6>
                                </div>
                            ))
                        }
                        <h6>Total : ₦ {currentOrder.data.price.toLocaleString()}</h6>
                    </div>
                    <div className="one">
                        <h4>Status</h4>
                        {
                            currentOrder.data.delivered?
                            <div className=' my-2'>
                                <span className='bg-light text-success fw-bold rounded-3 p-2'>Delivered</span>
                            </div>:
                            <div className='d-flex flex-column align-items-start gap-2 my-2'>
                                <span className="bg-light text-danger fw-bold rounded-3 p-2">Not delivered</span>
                                <button onClick={confirmOrder(currentOrder.id)} className='btn btn-success'>Confirm delivery</button>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    </>
  )
}

export default OneOrder