import React, { useRef, useState } from 'react'

const Forms1 = () => {
    const [formstate,SetFormState]=useState(null);
    const user=useRef({
 firstname:null,
     lastname:null,
     email:null,
     password:null,
     phonenumber:null,
     country:null,
     DOB:null,
     avatar:null,
     ismarried:null,
     gender:null
    });
    const handleSubmit=(event)=>{
        event.preventDefault();
        const firstName=user.current.firstname.value;
        const lastName=user.current.lastname.value;
        const Email=user.current.email.value;
        const Password=user.current.password.value;
        const PhoneNumber=user.current.phonenumber.value;
        const Country=user.current.country.value;
        const DOb=user.current.DOB.value;
        const Avatar=user.current.avatar.value;
        const isMarried=user.current.ismarried.value;
        const Gender=user.current.gender.value;

        SetFormState({
             firstname:firstName,
     lastname:lastName,
     email:Email,
     password:Password,
     phonenumber:PhoneNumber,
     country:Country,
     DOB:DOb,
     avatar:Avatar,
     ismarried:isMarried,
     gender:Gender
        });
        user.current.firstname.value="";
        user.current.lastname.value="";
        user.current.email.value="";
        user.current.password.value="";
        user.current.phonenumber.value="";
        user.current.country.value="";
        user.current.DOB.value="";
        user.current.avatar.value="";
        user.current.ismarried.value="";
        user.current.gender.value="";
    };
    console.log(formstate);
    console.log("render");
  return (
    <div>
        <div >
        <form action="submit" onSubmit={handleSubmit} className="fm">
            <div className='fn'>
                <div>
                      <label htmlFor="First Name">
               <b>First Name </b> <br></br></label>
                <input type="text" placeholder='First Name' name="firstname"  ref={(element)=>user.current.firstname=element}  />
             </div>
             <div>
                  <label htmlFor="Last Name">
               <b>Last Name</b>  <br></br> </label>
                <input type="text" placeholder='Last Name'name="lastname" ref={(element)=>user.current.lastname=element}  />

             </div>

            </div>
            <div className='em'>
               <label htmlFor="Email">
                <b>Email</b><br></br>
                <input type="email" placeholder='example@gmail.com'  name="email"  ref={(element)=>user.current.email=element} />
            </label>
            </div>
            <div className='ps'>
                <label htmlFor="Password">
                <b>Password</b><br></br>
                <input type="password" placeholder='Password' name="password"  ref={(element)=>user.current.password=element} />
            </label>
            </div>
           <div className='mb'>
             <label htmlFor="Phone Number">
                <b>Phone Number</b><br></br>
                <input type="number" placeholder='PhoneNumber' name="phonenumber" ref={(element)=>user.current.phonenumber=element}   />
            </label>
             <label htmlFor="Country">
                <b>Country</b><br></br>
                <select className='sl'  name="country" ref={(element)=>user.current.country=element} >
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
                <input type="date" placeholder='mm/dd/yyyy'name="DOB" ref={(element)=>user.current.DOB=element}  />
            </label>
            <label htmlFor="Choose Avatar">
               <b>Choose Avatar</b><br></br>
                <input type="file" placeholder='Choose file' name="avatar" ref={(element)=>user.current.avatar=element} />
            </label>
           </div>
            <div className='mr'>
                 <label htmlFor="Select if Married">
               <b>Select if married</b> 
                </label>
                <div>
                 <input type="checkbox" name="ismarried" ref={(element)=>user.current.ismarried=element}  />
                <b>Marriage Status</b>
                </div>
            </div>
           <div className='gen'>
             <label htmlFor="Choose Gender">
               <b>Choose Gender</b> 
            </label>
            <label htmlFor="Male">
                <input type="radio" name="gender" value="male" ref={(element)=>user.current.gender=element} />
                 <b>Male</b> 
            </label>
            <label htmlFor="Female">
                <input type="radio" name="gender" value="female" ref={(element)=>user.current.gender=element}  />
               <b>Female</b> 
            </label>
            <label htmlFor="Other">
                <input type="radio"name="gender"  value="other" ref={(element)=>user.current.gender=element} />
               <b> Other</b> 
            </label>
           </div>
            <input type="submit" className='btn'/>
        </form>
          {formstate&&(
                <div>
                    {Object.entries(formstate).map(([key,value])=>{
                    return <div key={key}> 
                        <strong>{key}:</strong>{value?.toString()}
                     </div>
                    })
                }
                </div>
            )}
    </div>
    </div>
  )
}

export default Forms1