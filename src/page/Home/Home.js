import React from 'react'
import Navbar from '../../components/Navabr/Navbar';
import Banner from '../../components/Banner/Banner';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import Section from '../../components/Section/Section';

const Home = () => {
  return (
    <>
    <Navbar/>
    <Banner/>  
    <Carousel/>
    <Section/>  
    <Footer/>
    </>
  )
}

export default Home