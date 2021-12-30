import React from 'react'

const Main = () => {
    return (
        <div className="main">
            <div className="mainContent">
                <div className="punkHighLight">
                    <div className="punkContainer">
                        <img src={activePunk.image_url}
                        alt="" />
                    </div>
                </div>
                <div className="punkDetails">
                    {activePunk.name}
                </div>
            </div>
        </div>
    )
}

export default Main
