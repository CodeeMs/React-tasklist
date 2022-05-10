import React from 'react';

const Intro = (props) => {
    return (
        <div className='intro'>
            <h1>{props.title}</h1>
            <h2 className='intro__subtitle'> {props.subtitle}</h2>
            <p className='intro__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ullam nemo dolor explicabo, sed minus iusto harum
                magnam repellendus atque doloribus culpa architecto qui sit delectus rem recusandae corrupti! Quod?
            </p>
        </div>
    );
};

export default Intro;