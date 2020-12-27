import React, { useState, useEffect } from 'react';
import {default as ActivityBoard} from 'react-github-contribution-calendar';
import moment from 'moment';

import './styles.css';
import TotalMinutes from './totalMinutes';
import AverageIntensity from './averageIntensity';

export default function WorkoutStatsBoard({ firebase, authUser }) {
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
    
    const today = moment();
    const formattedToday = today.format('YYYY-MM-DD');
    
    const panelColors = [
        'rgb(250,250,250)', //0
        'rgb(152,251,152,0.8)', //1
        'rgb(152,251,152)', //2
        'rgb(152,251,152)', //3 
        'rgb(127,255,0)', //4
        'rgb(127,255,0)', //5
        'rgb(127,255,0)', //6
        'rgb(50,205,50)', //7
        'rgb(50,205,50)', //8
        'rgb(0,128,0)', //9
        'rgb(0,100,0)', //10
    ];

    return (
        <div className='workout-stats'>
            <div className='header'>Workouts Dashboard</div>
            <div className='body'>
                <div className='display'>
                    <div className='stats'>
                        <div className='stat-name'>Total Workouts: </div>
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
        </div>
    )
};