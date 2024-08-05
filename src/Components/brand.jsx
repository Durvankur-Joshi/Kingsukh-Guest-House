import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Brand = () => {
  return (
    <>
     <TypeAnimation
      sequence={[
       
        ' Kingsukh Guest House',
        1000, 
        'Kingsukh Guest House',
        
        
        
      ]}
      wrapper="span"
      speed={50}
      className=' text-2xl  md:text-3xl  md:pl-20  '
      style={{ fontFamily:'Metal Mania' }}
      repeat={0}
    />
    </>
  )
}

export default Brand