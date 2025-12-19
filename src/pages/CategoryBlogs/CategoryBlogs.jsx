import React from 'react'

import Banner from '../../components/Banner/Banner'
import TrendingBlogs from '../../components/TrendingBlogs/TrendingBlogs'
import blogs from '../../Utils/MockData'
import './categoryBlogs.css'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
function CategoryBlogs() {
    const [currentCategory,setCurrentCategory]=useState('Programming')
    const {category}=useParams();
    console.log("line 11 ..",category)
    useEffect(()=>{
        if(category){
            setCurrentCategory(category)
        }
    },[])
  return (
    <div>
        <Banner/>
        
        <div className="Trending blog section">

            <h3>{currentCategory}</h3>
            <div className="all-trending-blogs d-flex justify-content-between flex-wrap row-gap-2">
                {
                    
                    blogs.map(blog=>blog.category==currentCategory && 
                        <TrendingBlogs key={blog.id} blog={blog}/>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default CategoryBlogs


