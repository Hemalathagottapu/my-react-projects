import { useState } from 'react';

import './App.css';
import Login from './pages/Login/Login';
import Registration from './pages/Registration/Registration'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import CategoryBlogs from './pages/CategoryBlogs/CategoryBlogs';
import DedicatedBlog from './pages/DedicatedBlog/DedicatedBlog';
import { Route,Routes } from 'react-router-dom';
function App() {
 
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Registration' element={<Registration/>}/>
        <Route path='/Blogs/:category' element={<CategoryBlogs/>}/>
        <Route path='/Blogs/:id' element={<DedicatedBlog/>}/>
      </Routes>
      <Footer/>
     
    
    </div>
  )
}

export default App
