import React from 'react'
import { Link } from 'react-router-dom'
import "./Card.css"


const Card = ({item}) => {
  return (
    <div className='card' style={{width : "18rem"}}>
       <img src={item?.thumbnail} style={{height: "200px"}} 
       className="card-img-top" alt="" />
       <div className='card-body'>
           <h5 className='card-tittle'>{item?.title}</h5>
           <p className='card-text'>{item?.price} AZN</p>
           <div className='card__btn'> 
           <Link className='btn btn-dark' to={`/${item?.id}`}>Detail</Link>
           <button className='btn btn-dark'><i className='fa-regular fa-heart' style={{color:"white"}}></i></button>
           </div>
       </div>
    </div>
  )
}

export default Card