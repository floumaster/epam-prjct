import React, {useState, useContext, useEffect} from 'react'
import { nanoid } from 'nanoid';
import Pagination from './pagination/Pagination'
import SideBar from '../sidebar/Sidebar'
import SortAndSearch from '../sortAndSearch/SortAndSearch'
import BreadCrumbs from '../breadCrumbs/BreadCrumbs'
import { useSelector, useDispatch } from "react-redux";
import { contentActions } from '../../store/content/actions';
import Context from '../context'

function handleScroll(sideBarRef, navBarRef, videoRef, isContentVisible){
    if(isContentVisible && sideBarRef.current){
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

  function getCars(city, page, queryObj){
    const query = makeQuery(queryObj);
    return fetch(`https://whispering-wave-67768.herokuapp.com/api/cars/${city}?page=${page}${query}`)
    .then(data=>{
        return data.json();
    })
  }

function Content(){
    const {promoRef, contentLoaderRef, contentRef, sideBarRef, navBarRef, videoRef} = useContext(Context);
    const { cars, city, isContentVisible, queryObj, currPage } = useSelector((state)=>state.content);
    useEffect(() => {
        contentLoaderRef.current.className = "lds-circle";
        contentRef.current.className = "car-list hidden";
        getCars(city, currPage, queryObj).then(data => {
            dispatch(contentActions.setOldCars(data.newArr))
            dispatch(contentActions.setCars(data.newArr))
            dispatch(contentActions.setPages(data.pages))
        }).then(()=>{
            contentLoaderRef.current.className = "lds-circle hidden";
            contentRef.current.className = "car-list";
        }).catch(err=>{
            contentLoaderRef.current.className = "lds-circle hidden";
            contentRef.current.className = "car-list";
        })
    }, [city, currPage, queryObj]);
    useEffect(() => {
        sideBarRef.current.className = "sidebar";
        window.addEventListener("scroll", ()=>{handleScroll(sideBarRef, navBarRef, videoRef, isContentVisible)});
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(contentActions.setTitle(`Car rent in ${city}`));
        promoRef.current.className = "promo-wrapper";
    }, [city]);
    let chars = [
        "../images/fuel.svg",
        "../images/kpp.svg",
        "../images/people.svg",
        "../images/moto.svg"
        ]
    let price = [
        "1-2 days",
        "3-7 days",
        "8-30 days",
        "31-60 days"
    ]
    return (
        <>
        <main className="content-wrapper" name="content">
            <BreadCrumbs/>
            <SortAndSearch/>
            <div className="lds-circle hidden" ref={contentLoaderRef}><div></div></div>
            <p className={cars.length===0?"no-cars":"no-cars hidden"}>There are no cars</p>
            <ul className={cars.length===0?"car-list hidden":"car-list"} ref={contentRef}>
                {cars.map(el=>{
                    return(
                    <li className="car" key={nanoid(10)} id="content">
                        <img className="car-photo" src={el.photoSrc} alt={el.name}/>
                        <h2 className="car-name">{el.name}</h2>
                        <ul className="characteristics">
                            {chars.map((val, id)=>{
                                return(
                                    <li className="characteristic" key={nanoid(10)}>
                                        <figure className="characteristic-info">
                                            <img className="characteristic-photo" src={val} alt="position"/>
                                            <figcaption className="characteristic-name">{el.characteristics[id]}</figcaption>
                                        </figure>
                                    </li>
                                )
                            })}
                        </ul>
                        <ul className="price">
                            {price.map((val, id)=>{
                                return(
                                    <li className="price-position" key={nanoid(10)}>
                                        <div className="position-name">
                                            {val}
                                        </div>
                                        <div className="money">
                                            {el.price[id]}
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                        <button className="booking-btn">Book</button>
                    </li>
                    )
                })}
            </ul>
            <Pagination/>
        </main>
        <SideBar/>
        </>
    )
}


export default Content;