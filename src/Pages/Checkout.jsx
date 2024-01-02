import React from 'react'
import '../Styles/Checkout.css'
import { MdShoppingCartCheckout } from "react-icons/md";

const Checkout = () => {
  return (
    <>
        <div className='checkout'>
            <div className="bg">
                <h1 className='text-white h-100 w-100 d-flex align-items-center justify-content-center gap-4'><MdShoppingCartCheckout /> Checkout</h1>
            </div>
            <form action="" className='container'>
                <div className='d-flex flex-column align-items-stretch gap-4 py-5 w-75 container'>
                    <small>#To complete your order, we'll need a few information about you <br />Do well to fill the following form accordingly !</small>
                    <div>
                        <h5>Your details</h5>
                        <div className="d-flex flex-column gap-4 w-100">
                            <label htmlFor="name">
                                <small>First name first!</small>
                                <input className='form-control' name='name' id='name' type="text" placeholder='Your name' />
                            </label>
                            <label htmlFor="number1">
                                <small>Kindly provide your active phone number!</small>
                                <input className='form-control' name='number1' id='number1' type="number" placeholder='Phone number' />
                            </label>
                            <label htmlFor="number2">
                                <small>Just incase we couldn't reach you through the first phone number!</small>
                                <input className='form-control' name='number2' id='number2' type="number" placeholder='Alternative phone number' />
                            </label>
                        </div>
                    </div>
                    <div>
                        <h5>Location</h5>
                        <div className="d-flex flex-column gap-4 w-100">
                            <label htmlFor="state">
                                <small>Where do you want to receive your order?</small><br />
                                <select className='form-control dropdown-toggle' name="state" id="state">
                                    <option value="">State</option>
                                    <option value="Abia">Abia</option>
                                    <option value="Adamawa">Adamawa</option>
                                    <option value="Akwa-ibom">Akwa-ibom</option>
                                    <option value="Edo">And so on</option>
                                </select>
                            </label>
                            <label htmlFor="city">
                                <select className='form-control dropdown-toggle' name="city" id="city">
                                    <option value="">City</option>
                                    <option value="Umahia">Umahia</option>
                                    <option value="Yola">Yola</option>
                                    <option value="Uyo">Uyo</option>
                                    <option value="Benin">And so on</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div>
                        <h5>Payment option</h5>
                        <div className="d-flex flex-column gap-4 w-100">
                            <label htmlFor="checkout" className='form-control'>
                                <input type="radio" name='payment' id='checkout'  />
                                <span>  Pay on checkout</span><br />
                                <small>Faster delivery</small>
                            </label>
                            <label htmlFor="delivery" className='form-control'>
                                <input type="radio" name='payment' id='delivery'  />
                                <span>  Pay on delivery</span><br />
                                <small>Not refundable or returnable</small>
                                {/* <select className='form-control dropdown-toggle' name="city" id="city">
                                    <option value="">City</option>
                                    <option value="Umahia">Umahia</option>
                                    <option value="Yola">Yola</option>
                                    <option value="Uyo">Uyo</option>
                                    <option value="Benin">And so on</option>
                                </select> */}
                            </label>
                        </div>
                    </div>
                    <div><button className="btn">Complete order</button></div>
                </div>
            </form>
        </div>
    </>
  )
}

export default Checkout