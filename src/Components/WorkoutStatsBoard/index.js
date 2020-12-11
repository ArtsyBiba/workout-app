import React, { useState, useEffect } from 'react';
import {default as ActivityBoard} from 'react-github-contribution-calendar';

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

    let values = {
        '2016-06-23': 1,
        '2016-06-26': 2,
        '2016-06-27': 3,
        '2016-06-28': 4,
        '2016-06-29': 4
      }
    let until = '2016-06-30';

    return (
        <div className='workout-stats'>
            <div className='header'>Workout Dashboard - Total for This Year</div>
            <div className='display'>
                <div className='stats'>
                    <div className='stat-name'># of Workouts</div>
                    <div className='stat-data'>{workoutIds.length}</div>
                </div>
                <TotalMinutes workouts={workouts} />
                <AverageIntensity workouts={workouts} workoutIds={workoutIds} />
            </div>
            <div className='activity-board-wrapper'>
                <ActivityBoard values={values} until={until} />
            </div>
        </div>
    )
};