import React from 'react'

import dog1 from './../../public/images/dog1.png'
import dedome from './../../public/images/dedome.png'
import dedomed from './../../public/images/dedomed.png'
import fener3 from './../../public/images/tool-aa-2.0-ti.png'
import fener4 from './../../public/images/m2rpro.png'
import fener5 from './../../public/images/mt7.png'
import olcum from './../../public/images/lumen-olcum.png'
import fener2 from './../../public/images/tool-aas.png'

import Image from 'next/image'
import H1 from '@/components/h1'

const PhotosPage = () => {
    return (
        <div>
            <H1>Fotoğraflar</H1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div className='h-60 overflow-hidden relative'>
                    <Image src={dog1}
                        sizes='(max-width: 768px) 100vw, 50vw'
                        placeholder='blur'
                        className='object-cover w-full h-full'
                        alt="picture of Piotr Jura's dog"
                        priority={true}
                        quality={50}
                    />
                </div>
                <div className='h-60 overflow-hidden relative'>
                    <Image src={fener4}
                        sizes='(max-width: 768px) 100vw, 50vw'
                        placeholder='blur'
                        className='object-cover w-full h-full'
                        alt="picture of Piotr Jura's dog"
                        priority={true}
                        quality={50}

                    />
                </div>
                <div className='h-60 overflow-hidden relative'>
                    <Image src={fener2}
                        sizes='(max-width: 768px) 100vw, 50vw'
                        placeholder='blur'
                        alt="picture of Piotr Jura's dog"
                        className='object-cover w-full h-full'
                        quality={50}

                    />
                </div>
                <div className='h-60 overflow-hidden relative'>
                    <Image src={fener3}
                        sizes='(max-width: 768px) 100vw, 50vw'
                        placeholder='blur'
                        alt="picture of Piotr Jura's dog"
                        className='object-cover w-full h-full'
                        quality={50}
                    />
                </div>
                <div className='h-60 overflow-hidden relative'>
                    <Image src={dedome}
                        sizes='(max-width: 768px) 100vw, 50vw'
                        placeholder='blur'
                        alt="picture of Piotr Jura's dog"
                        className='object-cover w-full h-full'
                        quality={50}
                    />
                </div>
                <div className='h-60 overflow-hidden relative'>
                    <Image src={dedomed}
                        sizes='(max-width: 768px) 100vw, 50vw'
                        placeholder='blur'
                        alt="picture of Piotr Jura's dog"
                        className='object-cover w-full h-full'
                        quality={50}
                    />
                </div>
                <div className='h-60 overflow-hidden relative'>
                    <Image src={olcum}
                        sizes='(max-width: 768px) 100vw, 50vw'
                        placeholder='blur'
                        alt="picture of Piotr Jura's dog"
                        className='object-cover w-full h-full'
                        quality={50}
                    />
                </div>
                <div className='h-60 overflow-hidden relative'>
                    <Image src={fener5}
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