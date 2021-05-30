import React, {useContext, useRef} from 'react';
import { nanoid } from 'nanoid';
import { NavLink } from 'react-router-dom';
import Context from '../context'
import {useDispatch, useSelector } from "react-redux"
import { contentActions } from '../../store/content/actions';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton
} from "react-share";

import {
  FacebookIcon,
  LinkedinIcon,
  TelegramIcon,
  TwitterIcon
} from "react-share";

function MobileNavbar(){
    const citiesRef = useRef(null);
    const companyRef = useRef(null);
    const personLoginRef = useRef(null);
    const shareRef = useRef(null);
    const {wrapperRef, loginRef, mobilePersonRef, mobilePopupRef, registerRef} = useContext(Context);
    const dispatch = useDispatch();
    const { person } = useSelector((state)=>state.content);
    const cities = ['Kiev', 'Lviv', 'Kharkiv', 'Dnipro'];
    const company = ['About us', 'Contacts'];
    const { logout} = useContext(Context);
    const setCity = (city) => dispatch(contentActions.setCity(city));
    const setIsContentVisible = (isVisible) => dispatch(contentActions.setIsContentVisible(isVisible));
    const setCurrPage = (page) => dispatch(contentActions.setCurrPage(page));
    function openPopUp(popUpRef){
      wrapperRef.current.className = "wrapper blured";
      popUpRef.current.className = "popup-login";
    }
    return(
        <nav className="mobile-navbar" role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
            <ul className="mobile-menu" id="menu">
              <li>
                <div className="with-arrow">
                    <NavLink className="navbar-link" to="/" onClick={()=>{setIsContentVisible(true)}}>Autopark</NavLink>
                    <img className="navbar-arrow" src="../images/arrow.png" alt="arrow" onClick={(e)=>{
                        citiesRef.current.className = (citiesRef.current.className == "mobile-drop-list" ? "mobile-drop-list noHight" : "mobile-drop-list");
                        e.target.className = (e.target.className == "navbar-arrow" ? "navbar-arrow rotated" : "navbar-arrow");
                    }}/>
                </div>
                  <ul className="mobile-drop-list noHight" ref={citiesRef}>
                    {cities.map(el=>{
                            return(
                                <li className="" key={nanoid(10)}>
                                    <NavLink className="navbar-link" to={`/${el}`} onClick={(e)=>{
                                        setCity(el);
                                        setCurrPage(1)
                                        setIsContentVisible(true)
                                    }}>{el}</NavLink>
                                </li>
                            )
                        })}
                  </ul>
              </li>
              <li>
                <div className="with-arrow">
                    <NavLink className="navbar-link" to="/about" onClick={()=>{setIsContentVisible(false)}}>Company</NavLink>
                    <img className="navbar-arrow" src="../images/arrow.png" alt="arrow" onClick={(e)=>{
                        companyRef.current.className = (companyRef.current.className == "mobile-drop-list" ? "mobile-drop-list noHight" : "mobile-drop-list");
                        e.target.className = (e.target.className == "navbar-arrow" ? "navbar-arrow rotated" : "navbar-arrow");
                    }}/>
                </div>
                <ul className="mobile-drop-list noHight" ref={companyRef}>
                        {company.map(el=>{
                            return(
                                <li className="" key={nanoid(10)}>
                                    <NavLink className="navbar-link" to={`/${el.split(' ')[0].toLowerCase()}`} onClick={(e)=>{
                                        setIsContentVisible(false)
                                    }}>{el}</NavLink>
                                </li>
                            )
                        })}
                  </ul>
              </li>
              <li>
                <div className="with-arrow">
                    <div className="navbar-link">Login</div>
                    <img className="navbar-arrow" src="../images/arrow.png" alt="arrow" onClick={(e)=>{
                        personLoginRef.current.className = (personLoginRef.current.className == "mobile-drop-list" ? "mobile-drop-list noHight" : "mobile-drop-list");
                        e.target.className = (e.target.className == "navbar-arrow" ? "navbar-arrow rotated" : "navbar-arrow");
                    }}/>
                </div>
                <ul className="mobile-drop-list noHight" ref={personLoginRef}>
                    <div className="profile-wrapper hidden" ref={mobilePersonRef}>
                          <figure className="profile-info">
                              <div className="profile_photo-wrapper">
                                  <img className="profile_photo" src="../images/boom.png" alt="profile"/>
                              </div>
                              <figcaption className="nickname">{person.fullname}</figcaption>
                          </figure>
                          <img className="logout" onClick={()=>{logout()}} src="../images/exit.png" alt="logout"/>
                      </div>
                      <ul className="login" ref={mobilePopupRef}>
                          <li className="sign-in" onClick={()=>{openPopUp(loginRef)}}>
                              Login
                          </li>
                          <li className="sign-up" onClick={()=>{openPopUp(registerRef)}}>
                              Register
                          </li>
                      </ul>
                </ul>
                <div className="profile">
                      
                  </div>
              </li>
              <li>
                <div className="with-arrow">
                    <div className="navbar-link">Share</div>
                    <img className="navbar-arrow" src="../images/arrow.png" alt="arrow" onClick={(e)=>{
                        shareRef.current.className = (shareRef.current.className == "sharing" ? "sharing noHight" : "sharing");
                        e.target.className = (e.target.className == "navbar-arrow" ? "navbar-arrow rotated" : "navbar-arrow");
                    }}/>
                </div>
                <div className="sharing noHight" ref={shareRef}>
                    <FacebookShareButton children={<FacebookIcon size={32} round={true} bgStyle={{fill:"#000000"}}/>} url="https://www.hltv.org/matches"/>
                    <LinkedinShareButton children={<LinkedinIcon size={32} round={true} bgStyle={{fill:"#000000"}}/>} url="https://www.hltv.org/matches"/>
                    <TelegramShareButton children={<TelegramIcon size={32} round={true} bgStyle={{fill:"#000000"}}/>} url="https://www.hltv.org/matches"/>
                    <TwitterShareButton children={<TwitterIcon size={32} round={true} bgStyle={{fill:"#000000"}}/>} url="https://www.hltv.org/matches"/>
                </div>
              </li>
            </ul>
           </div>
          </nav>
    )
}

export default MobileNavbar;