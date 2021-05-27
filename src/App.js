import {useRef, useEffect, useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import './App.scss';
import Context from './components/context'
import Loader from './components/loader/Loader'
import Content from './components/content/Content'
import Contacts from './components/contacts/Contacts'
import Rent from './components/rent/Rent'
import About from './components/about/About'
import Login from './components/popUp/Login'
import Register from './components/popUp/Registration'
import Header from './components/header/Header'

function handleScroll(sideBarRef, navBarRef, videoRef, isContentVisible){
  if(isContentVisible){
    if(navBarRef.current.getBoundingClientRect().bottom >= sideBarRef.current.getBoundingClientRect().top){
      if(sideBarRef.current.className === "sidebar" && window.innerWidth>1200)
        sideBarRef.current.className = "sidebar fixed";
    }
    if(videoRef.current.getBoundingClientRect().bottom >= navBarRef.current.getBoundingClientRect().bottom){
      if(sideBarRef.current.className === "sidebar fixed" && window.innerWidth>1200)
        sideBarRef.current.className = "sidebar";
    }
  }
}

function makeQuery(arr){
  let query = '';
  Object.keys(arr).forEach(form=>{
    query+=`&${form}=`
    arr[form].forEach(param=>{
      if(param[1]){
        query+=`${param[0]},`;
      }
    })
  })
  return query;
}

function getCars(city, wrapperRef, loaderRef, page, queryObj){
  /*wrapperRef.current.className = "wrapper hidden";
  loaderRef.current.className = "loader-wrapper";*/
  const query = makeQuery(queryObj);
  return fetch(`https://whispering-wave-67768.herokuapp.com/api/cars/${city}?page=${page}${query}`)
  .then(data=>{
    /*wrapperRef.current.className = "wrapper";
    loaderRef.current.className = "loader-wrapper hidden";*/
      return data.json();
  })
}

function App() {
  const [cars, setCars] = useState([]);
  const [city, setCity] = useState('Kiev');
  const [title, setTitle] = useState('');
  const [currPage, setCurrPage] = useState(1);
  const [queryObj, setQueryObj] = useState({});
  const [oldcars, setOldCars] = useState(cars);
  const [pages, setPages] = useState(1);
  const [loginInfo, setLoginInfo] = useState(null);
  const [registerInfo, setRegisterInfo] = useState(null);
  const [person, setPerson] = useState({});
  const [isContentVisible, setIsContentVisible] = useState(true);
  useEffect(() => {
    getCars(city, wrapperRef, loaderRef, currPage, queryObj).then(data => {
        setCars(data.newArr)
        setPages(data.pages)
        setOldCars(data.newArr)
      });
  }, [city, currPage, queryObj]);
  useEffect(() => {
      /*window.addEventListener("scroll", ()=>{handleScroll(sideBarRef, navBarRef, videoRef, isContentVisible)});
      return () => window.removeEventListener("scroll", handleScroll);*/
  }, []);
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
          popupRef.current.className = "login hidden";
          closePopUp(registerRef);
          setLoginInfo({login: registerInfo.login, password: registerInfo.password})
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
      return data.json();
    }).then(data=>{
      loginLoaderRef.current.className = "lds-roller transpanent";
      setPerson(data);
      closePopUp(loginRef);
    })
    .catch((err)=>{
      loginLoaderRef.current.className = "lds-roller transpanent";
      errorRef.current.className = "error";
      console.log(errorRef.current)
    })
  }
}, [loginInfo]);
  const sideBarRef = useRef(null);
  const navBarRef = useRef(null);
  const wrapperRef = useRef(null);
  const loaderRef = useRef(null);
  const videoRef = useRef(null);
  const loginRef = useRef(null);
  const registerRef = useRef(null);
  const errorRef = useRef(null);
  const loginLoaderRef = useRef(null);
  const personRef = useRef(null);
  const popupRef = useRef(null);
  const regLoaderRef = useRef(null);
  const promoRef = useRef(null);
  function closePopUp(popUpRef){
    errorRef.current.className = "error transpanent"
    wrapperRef.current.className = "wrapper";
    popUpRef.current.className = "popup-login hidden";
  }
  function logout(){
    personRef.current.className = "profile-wrapper hidden";
    popupRef.current.className = "login";
  }
  return (
    <>
    <Context.Provider value={{promoRef, regLoaderRef, loaderRef, navBarRef, videoRef, cars, setCars, city, setCity, sideBarRef, setIsContentVisible, title, setTitle, currPage, setCurrPage, pages, queryObj, setQueryObj, oldcars, setOldCars, loginInfo, setLoginInfo, wrapperRef, loginRef, loginLoaderRef, errorRef, closePopUp, popupRef, personRef, person, logout, registerRef, setRegisterInfo}}>
      <Loader/>
      <div className="wrapper" ref={wrapperRef}>
        <BrowserRouter>
        <Header/>
          <Switch>
            <Route exact path='/about' component={()=><About/>}/>
            <Route exact path='/contacts' render={()=><Contacts/>}/>
            <Route exact path='/rent' render={()=><Rent/>}/>
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
