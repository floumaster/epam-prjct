import React, {useContext} from 'react';
import Context from '../context'
import './PromoEffects.scss'

function PromoEffects(){
    const { videoRef, promoRef } = useContext(Context);
    return (
        <div className="promo-wrapper hidden" ref={promoRef}>
            <video className="promo" src="/images/promo.mp4" muted autoPlay="autoplay" ref={videoRef}></video>
            <div className="promo-effect">
                <h1 className="title">CHOOSE YOUR OWN CAR</h1>
                <div className="main_link-wrapper">
                    <a className="main_link" href="#content">GO TO CAR LIST</a>
                </div>
            </div>
        </div>
    )
}

export default PromoEffects;