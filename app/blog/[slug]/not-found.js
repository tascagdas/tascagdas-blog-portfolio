import React from 'react'

const NotFound = () => {
    return (
        <>
            <h1 className='text-2xl'>
                Aradığınız blog yazısı bulunamadı.
            </h1>
            <div className='mt-4'>
                <div>Diğer blog yazılarına bakmak isteyebilirisinz.</div>
                <ul>
                    <li>First</li>
                    <li>Second</li>
                </ul>
            </div>
        </>
    )
}

export default NotFound