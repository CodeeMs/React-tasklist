import React, {useState, useEffect} from 'react';
import FreeButton from '../components/UI/buttons/FreeButton';
import RefreshButton from '../components/UI/buttons/RefreshButton';
import star from '../img/start.png';

const Statistics = () => {
    if(!localStorage.getItem('todayStat') && !localStorage.getItem('mainStat')){
        localStorage.setItem('todayStat', 0);
        localStorage.setItem('mainStat', 0);
    }


    let date = new Date();   
    let [statToday, setStatToday] = useState(0);
    let [statAll, setStatAll] = useState(0);
   
    useEffect( () =>{
        if(date.getDate() !== Number(localStorage.getItem('todayKey'))){
            localStorage.setItem('todayStat', 0);
            setStatToday(0);
        } else{
            setStatToday(Number(localStorage.getItem('todayStat')));
        }
        setStatAll(Number(localStorage.getItem('mainStat')));
    }, [])

    function refreshStat(){
        localStorage.setItem('todayStat', 0);
        localStorage.setItem('mainStat', 0);
        setStatToday(0);
        setStatAll(0);
    }
    
    return (
        <div className='page'>
            <div className="page__container">
                <h2 className="page__title">Here you can see your statistic</h2>
                <div className="stats">
                    <div className="stats__container">
                        <div className="stat__item">
                            <img src={star} alt="start" /> <p className='stat__sting'> Tasks completed today: <span className='stats__span'>{statToday}</span></p>
                        </div>
                        <div className="stat__item">
                            <img src={star} alt="start" /> <p className='stat__sting'> Tasks completed for all time: <span className='stats__span'>{statAll}</span></p>
                        </div>
                        <RefreshButton onClick={refreshStat}>Refresh</RefreshButton>
                    </div>
                    <FreeButton/>
                </div>
            </div>
        </div>
    );
};

export default Statistics;