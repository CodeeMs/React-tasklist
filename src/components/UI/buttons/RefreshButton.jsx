import React from 'react';
import classes from './MyButton.module.css';

const RefreshButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.btn__refresh}>
            {children}
        </button>
    );
};

export default RefreshButton;