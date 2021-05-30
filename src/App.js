import {useRef, useEffect, useState} from 'react'
import {useDispatch, useSelector } from "react-redux"
import { contentActions } from './store/content/actions';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";
import './App.scss';
import Context from './components/context'
import Loader from './components/loader/Loader'
import Content from './components/content/Content'
import Contacts from './components/contacts/Contacts'
import Faq from './components/faq/Faq'
import About from './components/about/About'
import Login from './components/popUp/Login'
import Register from './components/popUp/Registration'
import Header from './components/header/Header'

function App() {
  const {loginInfo, registerInfo} = useSelector((state)=>state.login);
  const dispatch = useDispatch();
  const sideBarRef = useRef(null);
  const navBarRef = useRef(null);
  const wrapperRef = useRef(null);
  const loaderRef = useRef(null);
  const videoRef = useRef(null);
  const loginRef = useRef(null);
  const registerRef = useRef(null);
  const errorRef = useRef(null);
  const loginLoaderRef = useRef(null)
  const personRef = useRef(null);
  const popupRef = useRef(null);
  const regLoaderRef = useRef(null);
  const promoRef = useRef(null);
  const contentLoaderRef = useRef(null);
  const contentRef = useRef(null);
  const mobilePersonRef = useRef(null);
  const mobilePopupRef = useRef(null);
  const KharkivRef = useRef(null);
  const KievRef = useRef(null);
  const DneprRef = useRef(null);
  const LvivRef = useRef(null);
  const ClassForm = useRef(null);
  const KppForm = useRef(null);
  const TypeForm = useRef(null);
  const DriveForm = useRef(null);
  useEffect(() => {
    if(registerInfo){
        regLoaderRef.current.className = "lds-roller";
        return fetch(`https://whispering-wave-67768.herokuapp.com/api/users`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: JSON.stringify(registerInfo)
        })
        .then(data=>{
            regLoaderRef.current.className = "lds-roller transpanent";
            personRef.current.className = "profile-wrapper";
            mobilePersonRef.current.className = "profile-wrapper";
            mobilePopupRef.current.className = "login hidden";
            popupRef.current.className = "login hidden";
            closePopUp(registerRef);
            dispatch(contentActions.setLoginInfo({login: registerInfo.login, password: registerInfo.password}))
        })
    }
    }, [registerInfo]);
    useEffect(() => {
    if(loginInfo){
    loginLoaderRef.current.className = "lds-roller";
    errorRef.current.className = "error transpanent";
    return fetch(`https://whispering-wave-67768.herokuapp.com/api/users?login=${loginInfo.login}&password=${loginInfo.password}`)
    .then(data=>{
        if (!data.ok) {
        throw Error('Login or password is not correct');
        }
        personRef.current.className = "profile-wrapper";
        popupRef.current.className = "login hidden";
        mobilePersonRef.current.className = "profile-wrapper";
        mobilePopupRef.current.className = "login hidden";
        return data.json();
    }).then(data=>{
        loginLoaderRef.current.className = "lds-roller transpanent";
        dispatch(contentActions.setPerson(data))
        closePopUp(loginRef);
    })
    .catch((err)=>{
        loginLoaderRef.current.className = "lds-roller transpanent";
        errorRef.current.className = "error";
    })
    }
    }, [loginInfo]);
  function closePopUp(popUpRef){
    errorRef.current.className = "error transpanent"
    wrapperRef.current.className = "wrapper";
    popUpRef.current.className = "popup-login hidden";
  }
  function logout(){
    personRef.current.className = "profile-wrapper hidden";
    popupRef.current.className = "login";
    mobilePersonRef.current.className = "profile-wrapper hidden";
    mobilePopupRef.current.className = "login";
  }
  return (
    <>
      <Context.Provider value={{logout, sideBarRef, navBarRef, wrapperRef, loaderRef, videoRef, loginRef, registerRef, errorRef, loginLoaderRef, personRef, popupRef, regLoaderRef, promoRef, contentLoaderRef, contentRef, mobilePersonRef, mobilePopupRef, KharkivRef, KievRef, DneprRef, LvivRef, ClassForm, KppForm, TypeForm, DriveForm}}>
        <Loader/>
        <div className="wrapper" ref={wrapperRef}>
          <BrowserRouter>
          <Header/>
            <Switch>
              <Route exact path='/about' component={()=><About/>}/>
              <Route exact path='/contacts' render={()=><Contacts/>}/>
              <Route exact path='/faq' render={()=><Faq/>}/>
              <Route path={['/', '/Kiev', '/Lviv', '/Kharkiv', '/Dnepr']} render={()=><Content/>}/>
            </Switch>
          </BrowserRouter>
        </div>
        <Login/>
        <Register/>
      </Context.Provider>
    </>
  );
}

export default App;
