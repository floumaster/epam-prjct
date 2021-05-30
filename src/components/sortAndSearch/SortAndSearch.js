import React, {useContext, useState, useRef} from 'react';
import { useSelector, useDispatch } from "react-redux";
import { contentActions } from '../../store/content/actions';
import { sortActions } from '../../store/sort/actions';
import Context from '../context'

function SortAndSearch(){
    const { cars } = useSelector((state)=>state.content);
    const { nameAsc, priceAsc, capacityAsc } = useSelector((state)=>state.sort);
    const { oldcars } = useSelector((state)=>state.content);
    const dispatch = useDispatch();
    const setCars = (data) => dispatch(contentActions.setCars(data));
    const setNameAsc = (data) => dispatch(sortActions.setNameAsc(data));
    const setPriceAsc = (data) => dispatch(sortActions.setPriceAsc(data));
    const setCapacityAsc = (data) => dispatch(sortActions.setCapacityAsc(data));
    const InputRef = useRef(null);
    return(
        <>
        <div className="sort">
            <button className="booking-btn" onClick={()=>{
                if(nameAsc){
                    const newCars = cars.sort((a,b)=>{
                        if (a.name<b.name) {
                        return -1;
                        }
                        if (a.name>b.name) {
                        return 1;
                        }
                        return 0;
                    })
                    setCars([...newCars]);
                }
                else{
                    const newCars = cars.sort((a,b)=>{
                        if (a.name>b.name) {
                        return -1;
                        }
                        if (a.name<b.name) {
                        return 1;
                        }
                        return 0;
                    })
                    setCars([...newCars]);
                }
                setNameAsc(!nameAsc)
            }}>Sort by name ({nameAsc?'asc':'desc'})</button>
            <button className="booking-btn" onClick={()=>{
                if(priceAsc){
                    const newCars = cars.sort((a,b)=>{
                        if (a.price[0]<b.price[0]) {
                        return -1;
                        }
                        if (a.price[0]>b.price[0]) {
                        return 1;
                        }
                        return 0;
                    })
                    setCars([...newCars]);
                }
                else{
                    const newCars = cars.sort((a,b)=>{
                        if (a.price[0]>b.price[0]) {
                        return -1;
                        }
                        if (a.price[0]<b.price[0]) {
                        return 1;
                        }
                        return 0;
                    })
                    setCars([...newCars]);
                }
                setPriceAsc(!priceAsc)
            }}>Sort by price ({priceAsc?'asc':'desc'})</button>
            <button className="booking-btn" onClick={()=>{
                if(capacityAsc){
                    const newCars = cars.sort((a,b)=>{
                        if (a.characteristics[3]<b.characteristics[3]) {
                        return -1;
                        }
                        if (a.characteristics[3]>b.characteristics[3]) {
                        return 1;
                        }
                        return 0;
                    })
                    setCars([...newCars]);
                }
                else{
                    const newCars = cars.sort((a,b)=>{
                        if (a.characteristics[3]>b.characteristics[3]) {
                        return -1;
                        }
                        if (a.characteristics[3]<b.characteristics[3]) {
                        return 1;
                        }
                        return 0;
                    })
                    setCars([...newCars]);
                }
                setCapacityAsc(!capacityAsc)
            }}>Sort by capacity ({capacityAsc?'asc':'desc'})</button>
        </div>
        <form className="search">
            <label className="search-label">Search by name</label>
            <input className="search-input" type="input" ref={InputRef}/>
            <button className="search-btn" onClick={(e)=>{
                e.preventDefault();
                const name = InputRef.current.value;
                if(name === ''){
                    setCars(oldcars);
                }
                else{
                    setCars([...cars.filter(el=>el.name.startsWith(name))]);
                }
                }}>Search</button>
            <button className="cansel-btn" onClick={(e)=>{
                e.preventDefault();
                setCars(oldcars);
                InputRef.current.value = "";
                }}>Cansel</button>
        </form>
        </>
    )
}

export default SortAndSearch;