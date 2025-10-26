import React, { useState } from 'react'
import './User.css';
const Forms = () => {
  const formstate={
     firstname:"",
     lastname:"",
     email:"",
     password:"",
     phonenumber:"",
     country:"",
     DOB:"",
     avatar:"",
     ismarried:"",
     gender:""
  };
  const [form,SetForm]=useState(formstate);
  const handleChange=(event)=>{
    const {name,value}=event.target;
    SetForm({...form,[name]:value});
    console.log(form);
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log("render");
    SetForm(formstate);
  }
  return (
    <div >
        <form action="submit" onSubmit={handleSubmit} className="fm">
            <div className='fn'>
                <div>
                      <label htmlFor="First Name">
               <b>First Name </b> <br></br></label>
                <input type="text" placeholder='First Name' name="firstname" value={form.firstname}onChange={handleChange} />
             </div>
             <div>
                  <label htmlFor="Last Name">
               <b>Last Name</b>  <br></br> </label>
                <input type="text" placeholder='Last Name'name="lastname" value={form.lastname} onChange={handleChange}/>

             </div>

            </div>
            <div className='em'>
               <label htmlFor="Email">
                <b>Email</b><br></br>
                <input type="email" placeholder='example@gmail.com' value={form.email} name="email" onChange={handleChange}/>
            </label>
            </div>
            <div className='ps'>
                <label htmlFor="Password">
                <b>Password</b><br></br>
                <input type="password" placeholder='Password' name="password"value={form.password} onChange={handleChange}/>
            </label>
            </div>
           <div className='mb'>
             <label htmlFor="Phone Number">
                <b>Phone Number</b><br></br>
                <input type="number" placeholder='PhoneNumber' name="phonenumber"  value={form.phonenumber} onChange={handleChange}/>
            </label>
             <label htmlFor="Country">
                <b>Country</b><br></br>
                <select className='sl' onChange={handleChange} value={form.country} name="country">
                    <option value="" >Select an option</option>
                    <option value="USA">USA</option>
<option value="UK">UK</option>
<option value="India">India</option>
<option value="Canada">Canada</option>
<option value="France">France</option>
<option value="Germany">Germany</option>
<option value="Japan">Japan</option>
<option value="Italy">Italy</option>
<option value="Spain">Spain</option>
<option value="Russia">Russia</option>
<option value="Brazil">Brazil</option>
<option value="China">China</option>
<option value="Indonesia">Indonesia</option>
<option value="Malaysia">Malaysia</option>
</select>
            </label>
           </div>
           <div className='bd'>
             <label htmlFor="Birth Date">
               <b>Birth Date</b> <br></br>
                <input type="date" placeholder='mm/dd/yyyy'name="DOB" value={form.DOB} onChange={handleChange}/>
            </label>
            <label htmlFor="Choose Avatar">
               <b>Choose Avatar</b><br></br>
                <input type="file" placeholder='Choose file' name="avatar" value={form.avatar} onChange={handleChange}/>
            </label>
           </div>
            <div className='mr'>
                 <label htmlFor="Select if Married">
               <b>Select if married</b> 
                </label>
                <div>
                 <input type="checkbox" name="ismarried" value={form.ismarried} onChange={handleChange}/>
                <b>Marriage Status</b>
                </div>
            </div>
           <div className='gen'>
             <label htmlFor="Choose Gender">
               <b>Choose Gender</b> 
            </label>
            <label htmlFor="Male">
                <input type="radio" name="gender" value={form.gender} onChange={handleChange}/>
                 <b>Male</b> 
            </label>
            <label htmlFor="Female">
                <input type="radio" name="gender" value={form.gender} onChange={handleChange}/>
               <b>Female</b> 
            </label>
            <label htmlFor="Other">
                <input type="radio"name="gender" value={form.gender}   onChange={handleChange}/>
               <b> Other</b> 
            </label>
           </div>
            <input type="submit" className='btn'/>
        </form>
    </div>
  )
}

export default Forms