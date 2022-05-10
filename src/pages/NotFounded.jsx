import React from 'react';
import { useLocation } from "react-router-dom";
import FreeButton from '../components/UI/buttons/FreeButton';

const NotFounded = () => {

    let location = useLocation();

    return (
        <div className='shouldlogin__page'>
            <h3 className='error__title'> <span className='error__span'>Error:</span> no match for {location.pathname}</h3>
            <FreeButton/>
        </div>
    );
};

export default NotFounded;