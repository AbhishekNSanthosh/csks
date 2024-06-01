import React from 'react'
import styles from './AboutUs.module.css'
import { Navbar } from '../../Components/Navbar/Navbar'
import { AboutUsComponent } from '../../Components/AboutUs/AboutUs'
import { Footer } from '../../Components/Footer/Footer'

export const AboutUs = () => {
  return (
    <>
        <Navbar/>
        <AboutUsComponent/>
        <Footer/>
    </>
  )
}
