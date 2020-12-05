import React, { useState, useEffect } from 'react';

import './styles.css';
import buildCalendar from './build';
import dayStyles from './styles';
import Header from './header';

export default function Calendar({date, setDate}) {
    const [calendar, setCalendar] = useState([]);

    useEffect(() => {
        setCalendar(buildCalendar(date));
    }, [date]);

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
                                <div className={dayStyles(day, date)}>
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
