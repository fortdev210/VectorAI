import React, { useState, useEffect } from 'react'
import './Card.css';
import { Lightbox } from "react-modal-image";


const Card = ({item}) => {
    const [open, setOpen] = useState(false);
    const openLightBox = () => {
        setOpen(true);
    }
    const closeLightbox = () => {
        setOpen(false);
    };
    return (
        <div>
            <div className="gallery">
                <p className="title">{item.title}</p>
                <img src={`images/img${item.position+1}.jpg`} alt={item.type} onClick={openLightBox}/>
            </div>
            {    
                open&&<Lightbox
                    medium={`images/img${item.position+1}.jpg`}
                    large={`images/img${item.position+1}.jpg`}
                    alt={item.title}
                    hideDownload={true}
                    hideZoom={true}
                    onClose={closeLightbox}
                />
            }
        </div>
    )
}
export default Card
