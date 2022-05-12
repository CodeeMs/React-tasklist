import React from 'react';
import FreeButton from '../components/UI/buttons/FreeButton';

const ShouldLogin = () => {

    return (
        <div className='shouldlogin__page'>
            <h2 className='shouldlogin__title'>You must be logged in to check this page!</h2>
            <FreeButton/>
        </div>
    );
};

export default ShouldLogin;