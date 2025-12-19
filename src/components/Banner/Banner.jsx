import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className="banner-div">
        <div className="overlay">
            <h2 id="banner-title">welcome to our blog website</h2>
        </div>
      <img src="/media/Banner.jpg" />
    </div>
  )
}

export default Banner
