import React, { useEffect, useState } from 'react'
import '../Styles/Checkout.css'
import { MdShoppingCartCheckout } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup'
import { useDispatch } from 'react-redux';
import { isSendingOrder, sentOrder, failedSendingOrder } from "../Redux/OrderSlice";
import { addDoc, collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../Firebase';
import { ToastContainer, toast } from 'react-toastify';
import { PaystackConsumer, usePaystackPayment } from 'react-paystack';

const Checkout = () => {
    const [cart, setcart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
    const [product, setproduct] = useState()
    const [amount, setamount] = useState(0)
    const [allPrices, setallPrices] = useState()
    const [isLoading, setisLoading] = useState(false)
    const [paymentSuccess, setpaymentSuccess] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const route = useParams()
    const id = route.id
    const toastId = React.useRef(null)


    const load = () => toastId.current = toast.loading('Sending request')
    useEffect(() => {
        console.log(isLoading);
      if (isLoading) {
        load()
      }else{
        toast.dismiss(toastId.current);
      }
    }, [isLoading])

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            number1: '',
            number2: '',
            location: '',
            products: ''
        },
        validationSchema: yup.object({
            name: yup.string().trim().required(),
            email: yup.string().trim().required(),
            number1: yup.number().required(),
            number2: yup.number().required(),
            location: yup.string().trim().required(),
            products: yup.array()
        }),
        onSubmit: (values) => {
            console.log(values);
            // placeOrder(values)
            // initializePayment(handleSuccess, handleClose)
            // usePaystackPayment(config)
            placeOrder(values)
        }
    })

    const config = {
        reference: (new Date()).getTime().toString(),
        email: formik.values.email,
        amount: amount*100,
        publicKey: 'pk_test_b25929938288a8363832f759f9d5460cffedd2e5',
    };
    const initializePayment = usePaystackPayment(config)

    const handleSuccess = (reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        setpaymentSuccess(true)
        console.log(reference);
      };

    const handleClose = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
    };

    const componentProps = {
        ...config,
        text: 'Paystack Button Implementation',
        onSuccess: (reference) => handleSuccess(reference),
        onClose: handleClose
    };

    useEffect(() => {
        toast.dismiss(toastId.current);
       if (cart && cart.length > 0) {
            console.log(cart);
            const find = cart.find(el=>el.id == id)
        if (find) {
          setproduct([find])
        } else if (id == 'all') {
          setproduct(cart)
        } else {
          navigate('/notfound')
        }
       } else {
        navigate('/notfound')
       }
    }, [])

    useEffect(() => {
      if (product && product.length > 0) {
        setamount(0)
        let prices = []
        let sum = 0
        product.forEach((el, i) => {
            el.copies = 1

            let price = Number(el.data.price) * Number(el.copies)
            console.log(el.data.price, el.copies, price);
            prices = [...prices, price]
            el.price = price
            console.log(el);
            formik.setFieldValue('products', [el])
            // console.log(price, prices);
        });
        for (let i = 0; i < prices.length; i++) {
            sum += prices[i];
        }
        console.log(sum, prices);
        setallPrices(prices)
        setamount(sum)
      }
    }, [product])

    useEffect(() => {
        if (paymentSuccess == true) {
            toast.success('Payment successful')
            console.log('Payment successful');
            placeOrder(formik.values)
        }
    }, [paymentSuccess])
    

    
    const placeOrder = async(values)=>{
        console.log(values);
        try {
            setisLoading(true)
            // dispatch(isSendingOrder())
            const orderCollection = collection(db, 'Orders');
            await addDoc(orderCollection, values).then((res)=>{
                console.log(res);
                // dispatch(sentOrder(res))
                setisLoading(false)
                toast.success('Order successful')
                setcart([])
                localStorage.setItem('cart', JSON.stringify([]))
                navigate('/complete')
            }).catch((err)=>{
                console.log(err);
                // dispatch(failedSendingOrder(err.message))
                setisLoading(false)
                toast.error('Something went wrong')
            })
        } catch (error) {
            console.log(error);
            setisLoading(false)
            toast.error('Something went wrong')
            setTimeout(() => {
                navigate(-1)
            }, 5000);
            // toast.dismiss(toastId.current)
        }
    }
    
