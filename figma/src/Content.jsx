import React from 'react'
import './content.css'
const Content = () => {
  return (
    <div style={{width:"352px",boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px"}}>
      <img src="https://tse3.mm.bing.net/th/id/OIP.MInViflWTn0CIsOU3esbLwHaE5?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" className="im"/>
        <div className="con">
        <h4 className="tg">$1,995</h4>
        <h2 className="hea">Best of Paris in 7 Days Tour</h2>
        <div className="din">
            <p className="par">Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of ...</p>
        <a className="an">Read More</a>
        </div>
        <br/>
        <button className="btn" type="button">Not Interested</button>
        </div>
    </div>
  )
}

export default Content