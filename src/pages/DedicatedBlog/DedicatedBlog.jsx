import React from 'react'
import './DedicatedBlog.css'
import Banner from '../../components/Banner/Banner'
import { useState,useEffect } from 'react'
import blogs from '../../Utils/MockData'
import { useParams } from 'react-router-dom'
function DedicatedBlog() {
    const [blogID,setBlogID]=useState(2)
    const [blog,setBlog]=useState(' ');
    let blogToDisplay=blogs.filter(blog=>blog.id==blogID)[0]
    const {id}=useParams()
    console.log(blogToDisplay)
    useEffect(()=>{
        if(id){
            setBlogID(id)
        }
    },[])
  return (
    <div>
      <Banner/>
      <h1>{blogToDisplay.title}</h1>
      <h4>{blogToDisplay.category}</h4>
      <p>{blogToDisplay.content}</p>
    </div>
  )
}

export default DedicatedBlog