console.log(formik.errors);
  return (
    <>
        <div className='checkout'>
            <ToastContainer />
            <div className="bg">
                <h1 className='text-white h-100 w-100 d-flex align-items-center justify-content-center gap-4'><MdShoppingCartCheckout /> Checkout</h1>
            </div>
            <form action="" onSubmit={formik.handleSubmit} className='container'>
                <div className='d-flex flex-column align-items-stretch gap-4 py-5 w-75 container'>
                    <small>#To complete your order, we'll need a few information about you <br />Do well to fill the following form accordingly !</small>
                    <div>
                        <h5>Your details</h5>
                        <div className="d-flex flex-column gap-4 w-100">
                            <label htmlFor="name">
                                <small>Full name</small>
                                <input onChange={formik.handleChange} className={formik.errors.name? 'is-invalid form-control': 'form-control'} name='name' id='name' type="text" placeholder='Your name' />
                                {formik.errors.name && <small className='text-danger fst-italic'>{formik.errors.name}</small>}
                            </label>
                            <label htmlFor="email">
                                <small>Email</small>
                                <input onChange={formik.handleChange} className={formik.errors.email? 'is-invalid form-control': 'form-control'} name='email' id='email' type="email" placeholder='Your email address' />
                                {formik.errors.email && <small className='text-danger fst-italic'>{formik.errors.email}</small>}
                            </label>
                            <label htmlFor="number1">
                                <small>Kindly provide your active phone number!</small>
                                <input onChange={formik.handleChange} className={formik.errors.number1? 'is-invalid form-control': 'form-control'} name='number1' id='number1' type="number" placeholder='Phone number' />
                                {formik.errors.number1 && <small className='text-danger fst-italic'>{formik.errors.number1}</small>}
                            </label>
                            <label htmlFor="number2">
                                <small>Just incase we couldn't reach you through the first phone number!</small>
                                <input onChange={formik.handleChange} className={formik.errors.number2? 'is-invalid form-control': 'form-control'} name='number2' id='number2' type="number" placeholder='Alternative phone number' />
                                {formik.errors.number2 && <small className='text-danger fst-italic'>{formik.errors.number2}</small>}
                            </label>
                        </div>
                    </div>
                    <div>
                        <h5>Location</h5>
                        <div className="d-flex flex-column gap-4 w-100">
                            <label htmlFor="location">
                                Where do you want to receive your order?<br />
                                <input onChange={formik.handleChange} type="text" id="location" name='location' className={formik.errors.location? 'is-invalid form-control': 'form-control'}/>
                                {formik.errors.location && <small className='text-danger fst-italic'>{formik.errors.location}</small>}
                            </label>
                        </div>
                    </div>
                    <div>
                        <h5>Products</h5>
                        <div className="d-flex flex-column gap-4 w-100">
                            {
                                (product && product.length > 0) &&
                                product.map((el, i)=>(
                                    <label key={i} htmlFor={`product${i}`}>
                                        How many copies of &nbsp; {el.data.name || el.data.title}<br />
                                        <input type="number" id={`product${i}`} name={`product${i}`} 
                                        onChange={
                                            (e)=>{
                                                let sum = 0
                                                let prices = [...allPrices]
                                                let copy = []
                                                console.log(prices);
                                                let price = +el.data.price * +e.target.value
                                                console.log((price, prices));
                                                let find = prices.findIndex(element=>element == el.data.price)
                                                prices.splice(find, 1, price)
                                                for (let i = 0; i < prices.length; i++) {
                                                    sum += prices[i];
                                                    copy = [...copy, e.target.value]
                                                }
                                                setamount(sum)
                                                let prod = product;
                                                prod[i].copies = e.target.value
                                                setproduct(prod)
                                                formik.setFieldValue('products', product)
                                            }}
                                             className='form-control' defaultValue={1}/>
                                        <span>Amount: {+el.data.price * +el.copies}</span>
                                    </label>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <h5>Total amount: ₦ {amount}</h5>
                    </div>
                    {/* <div>
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
                                <select className='form-control dropdown-toggle' name="city" id="city">
                                    <option value="">City</option>
                                    <option value="Umahia">Umahia</option>
                                    <option value="Yola">Yola</option>
                                    <option value="Uyo">Uyo</option>
                                    <option value="Benin">And so on</option>
                                </select>
                            </label>
                        </div>
                    </div> */}
                    <div>
                        {/* <PaystackConsumer {...componentProps} >
                        </PaystackConsumer> */}
                        <button className="btn" type='submit' disabled={(amount == 0 || amount == null)? true: false} >Complete order</button>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default Checkout