import React from 'react'
import { BrowserRouter , Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import  Products from '../pages/Products'
import Navbar from '../components/Navbar/Navbar'
import Register from '../pages/Register'
export default function Router() {
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contribuir" element={<Products/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

        </Routes>
    </BrowserRouter>
  )
}
