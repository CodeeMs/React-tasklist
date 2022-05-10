import React, {useEffect, useState} from "react";
import AppRouter from "./utils/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import { LogContext } from "./utils/context";



const App = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);

  useEffect( () =>{
    if(localStorage.getItem('loged')){
      setIsLogedIn(true);
    }
  }, [])

  return(
    <LogContext.Provider value={{
      isLogedIn,
      setIsLogedIn
    }}>
    <Router>
     <AppRouter/>
    </Router>
    </LogContext.Provider>
  )
  
};

export default App;