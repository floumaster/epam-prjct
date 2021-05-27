import React, {useContext} from 'react';
import Context from '../context'

function Loader(){
    const {loaderRef} = useContext(Context);
    return(
        <div className="loader-wrapper hidden" id="loader-wrapper" ref={loaderRef}>
            <div className="loader">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
                <div className="subline"></div>
                <div className="subline"></div>
                <div className="subline"></div>
                <div className="subline"></div>
                <div className="subline"></div>
                <div className="loader-circle-1"><div className="loader-circle-2"></div></div>
                <div className="needle"></div>
                <div className="loading">Loading</div>
            </div>
        </div>
    )
}

export default Loader;