import Link from 'next/link'
import React from 'react'

const AboutLayout = ({ children }) => {
  // throw new Error("opps error")
  return (
    <>
      <div>{children}</div>
      <div className='mt-8'>
        <h2 className='mb-4 text-xl font-bold'>Ayrıca beğenebileceğiniz şeyler...</h2>
      </div>

      <ul>
        <li><Link href="blog/elfeneri-pil">elfeneri-pil blog post</Link></li>
        <li><Link href="blog/pil-kimyasi">pil-kimyasi blog post</Link></li>
      </ul>
    </>
  )
}

export default AboutLayout