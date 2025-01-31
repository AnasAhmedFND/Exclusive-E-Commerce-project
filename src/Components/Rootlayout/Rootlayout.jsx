import React from 'react'
import Header from '../Header'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'


const Rootlayout = () => {
  return (
    <div>
      <Header/>
      <Navbar/>
      
      <Outlet />
    </div>
  )
}

export default Rootlayout
