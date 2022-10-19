import React, { useEffect, useState } from 'react'

function FuncLifecycle() {

   const [time, setTime] = useState(new Date())
   const [clicked, setClicked] = useState(0)

   useEffect(() => {
      const timer = setInterval(() => {
         setTime(new Date())
      }, 1000);

      return () => {
         clearInterval(timer)
      }
   },[])

   useEffect(() => {
      console.log(clicked)
   },[clicked])
   


   return (
      <div>
         <h4> {time.toLocaleTimeString()}</h4>
         <button onClick={() => setClicked(prev => prev + 1)}>Click ME</button>
      </div>
   )
}

export default FuncLifecycle