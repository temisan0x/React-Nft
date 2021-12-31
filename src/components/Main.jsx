import React, {useState, useEffect} from 'react';
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png';
import './Main.css';


const Main = ({selectedPunk, punkListData}) => {
    const [activePunk, setActivePunk] = useState(punkListData[0])

    useEffect(() => {
        setActivePunk(punkListData[selectedPunk])
    }, [punkListData, selectedPunk])

    return ( 
        <div className="main">
            <div className="mainContent">
                <div className="punkHighLight">
                    <div className="punkContainer">
                        <img src={activePunk.image_url} 
                        className='selectedPunk'
                        />
                    </div>
                </div>

                <div className="punkDetails" style={{color: 'white'}}>
                    <div className="title">{activePunk.name}
                        <span className="itemNumber">.#{activePunk.token_id}</span>
                    </div>
                    
                    <div className="ownerContent">
                            <img className='ownerImg' src={activePunk.owner.profile_img_url} />
                            <div className="ownerHandle">@heytemisan</div>
                    </div>
                
                <div className="owner">
                    <div className="ownerDetails">
                        <div className="ownerNameAndHandle" style={{color: 'white'}}>
                            <div className="row">
                                <div className="scroll">
                                    <div className="address">{activePunk.owner.address}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="owner1">
                    <div className="ownerLink">
                        <img src={instagramLogo} alt="instagramLogo" />
                    </div>
                    <div className="ownerLink">
                        <img src={twitterLogo} alt="twitterLogo" />
                    </div>
                    <div className="ownerLink">
                        <img src={moreIcon} alt="more" />
                    </div>
                </div>
                </div>
        </div>
        </div>
    )
}

export default Main
