import { useState, useEffect } from 'react';
import moment from 'moment';
import styled from 'styled-components';

export default function TrainingLoadTracker({ firebase, authUser }) {
    // const [workouts, setWorkouts] = useState();
    // const [workoutIds, setWorkoutIds] = useState([]);
    // const [formattedWorkouts, setFormattedWorkouts] = useState();

    // const today = moment();
    // const formattedToday = today.format('YYYY-MM-DD');
    
    // useEffect(() => {
    //     let workoutsList = {};

    //     for (const workout in workouts) {
    //         let day = workouts[workout].date;
    //         let intensity = Number(workouts[workout].intensity);
    //         workoutsList[day] = intensity;
    //     }    
        
    //     setFormattedWorkouts(workoutsList);
    // }, [workouts]);

    return (
        <WorkoutStatsWrapper>
            <WorkoutStatsHeader>Training Load Tracker</WorkoutStatsHeader>
            <WorkoutStatsBody>
                <WorkoutStatsDisplay>
                    <Stats>
                        <StatName>Total Workouts: </StatName>
                        <StatData>TBD</StatData>
                    </Stats>
                </WorkoutStatsDisplay>
            </WorkoutStatsBody>
        </WorkoutStatsWrapper>
    )
};

const WorkoutStatsWrapper = styled.div`
    box-sizing: border-box;
	font-size: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	margin: auto;
	margin-top: 1em;
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