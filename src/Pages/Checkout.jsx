import React, { useEffect, useState } from 'react'
import '../Styles/Checkout.css'
import { MdShoppingCartCheckout } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup'
import { useDispatch } from 'react-redux';
import { addDoc, collection, doc, getDocs } from 'firebase/firestore';
import { db } from '../Firebase';
import { ToastContainer, toast } from 'react-toastify';
import { closePaymentModal, useFlutterwave } from 'flutterwave-react-v3';

const Checkout = () => {
    const [cart, setcart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
    const [product, setproduct] = useState()
    const [amount, setamount] = useState(0)
    const [copy, setcopy] = useState()
    const [isLoading, setisLoading] = useState(false)
    const [paymentSuccessful, setpaymentSuccessful] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const route = useParams()
    const id = route.id
    const toastId = React.useRef(null)
    const load = () => toastId.current = toast.loading('Sending request')


    useEffect(() => {
        setcopy(1)
        toast.dismiss(toastId.current);
       if (cart && cart.length > 0) {
            console.log(cart);
        const find = cart.find(el=>el.id == id)
        if (find) {
            console.log(find);
            setproduct({...find})
        } else {
            navigate('/notfound')
        }
       } else {
        navigate('/notfound')
       }
    }, [])

    useEffect(() => {
        console.log(isLoading);
      if (isLoading) {
        load()
      }else{
        toast.dismiss(toastId.current);
      }
    }, [isLoading])

    useEffect(() => {
      if (product != null) {
        console.log(product);
        let prod = {...product, copies: copy}
        setproduct(prod)
        formik.setFieldValue('product', prod)
        let price =  product.data.price * copy
        setamount(price)
        formik.setFieldValue('price', price)
      }
    }, [copy])

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            number1: '',
            number2: '',
            location: '',
            delivered: false,
            price: '',
            product: {...product}
        },
        validationSchema: yup.object({
            name: yup.string().trim().required(),
            email: yup.string().trim().required(),
            number1: yup.number().required(),
            number2: yup.number().required(),
            location: yup.string().trim().required(),
            delivered: yup.boolean(),
            price: yup.number(),
            product: yup.object()
        }),
        onSubmit: (values) => {
            console.log(values);
            // placeOrder(values)
            handleFlutterPayment({
                callback: (response) => {
                   console.log(response);
                   if (response.status == 'completed' && response.charge_response_message == "Approved Successful") {
                    // setpaymentSuccessful(true)
                        placeOrder(values)
                   }
                    closePaymentModal() // this will close the modal programmatically
                },
                onClose: () => {},
              });
        }
    })
    
    const placeOrder = async(values)=>{
        console.log(values, amount);
        try {
            setisLoading(true)
            const orderCollection = collection(db, 'Orders');
            await addDoc(orderCollection, values).then((res)=>{
                console.log(res);
                setisLoading(false)
                toast.success('Order successful')
                console.log(values.products, cart);
                for (let i = 0; i < cart.length; i++) {
                    if (id == cart[i].id) {
                        cart.splice(i, 1)
                        console.log(cart);
                        localStorage.setItem('cart', JSON.stringify(cart))
                    }
                }
                navigate('/complete')
            }).catch((err)=>{
                console.log(err);
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
        }
    }

    const config = {
        public_key: 'FLWPUBK_TEST-8f49044c9bb98c135e81b380bc057787-X',
        tx_ref: Date.now(),
        amount: formik.values.price,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: formik.values.email,
           phone_number: formik.values.number1 || formik.values.number2,
          name: formik.values.name,
        },
        customizations: {
          title: 'Elixir Books',
          description: `Payment for cart item`,
        //   logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
      };
    
      const handleFlutterPayment = useFlutterwave(config);
    
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
                                {formik.errors.name && <small className='text-danger fst-italic'>This field is required</small>}
                            </label>
                            <label htmlFor="email">
                                <small>Email</small>
                                <input onChange={formik.handleChange} className={formik.errors.email? 'is-invalid form-control': 'form-control'} name='email' id='email' type="email" placeholder='Your email address' />
                                {formik.errors.email && <small className='text-danger fst-italic'>This field is required</small>}
                            </label>
                            <label htmlFor="number1">
                                <small>Kindly provide your active phone number!</small>
                                <input onChange={formik.handleChange} className={formik.errors.number1? 'is-invalid form-control': 'form-control'} name='number1' id='number1' type="number" placeholder='Phone number' />
                                {formik.errors.number1 && <small className='text-danger fst-italic'>This field is required</small>}
                            </label>
                            <label htmlFor="number2">
                                <small>Just incase we couldn't reach you through the first phone number!</small>
                                <input onChange={formik.handleChange} className={formik.errors.number2? 'is-invalid form-control': 'form-control'} name='number2' id='number2' type="number" placeholder='Alternative phone number' />
                                {formik.errors.number2 && <small className='text-danger fst-italic'>This field is required</small>}
                            </label>
                        </div>
                    </div>
                    <div>
                        <h5>Location</h5>
                        <div className="d-flex flex-column gap-4 w-100">
                            <label htmlFor="location">
                                Where do you want to receive your order?<br />
                                <input onChange={formik.handleChange} type="text" id="location" name='location' className={formik.errors.location? 'is-invalid form-control': 'form-control'}/>
                                {formik.errors.location && <small className='text-danger fst-italic'>This field is required</small>}
                            </label>
                        </div>
                    </div>
                    <div>
                        <h5>Products</h5>
                        <div className="d-flex flex-column gap-4 w-100">
                            {
                                // (product && product.length > 0) &&
                                product &&
                                    <label htmlFor={`product`}>
                                        How many copies of &nbsp; <span className="fw-bold">{product.data.name || product.data.title}</span><br />
                                        <input type="number" id={`product`} name={`product`} min={1} onWheel={(e)=>e.currentTarget.blur()} 
                                        onChange={
                                            (e)=>{
                                                setcopy(e.target.value)
                                            }
                                        }
                                             className='form-control' defaultValue={1}/>
                                        <span>Amount: ₦{(+product.data.price * copy).toLocaleString()}</span>
                                    </label>
                                
                            }
                        </div>
                    </div>
                    <div>
                        <h5>Total amount: ₦ {amount.toLocaleString()}</h5>
                    </div>
                    <div>
                        <button className="btn" type='submit' disabled={(amount == 0 || amount == null)? true: false} >Complete order</button>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default Checkout