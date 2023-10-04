import React, {useState} from 'react';
import  ".../app.css";

export const Countdown = () => {
const[days, setDays]= useState(0);
const[hours, sethours]= useState(0);
const[minutes, setminutes]= useState(0);
const[seconds, setseconds]= useState(0);
const[inputDate, setInputDate]= useState("1 Jan  2023");
const[currentDate, setCurrentDate]= useState(inputDate);
useEffect (()=>{
const changingDate =new Date (inputDate);
const currentDate= new Date();
const totalSeconds=( changingDate - currentDate)/1000;

setDays(formatTime(Math.floor(totalSeconds/3600)%24));
sethours(Math.floor(totalSeconds/3600)%24);
setminutes(Math.floor(totalSeconds/60)%24);
setseconds(Math.floor(totalSeconds/60));
}, [currentDate]);

function formatTime(time){
    return time <10? '0${time}' :time;
}
const onChangeHandler=(event)=> {
    setInputDate(event.target.value);
};

const onClickHandler=()=>{
   setCurrentDate(inputDate);
};


  return (
    <div className="Countdown-containor">
        <div className="Countdown-values">
        <div className="Countdown-value">
            <p className="big-text">{days}</p>
            <span>days</span>
        </div>
        </div>
        
        <div className="Countdown-values">
        <div className="Countdown-value">
            <p className="big-text">{hours}</p>
            <span>hours</span>
        </div>
        <div className="Countdown-values">
        <div className="Countdown-value">
            <p className="big-text">{minutes}</p>
            <span>minutes</span>
        </div>
</div>
<div className="Countdown-values">
        <div className="Countdown-value">
            <p className="big-text">{seconds}</p>
            <span>seconds</span>
        </div>
        </div>
<div className="countdown-input-button">
    <input className="countdown-input" onChange={onChangeHandler}/>
    <button className="countdown-button" onClick={onClickHandler}>Countdown</button>
</div>









    </div>
    </div>
  );
};
