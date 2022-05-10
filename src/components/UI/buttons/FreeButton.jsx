import React from 'react';
import { Link } from 'react-router-dom';
import classes from './MyButton.module.css';

const FreeButton = () => {
    return (
        <Link  to="/" className={classes.free__btn}>Go back</Link>
    );
};

export default FreeButton;