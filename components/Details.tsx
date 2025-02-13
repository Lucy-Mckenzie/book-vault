import React from 'react'
import Image from 'next/image'

const cards = [
  { img: '/bookVector.png', title: 'SEARCH BOOKS', section1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.  Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel', section2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ' },
  { img: '/saveVector.png', title: 'SAVE BOOKS', section1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.  Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel', section2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ' },
  { img: '/yinVector.png', title: 'FIND SIMILAR BOOKS', section1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.  Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel', section2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. ' },
]

const Details = () => {
  return (
    <div className='flex justify-center items-center flex-col mb-20 px-44 pt-40'>
      <div className='bg-gradient-to-r from-[#4F67B1]/30 to-[#FFC41F]/30 p-5 rounded-3xl shadow-lg'>
        <div className='grid grid-cols-3 gap-5'>
          {cards.map((section, index) => (
            <div key={index} className='flex items-center bg-white shadow-md text-black flex-col pt-4 pb-10 px-12 text-center rounded-md'>
              <div className='m-5 items-center justify-center flex flex-row space-x-6'>
                <Image 
                  className='w-18 h-18 p-1 object-contain shrink-0'
                  src={section.img}
                  alt={`Info about ${section.title}`}
                  width={60}
                  height={60}
                />
                <h1 className='text-xl font-semibold'>
                  {section.title}
                </h1>
              </div>
              <p className='text-gray-600 text-base leading-relaxed pb-4'>
                {section.section1}
              </p>
              <p className='text-gray-600 text-base leading-relaxed'>
                {section.section2}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Details
