import React, { useState } from "react";
function AddCar(props) {
   const [carInfo, setCarInfo] = useState({
      id:"",
      first_name: "",
      last_name: "",
      email: "",
      gender: "",
      car_make: "",
      car_model: "",
      car_model_year: "",
      car_vin: "",
      avatar: ""
   })
   const {data, setData} = props

   const handleChange = (e) => {
      const val = e.target.value;
      const field = e.target.id

      setCarInfo({
         ...carInfo,
         [field]: val
      })

      console.log(carInfo);
   }

   const handleSubmit = (e) => {
      e.preventDefault()

      const newData = { ...carInfo, id : `${carInfo.car_vin}-${carInfo.car_model}-${carInfo.car_model_year}`}
      setData([
         newData,
         ...data,
      ])
      setCarInfo({
         id:"",
         first_name: "",
         last_name: "",
         email: "",
         gender: "",
         car_make: "",
         car_model: "",
         car_model_year: "",
         car_vin: "",
         avatar: ""
      })
   }
   return (
      <form onSubmit={handleSubmit}>
         <div>
            <label htmlFor='first_name'>First Name</label>
            <input type='text' id='first_name' placeholder='Enter First Name' onChange={handleChange} value={carInfo.first_name} />
         </div>
         <div>
            <label htmlFor='last_name'>Last Name</label>
            <input type='text' id='last_name' placeholder='Enter Last Name' onChange={handleChange} value={carInfo.last_name} />
         </div>
         <div>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='Enter Email' onChange={handleChange} value={carInfo.email} />
         </div>
         <div>
            <label htmlFor='gender'>Gender</label>
            <input type='text' id='gender' placeholder='Enter Gender' onChange={handleChange} value={carInfo.gender} />
         </div>
         <div>
            <label htmlFor='car_make'>Car Make</label>
            <input type='text' id='car_make' placeholder='Enter Car Make' onChange={handleChange} value={carInfo.car_make} />
         </div>
         <div>
            <label htmlFor='car_model'>Car Model</label>
            <input type='text' id='car_model' placeholder='Enter Car Model' onChange={handleChange} value={carInfo.car_model} />
         </div>
         <div>
            <label htmlFor='car_model_year'>Car Model Year</label>
            <input type='number' id='car_model_year' placeholder='Enter Car Model Year' onChange={handleChange} value={carInfo.car_model_year} />
         </div>
         <div>
            <label htmlFor='car_vin'>Car VIN</label>
            <input type='text' id='car_vin' placeholder='Enter Car Vin' onChange={handleChange} value={carInfo.car_vin} />
         </div>
         <div>
            <label htmlFor='avatar'>Avatar</label>
            <input type='url' id='avatar' placeholder='Enter Link to Avatar' onChange={handleChange} value={carInfo.avatar} />
         </div>
         <div> <button type="submit">Add Entry</button> </div>
      </form>
   )
}
export default AddCar;