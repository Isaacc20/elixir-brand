import React from 'react'
import { Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import Dashboard from './Dashboard'
import Login from './Login'

const Admin = () => {
    const navigate = useNavigate()
  return (
    <>
        <Outlet />
    </>
  )
}

export default Admin