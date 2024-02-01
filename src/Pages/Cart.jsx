import React, { useEffect, useState } from 'react'
import '../Styles/Cart.css'
import cards from "../assets/bs-cards.jpg";
import { Link } from 'react-router-dom';
import { BsCart } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {
    const [cart, setcart] = useState(JSON.parse(localStorage.getItem('cart')))
    const dispatch = useDispatch()

    useEffect(() => {
      console.log(cart);
    }, [cart])
    
    const remove = (val) => {
        console.log(val);
        const productIndex = cart.findIndex(el=> el.id == val)
        // console.log(product);
        cart.pop(productIndex)
        localStorage.setItem('cart', JSON.stringify(cart))
        setcart(JSON.parse(localStorage.getItem('cart')))
    }

  return (
    <>
        <div className='cart'>
            <div className="bg">
                <h1 className='text-white h-100 w-100 d-flex align-items-center justify-content-center gap-3'><BsCart /> Cart</h1>
            </div>
            <table className='w-100 container my-5 table'>
                <tbody>
                    {
                        (cart && cart.length > 0) ?
                        cart.map((el, i)=>(
                            <tr key={i} className='d-flex align-items-stretch'>
                                <td className="w-25 d-flex align-items-center"><img src={el.data.front || el.data.images[Math.floor(Math.random() * el.data.images.length)]} className='rounded-2' alt="" height={'150px'} /></td>
                                <td className="w-25 d-flex flex-column align-items-center justify-content-center">
                                    <Link to={`/view/${el.id}`} className="name fw-bold text-decoration-none text-dark">{el.data.name || el.data.title}</Link><br />
                                    { el.data.author && <span className="">{el.data.author}</span> }
                                </td>
                                <td className="w-25 d-flex align-items-center"><button className='btn'>-</button><input className='w-25' type="number" name="" id="" /><button className='btn'>+</button></td>
                                <td className="w-25 d-flex align-items-center">₦ {el.data.price}</td>
                                <td className="w-25 d-flex align-items-center gap-3">
                                    <Link to={`/checkout/${el.id}`} className="btn">Checkout</Link>
                                    <button className="btn" onClick={(e)=>remove(el.id)}> ⨉ </button>
                                </td>
                            </tr>
                        )): <tr style={{minHeight: '60vh'}}><td className='h4 d-flex align-items-center justify-content-center'>Nothing here</td></tr>
                    }
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Cart