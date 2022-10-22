import React, { useState, useEffect } from 'react'

function FuncLifecycle() {

   const [time, setTime] = useState(new Date())
   const [count, setCount] = useState(0)

   useEffect(() => {
      const timer = setInterval(() => {
         setTime(new Date())
      }, 1000)

      return () => {
         clearInterval(timer)
      }
   }, [])

   useEffect(() => {
      console.log("hey, this component updated")
   },[count])



   return (
      <div>
         <h1>{time.toLocaleTimeString()}</h1>
         <p>{count}</p>
         <button onClick={() => setCount(current => current + 1)}>Click Me</button>
      </div>
   )
}

export default FuncLifecycle