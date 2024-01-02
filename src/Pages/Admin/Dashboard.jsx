import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";
import { GrAdd } from "react-icons/gr";
import { MdOutlinePayments } from "react-icons/md";

const Dashboard = () => {
  return (
    <>
        <div className="dashboard">
            <div className='div'>
                <div className="w-100 d-flex justify-content-between align-items-center py-3">
                    <div className="bg-white rounded-end-3 px-3 py-2">
                        <div className="d-flex align-items-stretch gap-2">
                            <FaUserAlt className='h1 p-1 bg-secondary rounded-circle' />
                            <div>
                                <span className='fw-bold'>Somebody's Name</span>
                                <small className='d-flex align-items-center justify-content-between'>somebodyid24</small>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-start-3 px-3 py-2">
                        <Link>Register new admin</Link>
                        {/* <small className='d-flex align-items-center justify-content-between w-100'>somebodyid24 <h3>››</h3></small> */}
                    </div>
                </div>
                <div className="main w-100 d-flex align-items-center">
                    <div className="w-100 d-flex flex-wrap align-items-stretch justify-content-center gap-5">
                        <Link to={'add-item'} className='bg-white rounded-2 text-black text-decoration-none d-flex flex-column align-items-center justify-content-center shadow gap-3'>
                            <GrAdd className='icon p-3 rounded-circle' />
                            <span>Add item</span>
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