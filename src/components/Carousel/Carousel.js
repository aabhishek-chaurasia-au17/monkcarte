import React from 'react'
import './carousel.css'

const Carousel = () => {
  return (
    <div id="carouselExampleDark" class="carousel carousel-dark slide container" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
            <div class="w-100 p-5">
                <p className='quote-text'>Fashion is part of the daily air and it changes all the time, with all the events. You can even see the approaching of a revolution in clothes. You can see and feel everything in clothes  <b>— Diana Vreeland</b></p>
            </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
            <div class="w-100 p-5">
                <p className='quote-text'>What you wear is how you present yourself to the world, especially today, when human contacts are so quick. Fashion is instant language. <b>— Miuccia Prada</b></p>
            </div>
            </div>
            <div class="carousel-item">
            <div class="w-100 p-5">
                <p className='quote-text'>You can have anything you want in life if you dress for it. <b>— Edith Head</b></p>
            </div>
            </div>
        </div>
        </div>
  )
}

export default Carousel