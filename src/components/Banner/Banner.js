import React from 'react'
import '../Banner/banner.css'
import BgImg from '../../assets/banner.jpg'

const Banner = () => {
  return (
    <div>
        <img src={BgImg} className="bannerPic" alt="BannerPic" />
    </div>
  )
}

export default Banner