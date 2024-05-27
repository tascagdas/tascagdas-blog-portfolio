import React from 'react'

import dog1 from './../../public/images/dog1.png'
import dog2 from './../../public/images/dog2.png'
import dog3 from './../../public/images/dog3.png'
import dog4 from './../../public/images/dog4.png'
import Image from 'next/image'

const PhotosPage = () => {
  return (
      <div>
          <h1 className='text-2xl mb-8 font-semibold'>
              
          </h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='h-60 overflow-hidden relative'>
                  <Image src={dog1}
                      sizes='(max-width: 768px) 100vw, 50vw'
                      placeholder='blur'
                      className='object-cover w-full h-full'
                      alt="picture of Piotr Jura's dog"
                      priority={true}
                      quality={100}
                  />
              </div>
              <div className='h-60 overflow-hidden relative'>
                  <Image src={dog2}
                      sizes='(max-width: 768px) 100vw, 50vw'
                      placeholder='blur'
                      className='object-cover w-full h-full'
                      alt="picture of Piotr Jura's dog"
                      priority={true}
                      quality={50}

                  />
              </div>
              <div className='h-60 overflow-hidden relative'>
                  <Image src={dog3}
                      sizes='(max-width: 768px) 100vw, 50vw'
                      placeholder='blur'
                      alt="picture of Piotr Jura's dog"
                      className='object-cover w-full h-full'
                      quality={50}

                  />
              </div>
              <div className='h-60 overflow-hidden relative'>
                  <Image src={dog4}
                      sizes='(max-width: 768px) 100vw, 50vw'
                      placeholder='blur'
                      alt="picture of Piotr Jura's dog"
                      className='object-cover w-full h-full'
                      quality={50}
                  />
              </div>
          </div>
    </div>
  )
}

export default PhotosPage