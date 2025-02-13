import React from 'react'
import Image from 'next/image'

const testimonials = [
  { img: '/testimonial.png', name: 'Jessica Page', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.  Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel'},
  { img: '/testimonial1.png', name: 'Evan White', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.  Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel'},
  { img: '/testimonial2.png', name: 'Olivia Cole', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel.  Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel'}
] 

const Testimonials = () => {
  return (
    <div className='flex justify-center items-center flex-col mb-20 px-44'>
      <h1 className='text-2xl text-black'>
        TESTIMONIALS
      </h1>
      <h2 className='text-4xl font-bold text-black pb-16'>
        Read what others have to say
      </h2>
      <div className='grid grid-cols-3 grid-rows-1 gap-12'>
        {testimonials.map((review, index) => (
          <div key={index} className='relative flex items-center bg-[#FFC41F]/50 rounded-lg shadow-md text-black flex-col py-5 px-12 text-center'>
            <div className='absolute -top-10'>
              <Image 
                className='w-20 h-20 p-1 object-contain rounded-full shrink-0'
                src={review.img}
                alt={`Review from ${review.name}`}
                width={40}
                height={40}
              />
            </div>
            <h1 className='text-2xl pt-5 pb-3'>
              {review.name}
            </h1>
            <h2 className='text-sm'>
              {review.comment}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
