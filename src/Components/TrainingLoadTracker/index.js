import { useState, useEffect } from 'react';
import styled from 'styled-components';
import filterData from './filter';
import { countTotalLoad } from './counters';
import InstructionsIcon from '../CalendarAndWorkoutData/WorkoutData/InstructionsIcon';
import Message from './Message';

export default function TrainingLoadTracker({ firebase, authUser }) {
    const [oneWeekWorkouts, setOneWeekWorkouts] = useState();
    const [twoWeeksWorkouts, setTwoWeeksWorkouts] = useState();
    const [loadIncrease, setLoadIncrease] = useState();
    
    useEffect(() => {        
        const ref = firebase.db.ref().child(`users/${authUser.uid}/workouts`);
        ref.on('value', (snapshot) => {
            let data = snapshot.val();
            let filteredData = filterData(data, 'one-week');

            setOneWeekWorkouts(filteredData);
        });
    }, [authUser, firebase, setOneWeekWorkouts]);

    useEffect(() => {        
        const ref = firebase.db.ref().child(`users/${authUser.uid}/workouts`);
        ref.on('value', (snapshot) => {
            let data = snapshot.val();
            let filteredData = filterData(data, 'four-weeks');

            setTwoWeeksWorkouts(filteredData);
        });
    }, [authUser, firebase, setTwoWeeksWorkouts]);

    useEffect(() => {  
        if (oneWeekWorkouts && twoWeeksWorkouts) {
            const totalLoadOneWeek = countTotalLoad(oneWeekWorkouts);
            const totalLoadTwoWeeks = countTotalLoad(twoWeeksWorkouts);

            const increase = ((totalLoadOneWeek - totalLoadTwoWeeks) / totalLoadTwoWeeks)*100;
            setLoadIncrease(increase.toFixed(1));
        };
    }, [oneWeekWorkouts, twoWeeksWorkouts]);  

    return (
        <WorkoutStatsWrapper>
            <WorkoutStatsHeader>
                Workout Data
                <InstructionsIcon
                    text='Using Acute Chronic Workload Ratio (ACWR) is a relatively simple method for 
                    tracking training load. In terms of injury risk, an ACWR within the range of -20% to +30% 
                    could be considered the training ‘sweet spot’, while ACWR >+50% typically represents 
                    the ‘danger zone’.'
                />
            </WorkoutStatsHeader>
            <WorkoutStatsBody>
                <WorkoutStatsDisplay>
                    <Stats>
                        <StatName>Acute Chronic Workload Ratio:</StatName>
                        <StatData>{loadIncrease}%</StatData>
                    </Stats>
                </WorkoutStatsDisplay>
                <Message loadIncrease={loadIncrease} />
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
    padding-bottom: 1em;
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

