import React, { useState } from "react";
import { getStorage, ref, uploadString, getDownloadURL, uploadBytes, list, listAll } from "firebase/storage";
import { db, imageDb } from '../Firebase';
import { ToastContainer, toast } from 'react-toastify';
import { v4 } from 'uuid';
import { collection, getDocs } from "firebase/firestore";
import { failedFechingBooks, fetchingBooks, fetchingBooksSuccess } from "../Redux/BookSlice";
import { failedFechingProducts, fetchingProducts, fetchingProductsSuccess } from "../Redux/productSlice";


// UPLOAD FRONTCOVER IMAGE
export const frontCover = async (e) => {
    const id = `images/${v4()}`
    const imageRef = ref(imageDb, id)
    const img = e.target.files[0]

    try {
        const uploadTaskSnapshot = await uploadBytes(imageRef, img);
        const downloadURL = await getDownloadURL(uploadTaskSnapshot.ref);
        console.log(downloadURL);
        return downloadURL
    } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Error uploading image")
    }
};

// UPLOAD OTHER IMAGES
export const images = async(e) => {
    const imgs = e.target.files
    const id = `images/${v4()}`
    const imageRef = ref(imageDb, id)
    let urls = []

    console.log(imgs);
    for (let i = 0; i < imgs.length; i++) {
        try {
            const uploadTaskSnapshot = await uploadBytes(imageRef, imgs[i]);
            const downloadURL = await getDownloadURL(uploadTaskSnapshot.ref);
            console.log(downloadURL);
            urls = [...urls, downloadURL]
            if (i == imgs.length -1) {
                return urls
            }
        } catch (error) {
            console.error("Error uploading image:", error);
            toast.error("Error uploading image")
        }
    };
}

// DISPLAY BOOKS
export const getBooks = async(dispatch) => {
    dispatch(fetchingBooks())
    try {
        const allBooks = []
        const docRef = collection(db, 'Books')
        getDocs(docRef).then((docSnap)=>{
            // console.log(docSnap.docs[0].data());
            if (docSnap.empty) {
                console.log('No matching documents.');
                dispatch(failedFechingBooks('No Books here'))
                return;
            } else {
            docSnap.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                allBooks.push({id: doc.id, data: doc.data()})
            });
            dispatch(fetchingBooksSuccess(allBooks))
            }
        }).catch((err)=>{
            console.log(err);
            dispatch(failedFechingBooks(err.message))
        })
    } catch (error) {
        console.log(error);
        dispatch(failedFechingBooks(error.message))
    }
}

export const getProducts = async(dispatch) => {
    dispatch(fetchingProducts())
    try {
        const allBooks = []
        const docRef = collection(db, 'Products')
        getDocs(docRef).then((docSnap)=>{
            // console.log(docSnap.docs[0].data());
            if (docSnap.empty) {
                console.log('No matching documents.');
                dispatch(failedFechingProducts('No products here'))
                return;
            } else {
            docSnap.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
                allBooks.push({id: doc.id, data: doc.data()})
            });
            dispatch(fetchingProductsSuccess(allBooks))
            }
        }).catch((err)=>{
            console.log(err);
            dispatch(failedFechingProducts(err.message))
        })
    } catch (error) {
        console.log(error);
        dispatch(failedFechingProducts(error.message))
    }
}