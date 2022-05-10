import React from 'react';
import FreeButton from '../components/UI/buttons/FreeButton';
import luck from '../img/luck.jpg';

const Tips = () => {

    return (
        <div className='page'>
            <h2 className='page__title'>This page, like about page, was created to show navigation functionality</h2>
            <h3 className='page__subtitle'>But the Statistics page has real statistic about your tasks ;)</h3>
            <div className="page__banner">Anyway, you can see some useful tips</div>
            <ul className='tips__list'>
                <li className='tips__item'> <span className='tips__span'>1.</span> Set tasks taking into account household plans and responsibilities</li>
                <li className='tips__item'> <span className='tips__span'>2.</span> Do the most difficult tasks first</li>
                <li className='tips__item'> <span className='tips__span'>3.</span> Don't take on the most difficult tasks on Monday, plan them for Tuesday or Wednesday</li>
                <li className='tips__item'> <span className='tips__span'>4.</span> Watch statistics more often and motivate yourself</li>
                <li className='tips__item'> <span className='tips__span'>5.</span> Record completed tasks and the amount of time it takes to complete them</li>
            </ul>
            <img className='tips__img' src={luck} alt="alt" />
            <FreeButton/>
        </div>
    );
};

export default Tips;