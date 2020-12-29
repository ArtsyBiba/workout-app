import { useState, useEffect } from 'react';

import './styles.css';
import buildCalendar from './build';
import dayStyles from './styles';
import Header from './header';

export default function Calendar({ date, setDate, firebase, authUser }) {
    const [calendar, setCalendar] = useState([]);
    const [workoutDates, setWorkoutDates] = useState();

    useEffect(() => {
        setCalendar(buildCalendar(date));
    }, [date]);

    useEffect(() => {
        const ref = firebase.db.ref().child(`users/${authUser.uid}/workouts`);
        ref.on('value', (snapshot) => {
            let workouts = snapshot.val();
            let dates = getWorkoutDates(workouts);
            setWorkoutDates(dates);
        });
    }, [authUser, firebase]);

    const getWorkoutDates = (workouts) => {
        const dates = [];

        for (const workout in workouts) {
            let day = workouts[workout].date;
            dates.push(day);
        } 

        return dates;
    };

    return (
        <div className='calendar'>
            <Header date={date} setDate={setDate} />
            <div className='body'>
                <div className='day-names'>
                    {['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'].map((day, index) => (
                        <div key={index} className='week'>{day}</div>
                    ))}
                </div>
                {calendar.map((week, index) => (
                    <div key={index}>
                        {week.map((day, index) => (
                            <div 
                                key={index}    
                                className='day'
                                onClick={() => setDate(day)}
                            >
                                <div className={dayStyles(day, date, workoutDates)}>
                                    {day.format('D').toString()}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
};
