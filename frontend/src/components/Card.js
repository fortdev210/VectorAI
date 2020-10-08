import React from 'react'
import './Card.css';


const Card = ({item}) => {
    return (
        <div className="card">
            <p className="title">{item.title}</p>
            <img src={`images/img${item.position+1}.jpg`} alt={item.type} />
        </div>
    )
}
export default Card
