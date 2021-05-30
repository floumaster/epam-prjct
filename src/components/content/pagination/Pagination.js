import React, {useContext} from 'react'
import { nanoid } from 'nanoid';
import {useDispatch, useSelector } from "react-redux"
import { contentActions } from '../../../store/content/actions';

function Pagination(){
    const dispatch = useDispatch();
    const setCurrPage = (page)=>dispatch(contentActions.setCurrPage(page))
    const { currPage, pages } = useSelector((state)=>state.content);
    const curr_page = currPage;
    let arr = [];
    if(curr_page === 1 || curr_page === 2){
        for(let i = 1; i<=(pages > 3 ? 3 : pages); i++){
            arr.push(i);
        }
    }
    else if(curr_page === pages || curr_page === pages-1){
        for(let i = pages; i>=(pages > 3 ? (pages - 2) : 1); i--){
            arr.unshift(i);
        }
    }
    else{
        for(let i = curr_page-1; i<=curr_page+1; i++){
            arr.push(i);
        }
    }
    return(
        <div className="pagination">
            <div className="pagination-left_arrow">
                <img className="pagination-left_arrow-img" src="../images/right.png" alt="prev" onClick={()=>{setCurrPage(curr_page === 1 ? curr_page : curr_page - 1)}}/>
            </div>
            <ul className="pagination-links">
                {arr.map(el=>{
                    return(
                        <li className={curr_page===el?"pagination-link curr" : "pagination-link"} key={nanoid(10)} onClick={()=>{setCurrPage(el)}}>{el}</li>
                    )
                })}
            </ul>
            <div className="pagination-right_arrow">
                <img className="pagination-left_arrow-img" src="../images/right.png" alt="next" onClick={()=>{setCurrPage(curr_page === pages ? curr_page : curr_page + 1)}}/>
            </div>
        </div>
    )
}

export default Pagination;