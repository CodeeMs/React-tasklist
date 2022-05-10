import React from 'react';
import classes from './MyButton.module.css';

const AddButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.btn__add}>
            {children}
        </button>
    );
};

export default AddButton;