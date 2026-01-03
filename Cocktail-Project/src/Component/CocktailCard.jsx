import React from 'react'
import { Link } from 'react-router-dom'
import StyledDiv from '../assets/Wrapper/card'

const CocktailCard = ({id,name,image,glass,info}) => {
  return (
    <StyledDiv>
      <div>
         <div>
            <img src={image}/>
        </div>
        <div className='card-details'>
            <h3>{name}</h3>
            <p>{glass}</p>
            <p>{info}</p>
            <Link to={`cocktail/${id}`}>Details</Link>
        </div>
          </div>
    </StyledDiv>
  )
}

export default CocktailCard