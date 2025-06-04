import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route,Routes,useNavigate } from 'react-router-dom'
import Login from './pages/login' 
import Home from './pages/home'
import Orderspage from './pages/ordersPage'
import Favorites from './pages/favorites'
import Signup from './pages/signup'
import { useSelector } from 'react-redux'

function App() {
  const navigate = useNavigate(); 
  const user = useSelector(state=>state.user.user);

  useEffect(()=>{
    navigate('/login');     
  },[])

  return (
    <>
      <Routes>
        <Route path='/login' element={Object.keys(user).length===0?<Login/>:<Home/>}/>
        <Route path='/signup' element={Object.keys(user).length===0?<Signup/>:<Home/>}/>
        <Route path='/home' element={Object.keys(user).length!==0?<Home/>:<Login/>}/>
        <Route path='/orders' element={Object.keys(user).length!==0?<Orderspage/>:<Login/>}/>
        <Route path='/favorites' element={Object.keys(user).length!==0?<Favorites/>:<Login/>}/>
      </Routes>
      
    </>
  )
}

export default App
