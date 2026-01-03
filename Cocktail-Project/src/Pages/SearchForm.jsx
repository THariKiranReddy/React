import React from 'react'
import { Form, useNavigation } from 'react-router-dom'
import Search from '../assets/Wrapper/search';

const searchForm = () => {
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting"; 
  return (
    <Search>
    <Form className='form'>
       <input type ="text" className='form-input' name='search' defaultValue="vodka"/>
       <button type="submit" className='btn' disabled={isSubmitting}>
        {isSubmitting? "searching..." : "search"}
       </button>
    </Form>
      </Search>
  )
}

export default searchForm