import React, { useContext, useState } from 'react';
import MyLink from './MyLink';
import { useNavigate } from "react-router-dom";
import { LogContext } from '../utils/context';

const Header = () => {

    const {isLogedIn, setIsLogedIn}  = useContext(LogContext);

    let navigate = useNavigate();
    function handleClick(e) {
        e.preventDefault();
        navigate(`${e.target.id}`);
      }

    const login = (e) =>{
        e.preventDefault();
        setIsLogedIn(true);
        localStorage.setItem('loged', true);
    }

    const logout = (e) =>{
        e.preventDefault();
        setIsLogedIn(false);
        localStorage.removeItem('loged');
    }

    const [burgerClasses, setBurgerClasses] = useState('burger'),
    [menuClasses, setMenuClasses] = useState('hidden__menu'),
    [headerClasses, setHeaderClasses] = useState('header');

    function addMenu(){
        setBurgerClasses('burger hide');
        setMenuClasses('hidden__menu visible__menu');
        setHeaderClasses('header header__end');
    }

    function removeMenu(){
        setBurgerClasses('burger');
        setMenuClasses('hidden__menu');
        setHeaderClasses('header');
    }

    return (
        <div className={headerClasses}>
            <div className='header__navbar'>
                <MyLink id='about' onClick={handleClick}>About</MyLink>
                <MyLink id='how' onClick={handleClick}>Statistics</MyLink>
                <MyLink id='tips' onClick={handleClick}>Tips</MyLink>
            </div>
            <div onClick={addMenu} className={burgerClasses}>Menu</div>
            <div className={menuClasses}>
                <span onClick={removeMenu} className='close__btn'></span>
                <MyLink id='about' onClick={handleClick}>About</MyLink>
                <MyLink id='how' onClick={handleClick}>Statistics</MyLink>
                <MyLink id='tips' onClick={handleClick}>Tips</MyLink>
            </div>
                {isLogedIn
                    ? <MyLink onClick={logout}>Logout</MyLink>
                    : <MyLink onClick={login}>Login</MyLink>
                }
        </div>
    );
};

export default Header;
