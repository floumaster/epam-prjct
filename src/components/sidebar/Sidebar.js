import React, {useRef, useEffect, useContext} from 'react'
import { NavLink } from 'react-router-dom';
import Context from '../context'
import {useDispatch, useSelector } from "react-redux"
import { contentActions } from '../../store/content/actions';

function SideBar(){
    const {KharkivRef, KievRef, DneprRef, LvivRef, ClassForm, KppForm, TypeForm, DriveForm, sideBarRef} = useContext(Context);
    const dispatch = useDispatch();
    const { city, queryObj } = useSelector((state)=>state.content);
    const setCity = (city) => dispatch(contentActions.setCity(city));
    const setCurrPage = (page) => dispatch(contentActions.setCurrPage(page));
    const setQueryObj = (obj) => dispatch(contentActions.setQueryObj(obj));
    useEffect(() => {
        switch(city){
            case 'Kharkiv':
                KharkivRef.current.checked = true;
                break;
            case 'Kiev':
                KievRef.current.checked = true;
                break;
            case 'Lviv':
                LvivRef.current.checked = true;
                break;
            case 'Dnepr':
                DneprRef.current.checked = true;
                break;
            default:
                break;
        }
    });
    return (
        <aside className="sidebar" ref={sideBarRef}>
            <div className="filter">
            <h3 className="filter-title">City</h3>
                <form className="filter-city">
                    <NavLink to={`/Kharkiv`}>
                        <input type="radio" id="Kharkiv" name="city" ref={KharkivRef} onClick={()=>{setCurrPage(1); setCity("Kharkiv")}}/>
                    </NavLink>
                    <label className="filter-label">Kharkiv</label><br/>
                    <NavLink to={`/Kiev`}>
                        <input type="radio" id="Kiev" name="city" ref={KievRef} onClick={()=>{setCurrPage(1); setCity("Kiev")}}/>
                    </NavLink>
                    <label className="filter-label">Kiev</label><br/>
                    <NavLink to={`/Lviv`}>
                        <input type="radio" id="Lviv" name="city" ref={LvivRef} onClick={()=>{setCurrPage(1); setCity("Lviv")}}/>
                    </NavLink>
                    <label className="filter-label">Lviv</label><br/>
                    <NavLink to={`/Dnepr`}>
                        <input type="radio" id="Dnepr" name="city" ref={DneprRef} onClick={()=>{setCurrPage(1); setCity("Dnepr")}}/>
                    </NavLink>
                    <label className="filter-label">Dnepr</label>
                </form>
                <h3 className="filter-title">Class</h3>
                <form className="filter-class" ref={ClassForm} onChange={()=>{
                    const arr = [];
                    let formElements = ClassForm.current.elements; 
                    for (var i=0; i<formElements.length; i++){
                        if (formElements[i].type==="checkbox")
                            arr.push([formElements[i].value, formElements[i].checked])
                    }
                    const obj = {...queryObj};
                    obj.class = arr;
                    setQueryObj(obj);
                    setCurrPage(1);
                    }}>
                    <input type="checkbox" value="Econom"/>
                    <label className="filter-label">Econom</label><br/>
                    <input type="checkbox" value="Standart"/>
                    <label className="filter-label">Standart</label><br/>
                    <input type="checkbox" value="Business"/>
                    <label className="filter-label">Business</label><br/>
                    <input type="checkbox" value="Outback"/>
                    <label className="filter-label">Outback</label><br/>
                    <input type="checkbox" value="Sport"/>
                    <label className="filter-label">Sport</label><br/>
                </form>
                <h3 className="filter-title">KPP</h3>
                <form className="filter-kpp" ref={KppForm} onChange={()=>{
                    const arr = [];
                    let formElements = KppForm.current.elements; 
                    for (var i=0; i<formElements.length; i++){
                        if (formElements[i].type==="checkbox")
                            arr.push([formElements[i].value, formElements[i].checked])
                    }
                    const obj = {...queryObj};
                    obj.kpp = arr;
                    setQueryObj(obj);
                    setCurrPage(1);
                    }}>
                    <input type="checkbox" value="Automat"/>
                    <label className="filter-label">Automat</label><br/>
                    <input type="checkbox" value="Mechanic"/>
                    <label className="filter-label">Mechanic</label><br/>
                </form>
                <h3 className="filter-title">Body type</h3>
                <form className="filter-type" ref={TypeForm} onChange={()=>{
                    const arr = [];
                    let formElements = TypeForm.current.elements; 
                    for (var i=0; i<formElements.length; i++){
                        if (formElements[i].type==="checkbox")
                            arr.push([formElements[i].value, formElements[i].checked])
                    }
                    const obj = {...queryObj};
                    obj.body = arr;
                    setQueryObj(obj);
                    setCurrPage(1);
                    }}>
                    <input type="checkbox" value="Hatchback"/>
                    <label className="filter-label">Hatchback</label><br/>
                    <input type="checkbox" value="Kupe"/>
                    <label className="filter-label">Kupe</label><br/>
                    <input type="checkbox" value="Sedan"/>
                    <label className="filter-label">Sedan</label><br/>
                    <input type="checkbox" value="Outback"/>
                    <label className="filter-label">Outback</label><br/>
                    <input type="checkbox" value="Universal"/>
                    <label className="filter-label">Universal</label><br/>
                </form>
                <h3 className="filter-title">Drive type</h3>
                <form className="filter-drive" ref={DriveForm} onChange={()=>{
                    const arr = [];
                    let formElements = DriveForm.current.elements; 
                    for (var i=0; i<formElements.length; i++){
                        if (formElements[i].type==="checkbox")
                            arr.push([formElements[i].value, formElements[i].checked])
                    }
                    const obj = {...queryObj};
                    obj.drive = arr;
                    setQueryObj(obj);
                    setCurrPage(1);
                    }}>
                    <input type="checkbox" value="Forward"/>
                    <label className="filter-label">Forward</label><br/>
                    <input type="checkbox" value="Full"/>
                    <label className="filter-label">Full</label><br/>
                </form>
            </div>
        </aside>
    )
}

export default SideBar;