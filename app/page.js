'use client'

import { useState } from "react"

function Card( {children} ) {
  return (
    <div className="border rounded-md border-gray-500">{children} </div>
  )
}

export default function Home() {
  const myName = "cagdas"
  const [isVisible, setIsVisible]=useState(true)

  const cards = isVisible && <>
    <div >
      Hi there, im {myName}
    </div>
    <Card>Deneme Bu yazi parentten</Card>
    <Card >Bu ac kapa yaparak gelmekte</Card>
    <Card>
      <div>
        Bu bir JS
      </div>
      <Card>Buda card seption</Card>
    </Card>
  </>


  function handleClick() {


    setIsVisible(!isVisible)


  }

  return (
    <>
      <div className="p-20 space-y-4">
        {cards}
        <button className="btn" onClick={handleClick}>
          {isVisible?'Hide':'Show'}
        </button>
      </div>

    </>
  );
}
