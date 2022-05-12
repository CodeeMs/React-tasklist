import React from 'react';

const MySpan = ({children, visible, setVisible, upVisible, setUpVisible}) => {
    const rootClasses = ['form__span'];
    if(visible){
        rootClasses.push('visible');
    }
    if(upVisible){
        rootClasses.push('visible');
    }
    return (
        <span className={rootClasses.join(' ')} >
            {children}
        </span>
    );
};

export default MySpan;