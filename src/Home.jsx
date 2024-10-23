import React from 'react'
import Slider from './Slider'
import Benefits from './Benefits'
import Contactus from './Contactus'
import Problemsadd from './Problemsadd'
import Developers from './Developers'
import Solution from './Solution'
const Home = () => {
  return (
    <div>
      <Slider/>
      <Benefits/>
      <Problemsadd/>
      
      <Solution/>   
      <Developers/>
      <Contactus/>
    </div>
  )
}

export default Home