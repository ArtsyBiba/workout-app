import { useState, useEffect } from 'react';
import { default as ActivityBoard } from 'react-github-contribution-calendar';
import moment from 'moment';
import styled from 'styled-components';

import TotalMinutes from './TotalMinutes';
import AverageIntensity from './AverageIntensity';
import TimePeriod from './TimePeriod';


export default function WorkoutStatsBoard({ firebase, authUser }) {
    const [workouts, setWorkouts] = useState();
    const [workoutIds, setWorkoutIds] = useState([]);
    const [formattedWorkouts, setFormattedWorkouts] = useState();

    const today = moment();
    const formattedToday = today.format('YYYY-MM-DD');
    
    useEffect(() => {
        let workoutsList = {};

        for (const workout in workouts) {
            let day = workouts[workout].date;
            let intensity = Number(workouts[workout].intensity);
            workoutsList[day] = intensity;
        }    
        
        setFormattedWorkouts(workoutsList);
    }, [workouts]);

    return (
        <WorkoutStatsWrapper>
            <WorkoutStatsHeader>Workouts Dashboard</WorkoutStatsHeader>
            <WorkoutStatsBody>
                <TimePeriod 
                    setWorkouts={setWorkouts} 
                    setWorkoutIds={setWorkoutIds}
                    firebase={firebase}
                    authUser={authUser}
                />
                <WorkoutStatsDisplay>
                    <Stats>
                        <StatName>Total Workouts: </StatName>
                        <StatData>{workoutIds.length}</StatData>
                    </Stats>
                    <TotalMinutes workouts={workouts} />
                    <AverageIntensity workouts={workouts} workoutIds={workoutIds} />
                </WorkoutStatsDisplay>
                <ActivityBoardWrapper>
                    <ActivityBoard 
                        values={formattedWorkouts || formattedToday} 
                        until={formattedToday} 
                        panelColors={panelColors} 
                    />
                </ActivityBoardWrapper>
            </WorkoutStatsBody>
        </WorkoutStatsWrapper>
    )
};

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

const WorkoutStatsWrapper = styled.div`
    box-sizing: border-box;
	font-size: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	margin: auto;
	margin-top: 1.5em;
    width: 92%;
    
    @media (max-width: 600px) {
        margin-top: 0;
    }
`;

const WorkoutStatsHeader = styled.div`
	font-weight: 700;
	min-height: 2em;
	line-height: 2em;
	text-align: center;
	background-color: none;
`;

const WorkoutStatsBody = styled.div`
	background-color: white;
	margin-top: 0.5em;
    border-radius: 10px;
    
    @media (max-width: 600px) {
        font-size: 0.8em;
    }
`;

const WorkoutStatsDisplay = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-top: 1em;
`;

const Stats = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`;

const StatName = styled.div`
	font-weight: 600;
	min-height: 1.5em;
	line-height: 1.5em;
	text-align: center;
	margin-right: 0.5em;
`;

const StatData = styled.div`
	font-weight: 400;
	min-height: 1.5em;
	line-height: 1.5em;
	text-align: center;
`;

const ActivityBoardWrapper = styled.div`
	margin: auto;
	margin-top: 1.5em;
	margin-bottom: 0.7em;
	width: 60%;
`;