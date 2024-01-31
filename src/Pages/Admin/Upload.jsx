import React, { useEffect, useState } from 'react'
import "../../Styles/Admin.css"
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from 'yup'
// import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
// import { getStorage, ref, uploadString, getDownloadURL, uploadBytes, list, listAll } from "firebase/storage";
// import { db, imageDb } from '../../Firebase';
import { ToastContainer, toast } from 'react-toastify';
// import { v4 } from 'uuid';
import { frontCover, images, saveBook, saveProduct } from '../../Services/Controls';

const Add = () => {
    const [type, settype] = useState("")
    // const [img, setimg] = useState("")
    const [isLoading, setisLoading] = useState(false)
    // const storage = getStorage()
    const navigate = useNavigate()
    const toastId = React.useRef(null)
    const back = ()=>{
        navigate(-1)
    }

    const load = () => toastId.current = toast.loading('Uploading')
    useEffect(() => {
      if (isLoading) {
        load()
      }else{
        toast.dismiss(toastId.current);
      }
    }, [isLoading])

    // const frontCover = async (e) => {
    //     let id = `images/${v4()}`
    //     const imageRef = ref(imageDb, id)
    //     const img = e.target.files[0]
    
    //     try {
    //         const uploadTaskSnapshot = await uploadBytes(imageRef, img);
    //         const downloadURL = await getDownloadURL(uploadTaskSnapshot.ref);
    //         console.log(downloadURL);
    //         bookFormik.setFieldValue('front', downloadURL);
    //     } catch (error) {
    //         console.error("Error uploading image:", error);
    //         toast.error("Error uploading image")
    //     }
    // };
    
    

    const bookFormik = useFormik({
        initialValues: {
            title: '',
            author: '',
            category: '',
            about: '',
            front: '',
            images: '',
            price: ''
        },
        validationSchema: yup.object({
            title: yup.string().trim().required(),
            author: yup.string().trim().required(),
            category: yup.string().trim().required(),
            about: yup.string().trim().required(),
            front: yup.string().required(),
            images: yup.string(),
            price: yup.number().required()
        }),
        onSubmit: (values) => {
            setisLoading(true)
            saveBook(values)
        }
    })

    const productFormik = useFormik({
        initialValues: {
            name: '',
            about: '',
            images: '',
            price: ''
        },
        validationSchema: yup.object({
            name: yup.string().trim().required(),
            about: yup.string().trim(),
            images: yup.string().trim().required(),
            price: yup.number().required()
        }),
        onSubmit: (values) => {
            setisLoading(true)
            saveProduct(values)
        }
    })

    // const saveBook = async(values) => {
    //     console.log(values);
    //     const booksCollection = collection(db, 'Books');
    //     await addDoc(booksCollection, values).then((res)=>{
    //         console.log(res);
    //         setisLoading(false)
    //         toast.success('Product added')
            
    //         setTimeout(() => {
    //             navigate('/admin/dashboard')
    //         }, 5000);
    //     }).catch((err)=>{
    //         console.log(err);
    //         setisLoading(false)
    //         toast.error('Something went wrong')
    //     })
    // }

    // const saveProduct = async(values) => {
    //     console.log(values);
    //     const productsCollection = collection(db, 'Products');
    //     await addDoc(productsCollection, values).then((res)=>{
    //         console.log(res);
    //         setisLoading(false)
    //         toast.success("Product added")
    //         setTimeout(() => {
    //             navigate('/admin/dashboard')
    //         }, 5000);
    //     }).catch((err)=>{
    //         console.log(err);
    //         setisLoading(false)
    //         toast.error('Something went wrong')
    //     })
    // }
  return (
    <>
        <div className="login">
            <ToastContainer />
            <div className="div w-100 h-100 d-flex align-items-center justify-content-center">
                <div className="container d-flex flex-column align-items-center justify-content-center">
                    <small className='w-50 text-white'>NOTE: This page is only for admins of this website <br />Kindly <Link onClick={back}>Go back</Link> if you missed your way</small>
                    <div action="" className='d-flex flex-column gap-3 p-5 form-control shadow w-50 bg-white'>
                        <h5>Upload Product</h5>
                        <select className='form-control' name="type" id="" onChange={(e)=>settype(e.target.value)}>
                            <option defaultValue={''} hidden value="">Product Type</option>
                            <option value="book">Book</option>
                            <option value="item">Others</option>
                        </select>
                        {
                            type == "book"?
                            <form onSubmit={bookFormik.handleSubmit} className='d-flex flex-column gap-3'>
                                <label htmlFor="title">Book title
                                    <input type="text" name='title' id='title' onChange={bookFormik.handleChange} className={bookFormik.errors.title? "is-invalid form-control w-100": "form-control w-100"} />
                                    <small className='text-danger fst-italic'>{bookFormik.errors.title && bookFormik.errors.title}</small>
                                </label>
                                <label htmlFor="author">Author
                                    <input type="text" name='author' id='author' onChange={bookFormik.handleChange} className={bookFormik.errors.author? "is-invalid form-control w-100": "form-control w-100"} />
                                    <small className='text-danger fst-italic'>{bookFormik.errors.author && bookFormik.errors.author}</small>
                                </label>
                                <label htmlFor="category">Category (Separate by ',')
                                    <input type="text" name='category' id='category' placeholder='e.g Finances, Relationship' onChange={bookFormik.handleChange} className={bookFormik.errors.category? "is-invalid form-control w-100": "form-control w-100"} />
                                    <small className='text-danger fst-italic'>{bookFormik.errors.category && bookFormik.errors.category}</small>
                                </label>
                                <label htmlFor="about">About
                                    <textarea type="text" name='about' id='about'  cols={60} rows={3} onChange={bookFormik.handleChange} className={bookFormik.errors.about? "is-invalid form-control w-100": "form-control w-100"} />
                                    <small className='text-danger fst-italic'>{bookFormik.errors.about && bookFormik.errors.about}</small>
                                </label>
                                <label htmlFor="front">Front cover image
                                    <input type="file" accept='image/*' name='front' id='front' onChange={frontCover} className={bookFormik.errors.front? "is-invalid form-control w-100": "form-control w-100"} />
                                    <small className='text-danger fst-italic'>{bookFormik.errors.front && bookFormik.errors.front}</small>
                                </label>
                                <label htmlFor="images">Other images
                                    <input type="file" accept='image/*' multiple name='images' id='images' onChange={images} className={bookFormik.errors.images? "is-invalid form-control w-100": "form-control w-100"} />
                                    <small className='text-danger fst-italic'>{bookFormik.errors.images && bookFormik.errors.images}</small>
                                </label>
                                <label htmlFor="price">Price ₦
                                    <input type="number" name='price' id='price' onChange={bookFormik.handleChange} className={bookFormik.errors.price? "is-invalid form-control w-100": "form-control w-100"} />
                                    <small className='text-danger fst-italic'>{bookFormik.errors.price && bookFormik.errors.price}</small>
                                </label>
                                <button type='submit' disabled className="text-decoration-none text-center form-control">Continue</button>
                            </form>: type == "item"?
                            <form onSubmit={productFormik.handleSubmit} className='d-flex flex-column gap-2'>
                                <label htmlFor="name">Name
                                    <input type="text" name='name' id='name' onChange={productFormik.handleChange} className={productFormik.errors.name? "is-invalid form-control w-100": "form-control w-100"} />
                                    <small className='text-danger ftw-italic'>{productFormik.errors.name && productFormik.errors.name}</small>
                                </label>
                                <label htmlFor="about">About
                                    <textarea type="text" name='about' id='about' onChange={productFormik.handleChange} className={productFormik.errors.about? "is-invalid form-control w-100": "form-control w-100"} cols={60} rows={3} />
                                    <small className='text-danger ftw-italic'>{productFormik.errors.about && productFormik.errors.about}</small>
                                </label>
                                <label htmlFor="images">Images
                                    <input type="file" accept='image/*' multiple name='images' onChange={productFormik.handleChange} id='images' className={productFormik.errors.images? "is-invalid form-control w-100": "form-control w-100"} />
                                    <small className='text-danger ftw-italic'>{productFormik.errors.images && productFormik.errors.images}</small>
                                </label>
                                <label htmlFor="price">Price ₦
                                    <input type="number" name='price' id='price' onChange={productFormik.handleChange} className={productFormik.errors.price? "is-invalid form-control w-100": "form-control w-100"} />
                                    <small className='text-danger ftw-italic'>{productFormik.errors.price && productFormik.errors.price}</small>
                                </label>
                                <button type='submit' className={productFormik.errors? "disabled text-decoration-none text-center form-control": "text-decoration-none text-center form-control"}>Continue</button>
                            </form>:
                            <div>
                                <p>Kindly select product type</p>
                            </div>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Add