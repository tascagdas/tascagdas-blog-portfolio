import React from 'react'

const PhotosPage = () => {
  return (
      <div>
          <h1 className='text-2xl mb-8 font-semibold'>
              
          </h1>
          <div className='grid grid-cols-2 gap-4'>
              <div className='h-60 overflow-hidden'>
                  <img className='object-cover w-full h-full' src="/images/dog1.png" />
              </div>
              <div className='h-60 overflow-hidden'>
                  <img className='object-cover w-full h-full' src="/images/dog2.png" />
              </div>
              <div className='h-60 overflow-hidden'>
                  <img className='object-cover w-full h-full' src="/images/dog3.png" />
              </div>
              <div className='h-60 overflow-hidden'>
                  <img className='object-cover w-full h-full' src="/images/dog4.png" />
              </div>
          </div>
    </div>
  )
}

export default PhotosPage