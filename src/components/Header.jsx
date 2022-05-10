import React, { useContext } from 'react';
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
    return (
        <div className='header'>
            <div>
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
