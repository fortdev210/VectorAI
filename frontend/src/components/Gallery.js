import React from 'react';
import Card from './Card';
import './Gallery.css';
import { initData } from './../staticData';

const CardList = () => {
    return (
        <div>
            { initData.map(
                item => (
                    <div className="gallery">
                        <Card item = {item}/>
                    </div>
                    )
                )
            }
        </div>
    )
}

export default CardList
