import React from 'react';
import weth from '../assets/collection/weth.png';
import './CollectionCard.css'

const CollectionCard = ({id, name, traits, image}) => {
    return (
        <div className="collectionCard">
            <img src={image} alt="collectionImage" />
            <div className="details"></div>
            <div className="name">
                {name}
                <div className="id">
                    .#{id}
                </div>
            </div>
            <div className="priceContainer">
                <img src={weth} alt="wethImage" className="wethImage" />
                <div className="price">
                    {traits[0]?.value}
                </div>
            </div>
        </div>
    )
}

export default CollectionCard
