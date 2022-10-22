import React from 'react'
import { Link } from 'react-router-dom'

import ClassLifecycle from '../lifecycle/class'
function Landing() {
   const styles = { display: "flex", alignItems: "center", justifyContent: "center", height: "80vh" }
   const shouldRedirect = true
   return (
      <div style={styles} className="landing-info">
         <div>
            <h1>Welcome to our database</h1>
            <p>this database is about people and their cars</p>
            <ClassLifecycle />
            <Link to="/database"><button >Go To Database</button></Link>

         </div>
      </div>

   )
}

export default Landing