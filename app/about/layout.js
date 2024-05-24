import React from 'react'

const AboutLayout = ({ children }) => {
  // throw new Error("opps error")
  return (
    <>
      <div>{children}</div>
      <div className='mt-8'>
        <h2 className='mb-4 text-xl'>Ayrıca beğenebileceğiniz şeyler...</h2>
      </div>

      <ul>
        <li>First blog post</li>
        <li>Second blog post</li>
      </ul>
    </>
  )
}

export default AboutLayout