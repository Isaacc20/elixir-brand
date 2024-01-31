import React, { useState } from "react";
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';
import { getStorage, ref, uploadString, getDownloadURL, uploadBytes, list, listAll } from "firebase/storage";
import { db, imageDb } from '../Firebase';
import { ToastContainer, toast } from 'react-toastify';
import { v4 } from 'uuid';

export const frontCover = async (e) => {
    const id = `images/${v4()}`
    const imageRef = ref(imageDb, id)
    const img = e.target.files[0]

    try {
        const uploadTaskSnapshot = await uploadBytes(imageRef, img);
        const downloadURL = await getDownloadURL(uploadTaskSnapshot.ref);
        console.log(downloadURL);
        bookFormik.setFieldValue('front', downloadURL);
    } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Error uploading image")
    }
};

export const images = async(e) => {
    const imgs = e.target.files
    console.log(imgs);
}

export const saveBook = async(values) => {
    console.log(values);
    const booksCollection = collection(db, 'Books');
    await addDoc(booksCollection, values).then((res)=>{
        console.log(res);
        setisLoading(false)
        toast.success('Product added')
        
        setTimeout(() => {
            navigate('/admin/dashboard')
        }, 5000);
    }).catch((err)=>{
        console.log(err);
        setisLoading(false)
        toast.error('Something went wrong')
    })
}

export const saveProduct = async(values) => {
    console.log(values);
    const productsCollection = collection(db, 'Products');
    await addDoc(productsCollection, values).then((res)=>{
        console.log(res);
        setisLoading(false)
        toast.success("Product added")
        setTimeout(() => {
            navigate('/admin/dashboard')
        }, 5000);
    }).catch((err)=>{
        console.log(err);
        setisLoading(false)
        toast.error('Something went wrong')
    })
}