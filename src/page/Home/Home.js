import React from 'react'
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Carousel from '../../components/Carousel/Carousel';
import Footer from '../../components/Footer/Footer';
import Section from '../../components/Section/Section';
import Womensvg from '../../assets/women.svg'

const Home = () => {
  
  return (
    <>
    <Navbar/>
    <Banner/>  
    <Carousel/>
    <Section bgImg={"bgWomen"} svgImg={Womensvg} padDirection={"ps-5"}/> 
    <Section bgImg={"bgMen"} rowDirection="flex-row-reverse bd-highlight" padDirection={"pe-5"}/>
    <Section bgImg={"bgKid"} padDirection={"ps-5"}/> 
    <Footer/>
    </>
  )
}

export default Home