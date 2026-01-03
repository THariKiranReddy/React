import React from 'react'
import axios from "axios";
import { useLoaderData, useRouteError } from 'react-router'
import CocktailList from '../Component/CocktailList';
import SearchForm from './SearchForm';

const ApiUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const loader = async({request})=>{
  const url = new URL(request.url);
  console.log(url);
  const searchTerm = url.searchParams.get('search') || "vodka";
  const response = await axios.get(`${ApiUrl}${searchTerm}`);
  // console.log(response);
 return {drinks: response.data.drinks ,searchTerm}
}

const Landing = () => {
  const {drinks,searchQuery} = useLoaderData();
  // console.log(drinks);
  return <>
  <SearchForm/>
  <CocktailList drinks={drinks}/>

  </>
}

export default Landing
