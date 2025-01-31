import { useState } from 'react'

import './App.css'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Rootlayout from './Components/Rootlayout/Rootlayout'
import Home from './Components/Pageas/Home'
import About from './Components/Pageas/About'

function App() {
 let myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Rootlayout/> } >
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />

    </Route>

  )
 )

  return (
    <>
    <RouterProvider router={myRouter}/>

    </>
  )


}

export default App
