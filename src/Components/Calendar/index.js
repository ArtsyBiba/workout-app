import React, { useState } from 'react';
import moment from 'moment';

import './styles.css';

export default function Calendar() {
    const value = moment();
    const startDay = value.clone().startOf('month').startOf('week');
    const endDay = value.clone().endOf('month').endOf('week');
    const day = startDay.clone().subtract(1, 'day');
    const calendarArray = [];

    while(day.isBefore(endDay, 'day')) {
        calendarArray.push(
            Array(7)
                .fill(0)
                .map(() => day.add(1, 'day').clone())
        );
    };
    
    return (
        <div className='calendar'>
            {calendarArray.map((week) => (
                <div>
                    {week.map((day) => (
                        <div className='day'>{day.format('D').toString()}</div>
                    ))}
                </div>
            ))}
        </div>
    )
};
