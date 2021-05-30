import React, {useEffect, useContext} from 'react'
import BreadCrumbs from '../breadCrumbs/BreadCrumbs'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Context from '../context'
import {useDispatch } from "react-redux"
import { contentActions } from '../../store/content/actions';

function About(){
    const dispatch = useDispatch();
    const {promoRef} = useContext(Context);
    useEffect(() => {
        promoRef.current.className = "promo-wrapper hidden";
        //dispatch(contentActions.setTitle(`About us`))
    }, []);
    let settings = {
        autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        width: 100
      };
    return (
        <div className="content">
            <BreadCrumbs/>
            <img className="big-car" src="../images/big_car.png" alt="big car"/>
            <div className="partners-wrapper">
                <h2 className="partners-title">Our partners</h2>
                <h3 className="partners-slogan">THEY TRUST US</h3>
                <div className="partners-slider">
                    <Slider {...settings}>
                        <div>
                            <img className="partner-logo" src="https://www.driveup.com.ua/wp-content/uploads/2019/12/image-4.png" alt="partner"/>
                        </div>
                        <div>
                            <img className="partner-logo" src="https://www.driveup.com.ua/wp-content/uploads/2019/12/image-2.png" alt="partner"/>
                        </div>
                        <div>
                            <img className="partner-logo" src="https://www.driveup.com.ua/wp-content/uploads/2019/12/image.png" alt="partner"/>
                        </div>
                        <div>
                            <img className="partner-logo"src="https://www.driveup.com.ua/wp-content/uploads/2019/12/image-2.png" alt="partner"/>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}


export default About;