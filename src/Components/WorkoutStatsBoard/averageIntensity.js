import { useState, useEffect } from 'react';

import './styles.css';

export default function TotalMinutes({ workouts, workoutIds }) {
    const [averageIntensity, setAverageIntensity] = useState(0);
    
    const countAverageIntensity = (workouts, workoutIds) => {
        let sum = 0;
        
        for (const workout in workouts) {
            let intensity = workouts[workout].intensity;
            sum = Number(intensity) + Number(sum);
        }    
        
        const average = sum / workoutIds.length;
        const rounded = Math.round(average * 10) / 10;

        setAverageIntensity(rounded.toString());
    };

    useEffect(() => {
        countAverageIntensity(workouts, workoutIds);
    }, [workouts, workoutIds]);

    return (
        <div className='stats'>
            <div className='stat-name'>Average Intensity: </div>
            <div className='stat-data'>{averageIntensity}</div>
        </div>
    )
};