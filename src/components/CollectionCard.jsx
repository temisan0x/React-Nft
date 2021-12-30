import React from 'react'

const CollectionCard = ({id, name, traits, image}) => {
    return (
        <div className="collectionCard">
            <img src={image} alt="collectionImage" />
            <div className="details"></div>
            <div className="name">
                {name}
                <div className="id">
                    .#{od}
                </div>
            </div>
            <div className="priceContainer">
                <img src={eth} alt="ethImage" className="ethImage" />
                <div className="price">
                    {traits[0]?.value}
                </div>
            </div>
        </div>
    )
}

export default CollectionCard
