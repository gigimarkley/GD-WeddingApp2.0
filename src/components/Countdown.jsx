import React, { useState, useEffect } from 'react'
import { Container } from 'reactstrap';
import {pageTitle, countdownBody, countdownContainer} from '../styling'
import Loading from './Loading';


const Countdown = () => {
	const [time, setTime] = useState('0 hours 0 minutes 0 seconds');
    const [date, setDate] = useState('0 year 0 months 0 days');
    const [isLoading, setIsLoading] = useState(true)
    
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
        const weddingDate = new Date(2023, 8, 30, 11, 0); //YYYY, MM (starts at 0), DD, HH, MM
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
                setIsLoading(false)
            }
        }
    
        const intervalId = setInterval(()=>{
            startCountdown(weddingDate);
        },1000)
        return () => clearInterval(intervalId);
    }, []);


	return (
		<Container style={countdownContainer}>
            <h1 style={pageTitle}>Countdown</h1>
            {isLoading ? <Loading/>:<>
                <h6 style={countdownBody}>{date}</h6>
                <h6 style={countdownBody}>{time}</h6>
            </>}
		</Container>
	)
}

export default Countdown;
