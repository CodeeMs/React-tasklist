import React from 'react';

const MyLink = (props) => {
    return (
        <button className='head__link' {...props}>{props.children}</button>
    );
};

export default MyLink;