import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <>
            <h1 className='text-2xl'>
                Aradığınız blog yazısı bulunamadı.
            </h1>
            <div className='mt-4'>
                <div>Diğer blog yazılarına bakmak isteyebilirisiniz:</div>
                <ul className=''>
                    <li>
                        <Link href={"elfeneri-pil"}>Elfenerlerinde pil seçimi</Link>
                    </li>
                    <li>
                        <Link href={"pil-kimyasi"}>Pil Kimyası</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default NotFound