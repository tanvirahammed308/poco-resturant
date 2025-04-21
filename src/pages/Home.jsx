import React from 'react'
import Hero from '../components/home/Hero'
import TodaySpecial from '../components/home/TodaySpecial'
import Popular from '../components/home/Popular'
import Testimonial from '../components/home/Testimonial'
import Chef from '../components/home/Chef'

const Home = () => {
  return (
    <div>
        <Hero/>
        <TodaySpecial/>
        <Popular/>
        <Testimonial/>
        <Chef/>
    </div>
  )
}

export default Home