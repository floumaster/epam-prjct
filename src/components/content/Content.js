import React, {useState, useContext, useEffect} from 'react'
import { nanoid } from 'nanoid';
import Pagination from './pagination/Pagination'
import Context from '../context'
import SideBar from '../sidebar/Sidebar'
import SortAndSearch from '../sortAndSearch/SortAndSearch'
import BreadCrumbs from '../breadCrumbs/BreadCrumbs'

function Content(){
    const {cars, setTitle, city, promoRef} = useContext(Context);
    useEffect(() => {
        setTitle(`Car rent in ${city}`)
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
    const pages = Math.ceil(cars.length/10);
    const [currPage, setCurrPage] = useState(1);
    return (
        <>
        <main className="content-wrapper" name="content">
            <BreadCrumbs/>
            <SortAndSearch/>
            <ul className="car-list">
                {cars.map(el=>{
                    return(
                    <li className="car" key={nanoid(10)}>
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
            <Pagination props={{pages:pages, currPage:currPage, setCurrPage:setCurrPage}}/>
        </main>
        <SideBar/>
        </>
    )
}


export default Content;