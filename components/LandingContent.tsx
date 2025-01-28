import React from 'react'
import Image from 'next/image'

const LandingContent = () => {
  return (
    <div>
      <Image 
      src='/landing.png'
      alt='an illistration of a review'
      width={500}
      height={600}
      />
    </div>
  )
}

export default LandingContent