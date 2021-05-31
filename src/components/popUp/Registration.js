import React, {useContext} from 'react';
import Context from '../context'
import {useDispatch } from "react-redux"
import { loginActions } from '../../store/login/actions';
import './Login.scss'
import './Registration.scss'

function Register(){
    const dispatch = useDispatch();
    const setRegisterInfo = (info) => dispatch(loginActions.setRegisterInfo(info));
    const {closePopUp, regLoaderRef, registerRef} = useContext(Context);
    return(
        <div className="popup-login hidden" ref={registerRef}>
            <form className="register-form" onSubmit={(e)=>{
                e.preventDefault();
                const fields = [];
                let formElements = e.target.elements; 
                for (var i=0; i<formElements.length; i++){
                    if (formElements[i].type==="text" || formElements[i].type==="password"){
                        fields.push(formElements[i].value);
                        formElements[i].value = '';
                    }
                }
                const loginInfo = {
                    "login": fields[0],
                    "fullname": fields[1],
                    "role": 1,
                    "registeredAt": "29.12.2001",
                    "avaUrl": "https://i.ytimg.com/vi/PfNhzfxgzqU/maxresdefault.jpg",
                    "isEnabled": true,
                    "password": fields[2]
                }
                setRegisterInfo(loginInfo)
            }}>
                <button className="close-btn" onClick={(e)=>{
                    e.preventDefault();
                    closePopUp(registerRef)}}>x</button>
                <h2 className="login-form-title">Register</h2>
                <label className="login-form-label">Username</label>
                <input className="login-form-input" type="input"/>
                <label className="login-form-label">Full name</label>
                <input className="login-form-input" type="input"/>
                <label className="login-form-label" >Password</label>
                <input className="login-form-input" type="password"/>
                <div ref={regLoaderRef} className="lds-roller transpanent"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                <button className="login-form-submit" type="submit">Login</button>
            </form>
        </div>
    )
}

export default Register;