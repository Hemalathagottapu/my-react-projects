import React from 'react'
import './TrendingBlogs.css'
import { Link } from 'react-router-dom';
function TrendingBlogs({blog}) {
    let image=' ';
    switch(blog.category){
        case "Travelling":
            image="Travelling.jpg"
            break;
        case "Cooking":
            image="cooking.jpg"
            break;
        case "Programming":
            image="programming.jpg"
            break;
        case "Health":
            image="Health.jpg"
            break;
        case "Workouts":
            image="workout.jpg"
            break;
        default:
            image="Banner.jpg";
            break;
    }
    console.log("line 14 ",blog.category,"->",image)
  return (
    <div>
        <Link to={`/Blogs/${blog.id}`}>
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={`/media/${image}`} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">{blog.title}</h5>
                    <p className="card-text text-muted">{blog.category}</p>
                    <p className="card-text">{blog.previewDescription}</p>
                </div>
            </div>
        </Link>
    </div>
  )
}

export default TrendingBlogs
