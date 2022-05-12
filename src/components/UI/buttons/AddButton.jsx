import React from 'react';
import classes from './MyButton.module.css';

const AddButton = ({children, disabled, ...props}) => {
    return (
        <button {...props} disabled={disabled} className={classes.btn__add}>
            {children}
        </button>
    );
};

export default AddButton;