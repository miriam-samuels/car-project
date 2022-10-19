import React from 'react'

import { carData } from './car-data'

function CarInfo() {
   return (
      <div>
         <div className='page-heading'>
            <h1>PEOPLE AND THEIR CARS</h1>
         </div>
         <div>
            <table>
               <thead>
                  <tr>
                     <th>Avatar</th>
                     <th>First Name</th>
                     <th>Last Name</th>
                     <th>Email</th>
                     <th>Gender</th>
                     <th>Car Make</th>
                     <th>Car Model</th>
                     <th>Car Model Year</th>
                     <th>Car VIN</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     carData.map((elem) => (
                        <tr key={elem.id}>
                           <td><img src={elem.avatar} alt="img" /></td>
                           <td>{elem.first_name}</td>
                           <td>{elem.last_name}</td>
                           <td>{elem.email}</td>
                           <td>{elem.gender}</td>
                           <td>{elem.car_make}</td>
                           <td>{elem.car_model}</td>
                           <td>{elem.car_model_year}</td>
                           <td>{elem.car_vin}</td>
                        </tr>
                     ))
                  }
               </tbody>
            </table>
         </div>
      </div>
   )
}

export default CarInfo

