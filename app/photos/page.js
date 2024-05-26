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
          <div className='grid grid-cols-2 gap-4'>
              <div className='h-60 overflow-hidden'>
                  {/* <img className='object-cover w-full h-full' src="/images/dog1.png" /> */}
                  <Image src={dog1}
                    //   width={500}
                    //   height={500}
                    //   blurDataURL=''
                      placeholder='blur'
                      className='object-cover w-full h-full'
                      alt="picture of Piotr Jura's dog"
                  />
              </div>
              <div className='h-60 overflow-hidden'>
                  <Image src={dog2}
                      placeholder='blur'
                      className='object-cover w-full h-full'
                      alt="picture of Piotr Jura's dog"

                  />
              </div>
              <div className='h-60 overflow-hidden'>
                  <Image src={dog3}
                      placeholder='blur'
                      alt="picture of Piotr Jura's dog"
                      className='object-cover w-full h-full'
                  />
              </div>
              <div className='h-60 overflow-hidden'>
                  <Image src={dog4}
                      placeholder='blur'
                      alt="picture of Piotr Jura's dog"
                      className='object-cover w-full h-full'
                  />
              </div>
          </div>
    </div>
  )
}

export default PhotosPage