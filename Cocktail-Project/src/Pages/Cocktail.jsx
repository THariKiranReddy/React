import axios from 'axios';
import React from 'react'
import { useLoaderData } from 'react-router';
import { Link } from 'react-router-dom';
import StyledDiv from '../assets/Wrapper/list';

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
export const loader = async({params})=>{
  const {id} = params;
  const {data} = await axios.get(`${url}${id}`);
  return {id , data};
}
const Cocktail = () => {
  const {id,data} = useLoaderData();
  const drink = data.drinks[0];
  const {strDrink:name,strGlass:glass,strAlcoholic:info,strDrinkThumb:image,strCategory:category,strInstructions:instructions } = drink;
  const validIngredients = Object.keys(drink).filter((key)=>key.startsWith('strIngredient') && drink[key] !== null).map((key)=>drink[key]);
  return (
    <StyledDiv>
      <header>
        <Link to='/'>
        Back to Home</Link>
        <h3>{name}</h3></header>

        <div>
       <img src={image}/>
       <p>
        <span className='Name'>Name:</span>
        {name}</p>
       <p>
        <span className='Category'>Category:</span>
        {category}
       </p>
       <p>
        <span className='Info'>Info:</span>
        {info}
       </p>
       <p>
        <span className='Glass'>Glass:</span>
        {glass}
       </p>
       <p>
        <span className='Ingredients'>ingredients:</span>
        {validIngredients.map((item,index)=>{
          return <span> {item} {index <validIngredients.length-1 ? "," : ""} </span>
        })}
       </p>
       <p>
        <span className='Instructions'>Instructions:</span>
        {instructions}
       </p>
        </div>
    </StyledDiv>
  )
}

export default Cocktail