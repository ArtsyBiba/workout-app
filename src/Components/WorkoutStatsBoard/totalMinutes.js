import React, { useState, useEffect } from 'react';

import './styles.css';

export default function TotalMinutes(props) {
    const {workouts} = props;
    
    const [totalMinutes, setTotalMinutes] = useState(0);
    
    const countTotalMinutes = (workouts) => {
        let sum = 0;
        
        for (const workout in workouts) {
            let minutes = workouts[workout].duration;
            sum = Number(minutes) + Number(sum);
        }    
        
        setTotalMinutes(sum);
    };

    useEffect(() => {
        countTotalMinutes(workouts);
    }, [workouts]);

    return (
        <div className='stats'>
            <div className='stat-name'>Total Minutes: </div>
            <div className='stat-data'>{totalMinutes}</div>
        </div>
    )
};