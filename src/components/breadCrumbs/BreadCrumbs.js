import React, {useContext} from 'react';
import Context from '../context'
import { nanoid } from 'nanoid';
import { NavLink } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { map } from 'leaflet';

function Breadcrumbs(){
    const breadcrumbs = useBreadcrumbs();
    const {setCity, title, setCurrPage} = useContext(Context);
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
                                    setCity('Kiev')
                                }
                                setCurrPage(1);
                            }}>{breadcrumb.key === '/' ? 'Home' : breadcrumb.key.split('/')[1]}</NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Breadcrumbs;