import React from 'react'
import './Home.css'
import Banner from '../../components/Banner/Banner'
import TrendingBlogs from '../../components/TrendingBlogs/TrendingBlogs'
import blogs from '../../Utils/MockData'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
        <Banner/>
        <div className="my-2">
            <h3>read blogs from</h3>
            <div className="d-flex justify-content-between">
                <Link to={'/Blogs/programming'}>
                    <div className="card" style={{width:'18rem',height:'180px'}}>
                        <img className="card-img-top" src="/media/programming.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">programming</h5>
                        </div>
                    </div>
                </Link>
                <Link to={'/Blogs/Cooking'}>
                    <div className="card" style={{width:'18rem',height:'180px'}}>
                        <img className="card-img-top" src="/media/cooking.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">Cooking</h5>
                        </div>
                    </div>
                </Link>
                <Link to={'/Blogs/Workouts'}>
                    <div className="card" style={{width:'18rem',height:'180px'}}>
                        <img className="card-img-top" src="/media/Fitness.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">fitness</h5>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
        <div className="Trending blog section">

            <h3>Trending Blogs</h3>
            <div className="all-trending-blogs d-flex justify-content-between flex-wrap row-gap-2">
                {
                    
                    blogs.map(blog=>
                        <TrendingBlogs key={blog.id} blog={blog}/>
                    )
                }
                
                
            </div>
        </div>
    </div>
  )
}

export default Home


