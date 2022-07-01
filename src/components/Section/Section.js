import React from 'react'
import './section.css'
import Data from '../Data'
 
const Section = ({bgImg, svgImg, rowDirection, padDirection}) => {

  return (
    <div className='container-fluid px-5 my-5'>
      <div className={`row ${bgImg} ${rowDirection}`}>
        <div className={`col-md-6 d-flex flex-wrap mt-5 mb-5 ${padDirection}`}>
          <div className="row gx-3 mb-5">
            {
              Data.map((element, index) => {
                const { img } = element || {}
              return(
                <div className='product-displayer col-md-3' id={index}>
                  <div className="product-image shadow d-flex align-items-center">
                      <img src={img} className="pimage img-fluid" alt="poster-img"/>
                  </div>
                </div>
                )
              })
            }
          </div>
        </div>
        <div className='col-md-6 d-flex justify-content-end align-items-end pb-5 pe-5'>
            {svgImg}
        </div>
      </div>
    </div>
  )
}

export default Section