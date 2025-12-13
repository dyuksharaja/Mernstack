import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    useEffect(()=>{
        console.log("Mounted")
    })
    const [count,setCount]= useState(0);
    useEffect(()=>{
        console.log("mounted")
    },[count])
  return (
    <>
    <div>UseEffect</div>
    <h1>{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setCount(count-1)}>Decreament</button>
    <button onClick={()=>setCount(0)}>Reset</button>
    </>
  )
}

export default UseEffect