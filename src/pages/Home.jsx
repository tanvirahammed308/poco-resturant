import React from 'react'
import Hero from '../components/home/Hero'
import TodaySpecial from '../components/home/TodaySpecial'
import Popular from '../components/home/Popular'

const Home = () => {
  return (
    <div>
        <Hero/>
        <TodaySpecial/>
        <Popular/>
    </div>
  )
}

export default Home