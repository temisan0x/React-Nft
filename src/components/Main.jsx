import React from 'react';
import instagramLogo from '../assets/owner/instagram.png'
import twitterLogo from '../assets/owner/twitter.png'
import moreIcon from '../assets/owner/more.png';
import './Main.css';


const Main = () => {

    const [activePunk, setActivePunk] = useState(punkListData[0])

    return ( 
        <div className="main">
            <div className="mainContent">
                <div className="punkHighLight">
                    <div className="punkContainer">
                        <img src="https://lh3.googleusercontent.com/9B1oTFEv4DeaW9gFwnd1ION2NzfGnC9lHfjnPNSbNkDZmID0P7Di6Y6ptZxZuf0oaWgnAKLu1eqEbdlCJSpHDFUceo2D7H9c0wK56Q" 
                        className='selectedPunk'
                        />
                    </div>
                </div>
                <div className="punkDetails" style={{color: 'white'}}>
                    <div className="title"> IceBoy</div>
                    <span className="itemNumber">#3</span>
                </div>
                <div className="owner">
                    <div className="ownerImageContainer">
                        <img src="https://lh3.googleusercontent.com/9B1oTFEv4DeaW9gFwnd1ION2NzfGnC9lHfjnPNSbNkDZmID0P7Di6Y6ptZxZuf0oaWgnAKLu1eqEbdlCJSpHDFUceo2D7H9c0wK56Q" alt="ownerImageContainer" />
                    </div>
                    <div className="ownerDetails">
                        <div className="ownerNameAndHandle" style={{color: 'white'}}>
                            <div>0xb4ad07f6E4c0d0d7dE2e7F1d085Fcd76D6f2ee0a</div>
                            <div className="ownerHandle">@heytemisan</div>
                        </div>
                    </div>
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
    )
}

export default Main
