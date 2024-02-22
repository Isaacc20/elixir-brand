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
                console.log(find);
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
                <div className='container d-flex flex-column gap-5'>
                    <div className="one w-75 mx-auto d-flex flex-column align-items-center gap-3">
                        <h1 className='text-center'>User details</h1>
                        <h6 className='w-100 d-flex flex-wrap justify-content-between'>Name : <span className="fw-normal">&nbsp; &nbsp; &nbsp;{currentOrder.data.data.name}</span></h6>
                        <h6 className='w-100 d-flex flex-wrap justify-content-between'>Email address : <span className="fw-normal">&nbsp; &nbsp; &nbsp;{currentOrder.data.data.email}</span></h6>
                        <h6 className='w-100 d-flex flex-wrap justify-content-between'>Phone number : <span className="fw-normal">&nbsp; &nbsp; &nbsp;{currentOrder.data.data.number1}</span></h6>
                        <h6 className='w-100 d-flex flex-wrap justify-content-between'>Alternative phone number : <span className="fw-normal">&nbsp; &nbsp; &nbsp;{currentOrder.data.data.number2}</span></h6>
                        <h6 className='w-100 d-flex flex-wrap justify-content-between'>Location : <span className="fw-normal">&nbsp; &nbsp; &nbsp;{currentOrder.data.data.location}</span></h6>
                    </div>
                    <div className="one">
                        <h4 className='text-center'>Products</h4>
                        {/* {
                            currentOrder.data.products.map((el, i)=>( */}
                        <div className='d-flex flex-wrap align-items-center justify-content-around gap-3'>
                            <img src={currentOrder.data.data.product.data.front || currentOrder.data.data.product.data.images[0]} width={'250px'} height={'300px'} className='rounded-3' alt="" />
                            <div className='d-flex flex-column gap-3'>
                              <h6>Name : <span className="fw-normal">{currentOrder.data.data.product.data.name || currentOrder.data.data.product.data.title}</span></h6>
                              {currentOrder.data.data.product.data.author && <h6>Author : <span className="fw-normal">{currentOrder.data.data.product.data.author}</span></h6>}
                              <h6>Price per copy : <span className="fw-normal">₦{currentOrder.data.data.product.data.price.toLocaleString()}</span></h6>
                              <h6>Copies : <span className="fw-normal">{currentOrder.data.data.product.copies}</span></h6>
                              <h6>Total price : <span className="fw-normal">₦{currentOrder.data.data.price.toLocaleString()}</span></h6>
                              {currentOrder.data.data.product.data.category && <h6>Category : <span className="fw-normal">{currentOrder.data.data.product.data.category}</span></h6>}
                            </div>
                            {/* <h6>Location : <span className="fw-normal">{currentOrder.data.data.product.data.location}</span></h6> */}
                        </div>
                            {/* ))
                        } */}
                        <h6 className='mx-auto mt-3 d-flex justify-content-around'>Total : <span className="fw-normal">₦ {currentOrder.data.data.price.toLocaleString()}</span></h6>
                    </div>
                    <div className="one d-flex justify-content-around">
                        <h4 className='text-center'>Status</h4>
                        {
                            currentOrder.data.data.delivered ?
                            <div className=' my-2'>
                                <span className='bg-light text-success fw-bold rounded-3 p-2'>Delivered</span>
                            </div>:
                            <div className='d-flex flex-column align-items-start gap-2 my-2'>
                                <span className="bg-light text-danger fw-bold rounded-3 p-2">Not delivered</span>
                                <button onClick={()=> confirmOrder(currentOrder.data.id)} className='btn btn-success'>Confirm delivery</button>
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