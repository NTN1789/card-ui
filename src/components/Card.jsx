import React from 'react'
import "./card.css"
const Card = ({ title, imgUrl, body }) => {
  return (
    <main>
    <div  className='card-container '>

      <div className="image-container">
        <img src={imgUrl} alt="" />
      </div>
      <div className='card-content'> 
    <div className="card-title">
       <h3>   {title} </h3> 
     
    </div>
    <div className="card-body">
         <p> {body} </p>
         
    </div>
        <div className="btn">
          <button> 
            <a >
              ver mais
            </a>
          </button>
        </div>
        </div>
    </div>
    </main>
  )
}

export default Card