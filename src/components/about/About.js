import React, {useState, useEffect, useContext} from 'react'
import Navbar from '../header/Navbar'
import MobileNavbar from '../header/MobileNavBar'
import { NavLink } from 'react-router-dom';
import BreadCrumbs from '../breadCrumbs/BreadCrumbs'
import Context from '../context'

function About({props}){
    const {setTitle, promoRef} = useContext(Context);
    useEffect(() => {
        promoRef.current.className = "promo-wrapper hidden";
        setTitle(`About us`)
    }, []);
    return (
        <div className="content">
            <BreadCrumbs/>
        </div>
    )
}


export default About;