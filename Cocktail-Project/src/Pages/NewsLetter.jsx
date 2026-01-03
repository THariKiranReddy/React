import React from 'react'
import StyledNewsLetter from '../assets/Wrapper/newsletter'
import { Form, redirect, useNavigation } from 'react-router-dom'
import axios from 'axios';
import { toast } from 'react-toastify';
import StyledSearchForm from '../assets/Wrapper/newsletter';

const newsLetterUrl = "https://www.course-api.com/cocktails-newsletter";
export const action = async({request})=>{
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try{
   const response = await axios.post(newsLetterUrl,data);
   toast.success(response.data.msg);
   return redirect('/');
  }
  catch(error){
    toast.error(error?.message);
    console.log(error);
  }

  return null;
};
const NewsLetter = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
  <StyledSearchForm method='POST'>
    
           <input type="text" placeholder='Enter Name' name="name" defaultValue="flm"/>
         <input type="email" placeholder='Enter Email' name="email" defaultValue="edutech@gmail.com"/>
         <button type="submit" diabled="isSubmitting">
          {isSubmitting ? "submitting..." : "submit"}
         </button>
  </StyledSearchForm>
      
 
  )
}

export default NewsLetter