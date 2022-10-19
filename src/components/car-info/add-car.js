function AddCar() {
   return (
      <form>
         <div>
            <label htmlFor='first_name'>First Name</label>
            <input type='text' id='first_name' placeholder='Enter First Name' />
         </div>
         <div>
            <label htmlFor='last_name'>Last Name</label>
            <input type='text' id='last_name' placeholder='Enter Last Name' />
         </div>
         <div>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' placeholder='Enter Email' />
         </div>
         <div>
            <label htmlFor='gender'>Gender</label>
            <input type='text' id='gender' placeholder='Enter Gender' />
         </div>
         <div>
            <label htmlFor='car_make'>Car Make</label>
            <input type='text' id='car_make' placeholder='Enter Car Make' />
         </div>
         <div>
            <label htmlFor='car_model'>Car Model</label>
            <input type='text' id='car_model' placeholder='Enter Car Model' />
         </div>
         <div>
            <label htmlFor='car_model_year'>Car Model Year</label>
            <input type='number' id='car_model_year' placeholder='Enter Car Model Year' />
         </div>
         <div>
            <label htmlFor='car_vin'>Car VIN</label>
            <input type='text' id='car_vin' placeholder='Enter Car Vin' />
         </div>
         <div>
            <label htmlFor='avatar'>Avatar</label>
            <input type='url' id='avatar' placeholder='Enter Link to Avatar' />
         </div>
         <div> <button type="submit">Add Entry</button> </div>
      </form>
   )}
export default AddCar;