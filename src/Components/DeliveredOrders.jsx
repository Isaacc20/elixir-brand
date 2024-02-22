import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const DeliveredOrders = () => {
    const { gettingOrders, orders, gettingOrdersFailed } = useSelector(state=>state.OrderSlice)
    const [delivered, setdelivered] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
      if (orders && orders.length > 0) {
        const all = []
        for (let i = 0; i < orders.length; i++) {
            // const find = orders.find(el=> el.data.delivered == true)
            // console.log(find);
            console.log(orders[i]);
            if (orders[i].data.data.delivered == true) {
                // let findSome = orders.splice(find, 1)
                all.push(orders[i])
            }
            // console.log(all);
        }
        // const findSome = orders.some(el=> el.data.delivered == true) 
        console.log(all);
        setdelivered(all)
      }
      console.log(delivered);
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
                        delivered.map((el, i)=>(
                            <tr key={i} onClick={()=>navigate(`/admin/dashboard/orders/${el.id}`)} style={{cursor: 'pointer'}}>
                                <td className="fw-bold">
                                    {/* {
                                        el.data.products.map((element, index)=>(
                                        ))
                                    } */}
                                    <span>{el.data.data.product.data.title || el.data.data.product.data.name}<br /></span>
                                </td>
                                <td className="fw-bold">
                                    {/* {
                                        el.data.products.map((element, index)=>(
                                        ))
                                    } */}
                                    <span>{el.data.data.product.copies}<br /></span>
                                </td>
                                <td className=''>{el.data.data.price}</td>
                                <td className=''>{el.data.data.name}</td>
                            </tr>
                        ))
                    }
                </tbody>:<tbody><tr><td className="h1">Nothing here</td></tr></tbody>
            }
            </table>
        </div>
    </>
  )
}

export default DeliveredOrders