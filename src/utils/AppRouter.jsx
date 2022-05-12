import React, { useContext } from 'react';
import {
    Routes,
    Route,
  } from "react-router-dom"; 
import { publicRoutes, privateRoutes } from '../router/routes';
import { LogContext } from './context';

const AppRouter = () => {

    const {isLogedIn, setIsLogedIn} = useContext(LogContext);

    return (
        isLogedIn
           ? <Routes>
                {privateRoutes.map(route =>
                    <Route key={route.path} element={route.component} path={route.path}/>
                   
                )}
            </Routes>
            : <Routes>
                {publicRoutes.map(route =>
                    <Route key={route.path} element={route.component} path={route.path}/>
                )}
            </Routes>
    )
};

export default AppRouter;