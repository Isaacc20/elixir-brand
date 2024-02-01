import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { MdOutlinePayments } from "react-icons/md";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';

const Dashboard = () => {
    const [currentUser, setcurrentUser] = useState(null)
    const navigate = useNavigate()
    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              console.log(user);
              setcurrentUser(user.providerData[0])
              // ...
            } else {
              // User is signed out
              // ...
              console.log('Logged out');
              navigate('/admin/login')
            }
          });
    }, [])
    
    const logOut = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
        toast.success("Logged out")
        setTimeout(() => {
            navigate('/')
        }, 5000);
        }).catch((error) => {
        // An error happened.
        console.log(error);
        toast.error("Oops, something went wrong")
        });
    }

  return (
    <>
        <div className="dashboard">
            <ToastContainer />
            <div className='div'>
                <div className="w-100 d-flex justify-content-between align-items-center py-3">
                    <div className="bg-white rounded-end-3 px-3 py-2">
                        <div className="d-flex align-items-stretch gap-2">
                            <FaUserAlt className='h1 p-1 bg-secondary rounded-circle' />
                            <div>
                                <span className='fw-bold'>{currentUser && currentUser.displayName}</span>
                                <small className='d-flex align-items-center justify-content-between'>{currentUser && currentUser.email}</small>
                                <small className='d-flex align-items-center justify-content-between'>{currentUser && currentUser.phoneNumber}</small>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-start-3 px-3 py-2">
                        <button className='btn fw-bold text-danger' onClick={logOut}>Log out</button>
                        {/* <small className='d-flex align-items-center justify-content-between w-100'>somebodyid24 <h3>››</h3></small> */}
                    </div>
                </div>
                <div className="main w-100 d-flex align-items-center">
                    <div className="w-100 d-flex flex-wrap align-items-stretch justify-content-center gap-5">
                        <Link to={'upload'} className='bg-white rounded-2 text-black text-decoration-none d-flex flex-column align-items-center justify-content-center shadow gap-3'>
                            <GrAdd className='icon p-3 rounded-circle' />
                            <span>Upload Product</span>
                        </Link>
                        <Link to={'orders'} className='bg-white rounded-2 text-black text-decoration-none d-flex flex-column align-items-center justify-content-center shadow gap-3'>
                            <MdOutlinePayments className='icon p-3 rounded-circle' />
                            <span>View orders</span>
                        </Link>
                    </div>
                    {/* <Outlet /> */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard