import React, { useState, useEffect } from 'react'
import AddCar from './add-car'
import { carData } from './car-data'

function CarInfo() {
   const [isVisible, setIsVisible] = useState(false)
   const [carDatas, setCarDatas] = useState(carData)
   const [filtered, setFiltered] = useState(carDatas)
   const [filterBy, setFilterBy] = useState("0")
   const [searchText, setSearchText] = useState("")

   useEffect(() => {
      filterEntries()
   }, [searchText])


   const handleDelete = (id) => {
      setCarDatas(carDatas.filter((item) => item.id !== id))
   }

   const filterEntries = () => {
      console.log(searchText)
      switch (filterBy) {
         case "1":
            setFiltered(carDatas.filter((item) => item.car_make.toLowerCase().includes(searchText.toLowerCase())))
            break;
         case "2":
            setFiltered(carDatas.filter((item) => item.car_model.toLowerCase().includes(searchText.toLowerCase())))
            break;
         default:
            setFiltered(carDatas.filter((item) => item.email.toLowerCase().includes(searchText.toLowerCase())))
            break;
      }
   }

   return (
      <div>
         <div className='page-heading'>
            <h1>PEOPLE AND THEIR CARS</h1>
         </div>
         <div>
            {isVisible && <AddCar data={carDatas} setData={(val) => setCarDatas(val)} />}
         </div>
         <div className='actions'>
            <button className='show-button' onClick={() => setIsVisible(current => !current)}>{isVisible ? "Hide Form" : "Show Form "}</button>
            <div className="filter">
               <select onChange={(e) => setFilterBy(e.target.value)} value={filterBy}>
                  <option value="0">Email</option>
                  <option value="1">Car Make</option>
                  <option value="2">Car Model</option>
               </select>
               <input placeholder='search...' value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            </div>
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
                     <th>Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     filtered.map((elem) => (
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
                           <td><button onClick={() => handleDelete(elem.id)}>Delete</button></td>
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

