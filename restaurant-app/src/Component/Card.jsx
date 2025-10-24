import React from 'react' 
import styles from './Card.module.css'
import { FaChevronLeft } from 'react-icons/fa';
const Card = ({filtering,filteredData,sortByRating,costforTwo,costforTwoo,acceptCard,acceptCash,acceptUpi}) => {
    const ratingLevels=[1,2,3,4];
  return (
    <div className={styles.res}>
      <div className={styles.hd}>
         <button type="button" className={styles.rating} onClick={()=>sortByRating()}>Sort By Rating</button>
      {ratingLevels.map((level)=>{
        return <button key={level} className={styles.st} type="button" onClick={()=>filtering(level)}>Rating<FaChevronLeft/>{level}</button>
      })}
      <div className={styles.ca}>
           <button type="button" onClick={()=>costforTwo()}>Cost for Two People Low to High</button>
      <button type="button" onClick={()=>costforTwoo()}>Cost for Two People High to Low</button>
      </div>
         <div className={styles.payment}>
                <button type="button" onClick={()=>acceptCash()}>Cash Accepted Restaurants</button>
                <button type="button" onClick={()=>acceptCard()}>Card Accepted Restaurants</button>
                <button type="button" onClick={()=>acceptUpi()}>UPI Accepted Restaurants</button>
            </div>
      </div>
        {filteredData.map((item)=>{
        return  <div className={styles.mtb}>
           <div className={styles.mn}>
            {/* card image */}
          <img className={styles.cim} src={item.image}/>
          {/* cost and categories */}
          <div className={styles.hnm}>
            <h1>{item.restaurantName}</h1>
            <h3>{item.categories}</h3>
            <h3>Cost for one person ₹ {item.cost_for_one}</h3>
            <h3>Cost for two persons ₹ {item.cost_for_two}</h3>
            </div>
            {/* rating,reviews */}
            <div className={styles.rat}>
                <h2 className={styles.ing}>{item.rating}</h2>
                <p>{item.reviews} Reviews</p>
                <p>{item.votes} Votes</p>
            </div>
        </div>
        </div>
        })}
    </div>
  )
}
export default Card

