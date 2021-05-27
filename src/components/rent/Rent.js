import React, {useContext, useEffect} from 'react';
import Navbar from '../header/Navbar'
import MobileNavbar from '../header/MobileNavBar'
import BreadCrumbs from '../breadCrumbs/BreadCrumbs'
import Context from '../context'

function Rent(){
    const {setTitle, promoRef} = useContext(Context);
    useEffect(() => {
        promoRef.current.className = "promo-wrapper hidden";
        setTitle(`Car rental conditions`)
    }, []);
    return(
        <div className="content">
            <BreadCrumbs/>
        </div>
    )
}

export default Rent;