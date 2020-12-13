import preloader from '../../assets/images/Loading/loading.gif';
import React from 'react';

let Preloader = () => {
    return (
        <div className="w-100 d-flex justify-content-center">
            <img src={preloader} />
        </div>
    )
}

export default Preloader