import React, {useContext, useEffect} from 'react';
import BreadCrumbs from '../breadCrumbs/BreadCrumbs'
import Context from '../context'
import {useDispatch } from "react-redux"
import { contentActions } from '../../store/content/actions';

function Faq(){
    const {promoRef} = useContext(Context);
    const dispatch = useDispatch();
    useEffect(() => {
        promoRef.current.className = "promo-wrapper hidden";
        dispatch(contentActions.setTitle(`FAQ`));
    }, []);
    return(
        <div className="content">
            <BreadCrumbs/>
            <div className="faq">
                <ul className="faq-left">
                    <li className="question">
                        <p>What is deposit?</p>
                    </li>
                    <li className="question">Can I take a car without a deposit (collateral)?</li>
                    <li className="question">Can I drive my rented car abroad?</li>
                    <li className="question">What currency is the payment made in?</li>
                    <li className="question">What to do in case of an accident?</li>
                </ul>
                <ul className="faq-right">
                    <li className="question">How are the company's cars insured?</li>
                    <li className="question">What does the insurance not cover?</li>
                    <li className="question">What are the car mileage restrictions? What if I have exceeded the mileage limit?</li>
                    <li className="question">In what form is the car transferred?</li>
                    <li className="question">What to do in case of car breakdown?</li>
                </ul>
            </div>
        </div>
    )
}

export default Faq;