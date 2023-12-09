import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Landing from './Landing'
import Topnav from '../Components/Topnav'
import Footer from '../Components/Footer'
import '../Styles/Home.css'
import NotFound from './NotFound'

const Home = () => {
    const navigate = useNavigate()
  return (
    <>
        <div className='w-100 big-div'>
            <Topnav />
            <Routes>
                <Route path="/" element={<Landing />} />
                {/* <Route path='' element={navigate('/')} /> */}
                <Route path="notfound" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    </>
  )
}

export default Home