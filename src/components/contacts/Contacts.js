import React, {useEffect, useContext} from 'react';
import BreadCrumbs from '../breadCrumbs/BreadCrumbs'
import {useDispatch, useSelector } from "react-redux"
import { contentActions } from '../../store/content/actions';
import Context from '../context'

function Contacts(){
    const {promoRef} = useContext(Context);
    const dispatch = useDispatch();
    useEffect(() => {
        promoRef.current.className = "promo-wrapper hidden";
        dispatch(contentActions.setTitle(`Contacts`))
    }, []);
    return(
        <div className="content">
            <BreadCrumbs/>
            <div className="map">
                <iframe className="google-map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d661104.0948471004!2d38.4194255!3d49.6648901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41279d88e0868ca9%3A0x6986f1232cc7e61e!2z0J_QtdGA0YjQvtGC0YDQsNCy0L3QtdCy0L7QtSwg0KXQsNGA0YzQutC-0LLRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwgNjI0NjU!5e0!3m2!1sru!2sua!4v1622022586594!5m2!1sru!2sua"></iframe>
            </div>
        </div>
    )
}

export default Contacts;