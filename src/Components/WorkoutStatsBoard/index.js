import React, { useState, useEffect } from 'react';

import './styles.css';

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

    const countTotalMinutes = (workouts) => {
        let sum = 0;
        
        for (const workout in workouts) {
            let minutes = workouts[workout].duration;
            sum = Number(minutes) + Number(sum);
        }
       
        return sum;
    };

    if(workouts) {countTotalMinutes(workouts)};

    console.log(sum)

    return (
        <div className='workout-stats'>
            <div className='header'>Workout Board - Total for This Year</div>
            <div className='display'>
                <div className='stats'>
                    <div className='stat-name'># of Workouts</div>
                    <div className='stat-data'>{workoutIds.length}</div>
                </div>
                <div className='stats'>
                    <div className='stat-name'># of Minutes</div>
                    <div className='stat-data'></div>
                </div>
                <div className='stats'>
                    <div className='stat-name'>Average Intensity</div>
                    <div className='stat-data'>num</div>
                </div>
            </div>
        </div>
    )
};