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

  const [names,setNames]= useState(['cdg','sln','bnr'])
  const cards = isVisible && names.map((name,index) => <Card key={index}>{name }</Card>)


  function handleClick() {


    setIsVisible(!isVisible)


  }
  const handleAdd=()=>{
    setNames([...names,'Yeni eklenen'])
  }

  return (
    <>
      <div className="p-20 space-y-4">
        {cards}
        <div className="flex space-x-4">
          <button className="btn" onClick={handleClick}>
            {isVisible ? 'Hide' : 'Show'}
          </button>
          <button onClick={handleAdd}>Add</button>
</div>
      </div>

    </>
  );
}
