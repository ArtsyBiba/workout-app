import React, { useState, useEffect } from 'react';
import {default as ActivityBoard} from 'react-github-contribution-calendar';
import moment from 'moment';

import './styles.css';
import TotalMinutes from './totalMinutes';
import AverageIntensity from './averageIntensity';

export default function WorkoutStatsBoard(props) {
    const {firebase, authUser} = props;
    
    const [workouts, setWorkouts] = useState();
    const [workoutIds, setWorkoutIds] = useState([]);
    const [formattedWorkouts, setFormattedWorkouts] = useState();

    useEffect(() => {
        const ref = firebase.db.ref().child(`users/${authUser.uid}/workouts`);
        ref.on('value', (snapshot) => {
            let data = snapshot.val();
            let ids = Object.keys(data);
            setWorkouts(data);
            setWorkoutIds(ids);
        });
    }, [authUser, firebase]);

    const today = moment();
    const formattedToday = today.format('YYYY-MM-DD');

    const formatWorkouts = (workouts) => {
        let workoutsList = {};
        
        for (const workout in workouts) {
            let day = workouts[workout].date;
            let intensity = Number(workouts[workout].intensity);
            workoutsList[day] = intensity;
        }    
        
        setFormattedWorkouts(workoutsList);
    };
    
    useEffect(() => {
        formatWorkouts(workouts);
    }, [workouts]);
    console.log(formattedWorkouts)
    
    const values = {
        '2020-12-05': 1,
        '2020-12-06': 2,
        '2020-12-08': 3,
        '2020-12-09': 4,
        '2020-12-11': 4
      }
    
    const panelColors = [
        '#EEEEEE',
        '#F78A23',
        '#F87D09',
        '#AC5808',
        '#7B3F06'
    ];

    return (
        <div className='workout-stats'>
            <div className='header'>Workouts Dashboard</div>
            <div className='display'>
                <div className='stats'>
                    <div className='stat-name'>Total Workouts</div>
                    <div className='stat-data'>{workoutIds.length}</div>
                </div>
                <TotalMinutes workouts={workouts} />
                <AverageIntensity workouts={workouts} workoutIds={workoutIds} />
            </div>
            <div className='activity-board-wrapper'>
                <ActivityBoard 
                    values={formattedWorkouts || formattedToday} 
                    until={formattedToday} 
                    panelColors={panelColors} 
                />
            </div>
        </div>
    )
};