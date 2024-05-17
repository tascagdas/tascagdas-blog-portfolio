'use client'

import { useState } from "react"

function Card( {children} ) {
  return (
    <div className="border rounded-md border-gray-500">{children} </div>
  )
}

export default function Home() {
  const myName = "cagdas"
  const[buttonText,setButtonText]=useState("Show")



  function handleClick(e) {
    e.preventDefault();

    console.log(buttonText)
      setButtonText(buttonText=='Show'?'Hide':'Show')
    console.log(buttonText)

  }

  return (
    <>
      <div className="p-20 space-y-4">
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
        <button className="btn" onClick={handleClick}>{ buttonText }</button>
      </div>

    </>
  );
}
