import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const NewOrders = () => {
    const { gettingOrders, orders, gettingOrdersFailed } = useSelector(state=>state.OrderSlice)
    const [newOrders, setnewOrders] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
      if (orders && orders.length > 0) {
        // console.log(orders[0].data.delivered);
        let all = []
        for (let i = 0; i < orders.length; i++) {
            const find = orders.find(el=> el.data.delivered == false)
            // console.log(find);
            if (find) {
                // let findSome = orders.splice(find, 1)
                all = [...all, find]
            }
            // console.log(all);
        }
        setnewOrders(all)
      }
    }, [orders])
    
  return (
    <>
        <div className='h-100 w-100'>
            <table className='w-100 mx-4 table table-striped'>
                <thead>
                    <tr>
                        <td className='fw-bold h6'>Product</td>
                        <td className='fw-bold h6'>Copies</td>
                        <td className='fw-bold h6 '>Price</td>
                        <td className='fw-bold h6 '>User</td>
                    </tr>
                </thead>
            {
                (newOrders && newOrders.length > 0) ?
                <tbody className='w-100'>
                    {
                        newOrders.map((el, i)=>{
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

export default NewOrders