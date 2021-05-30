import React from 'react';
import PromoEffects from './PromoEffects'
import Navbar from './Navbar'
import MobileNavbar from './MobileNavBar'

function Header(){
    return(
        <header className="top">
            <PromoEffects/>
            <Navbar/>
            <MobileNavbar/>
        </header>
    )
}

export default Header;