import { useQuery } from '@tanstack/react-query'
import React, { useContext } from 'react'
import axios from "axios"
import { AppContext } from './Context'
import styles from './Gallery.module.css'

const url = `https://api.unsplash.com/search/photos/?client_id=ZPA04m1QDNU6JuRzRMh5jvq91RZLqXDk49svidj6Gqw`;
const Gallery = () => {
  const {searchTerm} = useContext(AppContext);
  console.log(searchTerm);
  const response = useQuery({
    queryKey:["images",searchTerm],
    queryFn: async()=>{
      const result = await axios.get(`${url}&query=${searchTerm}`);
      return result.data;
    }
});
   
if(response.isLoading){
  return (
    <h3>Loading...</h3>
  )
}
if(response.error){
  return (
    <h3>Error occurred</h3>
  )
}
const results =response.data.results;
if(results<1){
  return (
    <h3>No Data</h3>
  )
}
  return (
    <section className={styles.formate}>
       {results.map((item)=>{
        const url = item?.urls?.regular;
        return <img src={url} key={item.id} alt={item.description} className={styles.img}/>
       })}
    </section>
  )
}
export default Gallery;