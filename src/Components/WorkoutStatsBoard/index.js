import React, { useState, useEffect } from 'react';

import './styles.css';
import TotalMinutes from './totalMinutes';
import AverageIntensity from './averageIntensity';

export default function WorkoutStatsBoard(props) {
    const {firebase, authUser} = props;
    
    const [workouts, setWorkouts] = useState();
    const [workoutIds, setWorkoutIds] = useState([]);

    useEffect(() => {
        const ref = firebase.db.ref().child(`users/${authUser.uid}/workouts`);
        ref.on('value', (snapshot) => {
            let data = snapshot.val();
            let ids = Object.keys(data);
            setWorkouts(data);
            setWorkoutIds(ids);
        });
    }, [authUser, firebase]);

    return (
        <div className='workout-stats'>
            <div className='header'>Workout Board - Total for This Year</div>
            <div className='display'>
                <div className='stats'>
                    <div className='stat-name'># of Workouts</div>
                    <div className='stat-data'>{workoutIds.length}</div>
                </div>
                <TotalMinutes workouts={workouts} />
                <AverageIntensity workouts={workouts} workoutIds={workoutIds} />
            </div>
        </div>
    )
};