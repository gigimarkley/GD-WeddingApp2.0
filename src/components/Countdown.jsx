import React, { useState, useEffect } from 'react'


const Countdown = () => {
	const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    
    const getTimeRemaining = (date) => {
        const diff = Date.parse(date) - Date.parse(new Date());
        let seconds = Math.floor(diff / 1000),
            minutes = Math.floor(seconds / 60),
            hours   = Math.floor(minutes / 60),
            days    = Math.floor(hours / 24),
            months  = Math.floor(days / 30),
            years   = Math.floor(days / 365);

            seconds %= 60;
            minutes %= 60;
            hours %= 24;
            days %= 30;
            months %= 12;
		return {
			diff, years, months, days, hours, minutes, seconds
		};
	}

    useEffect(() => {
        const weddingDate = new Date(2023, 9, 7, 5, 30); //YYYY, MM (starts at 0), DD, HH, MM

        const startCountdown = (e) => {
            let { diff, years, months, days, hours, minutes, seconds }
                        = getTimeRemaining(e);
            if (diff >= 0) {
                setTime(
                    (hours) + (hours > 1 ? ' hours ' : ' hour ') +
                    (minutes) + (minutes > 1 ? ' minutes ' : ' minute ') +
                    (seconds)  + (seconds > 1 ? ' seconds ' : ' second ') 
                )
    
                setDate(
                    ((years > 0)? (years + (years > 1 ? ' years ': ' year ')): '') +
                    (((months === 0) && (years === 0))? '' : (months + ' months ')) +
                    (days + ' days ' )
                )
            }
        }
    
        const intervalId = setInterval(()=>{
            startCountdown(weddingDate);
        },1000)
        return () => clearInterval(intervalId);
    }, []);


	return (
		<>
            <h1>Countdown</h1>
            <h4>{date}</h4>
            <h4>{time}</h4>
		</>
	)
}

export default Countdown;
