import React from 'react'
import Data from '../Data'

const Section = () => {
  return (
    Data.map((elem, index) => {
    return (
      <div className='container' id={index}> 
        <div className='row'>
          <img src={elem.img} alt={elem.text} />
          <h1>{elem.text}</h1>
        </div>
      </div>
      )
    })
  )
}

export default Section