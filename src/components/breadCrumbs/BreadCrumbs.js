import React from 'react';
import { nanoid } from 'nanoid';
import { NavLink } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import {useDispatch, useSelector } from "react-redux"
import { contentActions } from '../../store/content/actions';
import './BreadCrumbs.scss'

function Breadcrumbs(){
    const breadcrumbs = useBreadcrumbs();
    const dispatch = useDispatch();
    const { title } = useSelector((state)=>state.content);
    return(
        <div className="top-bar" name="content">
            <h2 className="list-title">
                {title}
            </h2>
            <ul className="breadcrumbs-list">
                {breadcrumbs.map((breadcrumb, id) =>{
                    return(
                        <li className={id !== breadcrumbs.length-1 ? "breadcrumb arrow" : "breadcrumb"} key={nanoid(10)}>
                            <NavLink className="breadcrumb-link" to={breadcrumb.key} onClick={()=>{
                                if(breadcrumb.key === '/'){
                                    dispatch(contentActions.setCity('Kiev'))
                                }
                                dispatch(contentActions.setCurrPage(1))
                            }}>{breadcrumb.key === '/' ? 'Home' : breadcrumb.key.split('/')[1]}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Breadcrumbs;