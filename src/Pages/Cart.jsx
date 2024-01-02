import React from 'react'
import '../Styles/Cart.css'
import cards from "../assets/bs-cards.jpg";
import { Link } from 'react-router-dom';
import { BsCart } from 'react-icons/bs';

const Cart = () => {
  return (
    <>
        <div className='cart'>
            <div className="bg">
                <h1 className='text-white h-100 w-100 d-flex align-items-center justify-content-center gap-3'><BsCart /> Cart</h1>
            </div>
            <table className='w-100 container my-5 table'>
                {/* <thead>
                    <tr>
                        <td></td>
                        <td>Name</td>
                        <td>Price</td>
                        <td></td>
                    </tr>
                </thead> */}
                <tbody>
                    <tr className='d-flex align-items-stretch'>
                        <td className="w-25 d-flex align-items-center"><img src={cards} className='rounded-2' alt="" /></td>
                        <td className="w-25 d-flex align-items-center">
                            <Link to={'/view'} className="fw-bold text-decoration-none text-dark">Sticky notes</Link><br />
                            {/* <span className="">Kenneth Hagin</span> */}
                        </td>
                        <td className="w-25 d-flex align-items-center"><button className='btn'>-</button><input className='w-25' type="number" name="" id="" /><button className='btn'>+</button></td>
                        <td className="w-25 d-flex align-items-center">$5.00</td>
                        <td className="w-25 d-flex align-items-center gap-3"><Link to={'/checkout'} className="btn">Checkout</Link><button className="btn">⨉</button></td>
                    </tr>
                    <tr className='d-flex align-items-stretch'>
                        <td className="w-25 d-flex align-items-center"><img src={cards} className='rounded-2' alt="" /></td>
                        <td className="w-25 d-flex align-items-center">
                            <Link to={'/view'} className="fw-bold text-decoration-none text-dark">Sticky notes</Link><br />
                            {/* <span className="">Kenneth Hagin</span> */}
                        </td>
                        <td className="w-25 d-flex align-items-center"><button className='btn'>-</button><input className='w-25' type="number" name="" id="" /><button className='btn'>+</button></td>
                        <td className="w-25 d-flex align-items-center">$5.00</td>
                        <td className="w-25 d-flex align-items-center gap-3"><Link to={'/checkout'} className="btn">Checkout</Link><button className="btn">⨉</button></td>
                    </tr>
                    <tr className='d-flex align-items-stretch'>
                        <td className="w-25 d-flex align-items-center"><img src={cards} className='rounded-2' alt="" /></td>
                        <td className="w-25 d-flex align-items-center">
                            <Link to={'/view'} className="fw-bold text-decoration-none text-dark">Sticky notes</Link><br />
                            {/* <span className="">Kenneth Hagin</span> */}
                        </td>
                        <td className="w-25 d-flex align-items-center"><button className='btn'>-</button><input className='w-25' type="number" name="" id="" /><button className='btn'>+</button></td>
                        <td className="w-25 d-flex align-items-center">$5.00</td>
                        <td className="w-25 d-flex align-items-center gap-3"><Link to={'/checkout'} className="btn">Checkout</Link><button className="btn">⨉</button></td>
                    </tr>
                    <tr className='d-flex align-items-stretch'>
                        <td className="w-25 d-flex align-items-center"><img src={cards} className='rounded-2' alt="" /></td>
                        <td className="w-25 d-flex align-items-center">
                            <Link to={'/view'} className="fw-bold text-decoration-none text-dark">Sticky notes</Link><br />
                            {/* <span className="">Kenneth Hagin</span> */}
                        </td>
                        <td className="w-25 d-flex align-items-center"><button className='btn'>-</button><input className='w-25' type="number" name="" id="" /><button className='btn'>+</button></td>
                        <td className="w-25 d-flex align-items-center">$5.00</td>
                        <td className="w-25 d-flex align-items-center gap-3"><Link to={'/checkout'} className="btn">Checkout</Link><button className="btn">⨉</button></td>
                    </tr>
                    <tr className='d-flex align-items-stretch'>
                        <td className="w-25 d-flex align-items-center"></td>
                        <td className="w-25 d-flex align-items-center">
                            {/* <Link to={'/view'} className="fw-bold text-decoration-none text-dark">Sticky notes</Link><br /> */}
                            <span className="fw-bold">Total</span>
                        </td>
                        <td className="w-25 d-flex align-items-center">$25.00</td>
                        <td className="w-25 d-flex align-items-center"><Link to={'/checkout'} className="btn">Checkout all</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </>
  )
}

export default Cart