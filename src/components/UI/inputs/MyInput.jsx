import React from 'react';

const MyInput = (props) => {
    return (
        <input type='text' {...props} className='add__input' placeholder={props.placeholder} />
    );
};

export default MyInput;