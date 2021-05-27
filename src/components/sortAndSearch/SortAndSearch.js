import React, {useContext, useState, useRef} from 'react';
import Context from '../context'

function SortAndSearch(){
    const {cars, setCars, oldcars, setOldCars} = useContext(Context);
    const [nameAsc, setNameAsc] = useState(true);
    const [priceAsc, setPriceAsc] = useState(true);
    const [capacityAsc, setCapacityAsc] = useState(true);
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
                        if (a.characteristics[2]<b.characteristics[2]) {
                        return -1;
                        }
                        if (a.characteristics[2]>b.characteristics[2]) {
                        return 1;
                        }
                        return 0;
                    })
                    setCars([...newCars]);
                }
                else{
                    const newCars = cars.sort((a,b)=>{
                        if (a.characteristics[2]>b.characteristics[2]) {
                        return -1;
                        }
                        if (a.characteristics[2]<b.characteristics[2]) {
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
        </form>
        </>
    )
}

export default SortAndSearch;