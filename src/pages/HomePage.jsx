import React from 'react'
import HeroSection from '../Components/Home/HeroSection'
import SecondSection from '../Components/Home/SecondSection'
import ThirdSection from '../Components/Home/ThirdSection'
import FourthSection from '../Components/Home/FourthSection'
import FifthSection from '../Components/Home/FifthSection'

const HomePage = () => {
  return (
    <div className='bg-black min-h-[300vh]'>
        <HeroSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>
        <FifthSection/>
    </div>
  )
}

export default HomePage