import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const DeliveredOrders = () => {
    const { gettingOrders, orders, gettingOrdersFailed } = useSelector(state=>state.OrderSlice)
    const [delivered, setdelivered] = useState([])

    useEffect(() => {
      if (orders && orders.length > 0) {
        const findSome = orders.some(el=> el.delivered == true) 
        console.log(findSome);
        setdelivered(findSome)
      }
    }, [orders])
    
  return (
    <>
        <div className='h-100 w-100'>
            <table className='w-100 mx-4 table table-striped gap-3'>
                <thead>
                    <tr>
                        <td className='fw-bold h6'>Product</td>
                        <td className='fw-bold h6'>Copies</td>
                        <td className='fw-bold h6 '>Price</td>
                        <td className='fw-bold h6 '>User</td>
                    </tr>
                </thead>
            {
                (delivered && delivered.length > 0) ?
                <tbody className='w-100'>
                    {
                        delivered.map((el, i)=>{
                            console.log(el);
                            return (
                            <tr key={i} onClick={()=>navigate(`/admin/dashboard/orders/${el.id}`)} style={{cursor: 'pointer'}}>
                                <td className="fw-bold">
                                    {
                                        el.data.products.map((element, index)=>(
                                            <span key={index}>{element.data.title || element.data.name}<br /></span>
                                        ))
                                    }
                                </td>
                                <td className="fw-bold">
                                    {
                                        el.data.products.map((element, index)=>(
                                            <span key={index}>{element.copies}<br /></span>
                                        ))
                                    }
                                </td>
                                <td className=''>{el.data.price.toLocaleString()}</td>
                                <td className=''>{el.data.name}</td>
                            </tr>
                        )})
                    }
                </tbody>:<tbody><tr><td className="h1">Nothing here</td></tr></tbody>
            }
            </table>
        </div>
    </>
  )
}

export default DeliveredOrders