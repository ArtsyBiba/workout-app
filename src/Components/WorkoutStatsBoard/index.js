import React, { useState, useEffect } from 'react';
import { default as ActivityBoard } from 'react-github-contribution-calendar';
import moment from 'moment';
import styled from 'styled-components';

import './styles.css';
import TotalMinutes from './totalMinutes';
import AverageIntensity from './averageIntensity';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function WorkoutStatsBoard({ firebase, authUser }) {
    const [workouts, setWorkouts] = useState();
    const [workoutIds, setWorkoutIds] = useState([]);
    const [formattedWorkouts, setFormattedWorkouts] = useState();
    const [timePeriod, setTimePeriod] = useState('all');

    useEffect(() => {
        const filterData = (data) => {
            switch(timePeriod) {
                case 'year':
                    return updateData('year', data);
                case 'month':
                    return updateData('month', data);
                case 'two-weeks':
                    return updateData('two-weeks', data);
                default: return data;
            }
        };

        const updateData = (length, data) => {
            const updatedData = {};

            return updatedData;
        };
        
        const ref = firebase.db.ref().child(`users/${authUser.uid}/workouts`);
        ref.on('value', (snapshot) => {
            let data = snapshot.val();

            let ids = Object.keys(filterData(data));

            setWorkouts(filterData(data));
            setWorkoutIds(ids);
        });
    }, [authUser, firebase, timePeriod]);

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
                <TimePeriod>
                    <StyledSelect
                        value={timePeriod}
                        onChange={(e) => setTimePeriod(e.target.value)} 
                    >
                        <MenuItem value='all'>All Workouts</MenuItem>
                        <MenuItem value='year'>Last Year</MenuItem>
                        <MenuItem value='month'>Last Month</MenuItem>
                        <MenuItem value='two-weeks'>Last Two Weeks</MenuItem>
                    </StyledSelect>
                </TimePeriod>
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

const TimePeriod = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledSelect = styled(Select)`
    width: 35%;
    margin-top: 1em;
    margin-bottom: 0.5em;
    justify-self: center;

    @media (max-width: 600px) {
		width: 60%;
	}
`;