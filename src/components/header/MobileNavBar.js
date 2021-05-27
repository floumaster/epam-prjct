import React from 'react';
import { nanoid } from 'nanoid';

function MobileNavbar(){
    const cities = ['Kiev', 'Lviv', 'Kharkiv', 'Dnipro'];
    return(
        <nav className="mobile-navbar" role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
            <ul id="menu">
              <li><a className="mobile-navbar-link" href="#">Home</a></li>
              <li><a className="mobile-navbar-link" href="#">About</a></li>
              <li><a className="mobile-navbar-link" href="#">Info</a></li>
              <li><a className="mobile-navbar-link" href="#">Contact</a></li>
            </ul>
           </div>
          </nav>
    )
}

export default MobileNavbar;