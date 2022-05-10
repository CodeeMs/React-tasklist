import React from 'react';

const MySpan = ({children, ...props}) => {
    return (
        <span {...props} className='form__span'>
            {children}
        </span>
    );
};

export default MySpan;