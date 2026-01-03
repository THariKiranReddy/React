import React from 'react'
import CocktailCard from './CocktailCard';
import StyledDiv from '../assets/Wrapper/CocktailDesign';

const CocktailList = ({drinks}) => {
    if(!drinks || drinks == "no data found"){
        return <h2>There is no matching data</h2>
    }
    const formattedDrinks = drinks.map((item)=>{
        const {strDrink,strDrinkThumb,strGlass,idDrink,strAlcoholic} = item;
        return {id:idDrink,image:strDrinkThumb,glass:strGlass,info:strAlcoholic,name:strDrink};

    });
  return (
    <StyledDiv>
        {formattedDrinks.map((item)=>{
         return <CocktailCard key = {item.id} {...item}/>
        })}
    </StyledDiv>
    
  )
}

export default CocktailList