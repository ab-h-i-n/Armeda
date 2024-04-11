import React from 'react'
import HeroSection from '../Components/Home/HeroSection'
import SecondSection from '../Components/Home/SecondSection'
import ThirdSection from '../Components/Home/ThirdSection'
import FourthSection from '../Components/Home/FourthSection'


const HomePage = () => {
  return (
    <div className='bg-black '>
        <HeroSection/>
        <SecondSection/>
        <ThirdSection/>
        <FourthSection/>

    </div>
  )
}

export default HomePage