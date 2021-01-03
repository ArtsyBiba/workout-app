import { useState, useEffect } from 'react';
import styled from 'styled-components';

import InstructionsIcon from './InstructionsIcon';
import UserInput from './UserInput';

export default function WorkoutData({ firebase, authUser, date }) {
    const selectedDate = date.format('YYYY-MM-DD');
    const showDate = date.format('MMM DD, YYYY');

    const [savedWorkout, setSavedWorkout] = useState([]);
    const [workoutId, setWorkoutId] = useState('');

    useEffect(() => {
        setSavedWorkout([]);
        
        const ref = firebase.db.ref().child(`users/${authUser.uid}/workouts`);
        const query = ref.orderByChild('date').equalTo(selectedDate);
        query.on('value', (snapshot) => {
            snapshot.forEach((childSnapshot) => {
                let childData = childSnapshot.val();
                let id = childSnapshot.key;
                setWorkoutId(id);
                setSavedWorkout(childData);
            });          
        });
    }, [selectedDate, authUser, firebase]);

    return (
        <WorkoutDataWrapper>
            <WorkoutDataHeader>
                Workout Data
                <InstructionsIcon
                    text='Enter your workout data after selecting
                    a date in the calendar.'
                />
            </WorkoutDataHeader>
            <WorkoutDataBody>
                <SelectedDate>
                    {showDate}
                </SelectedDate>
                <UserInput 
                    selectedDate={selectedDate} 
                    firebase={firebase}
                    authUser={authUser}
                    savedWorkout={savedWorkout}
                    setSavedWorkout={setSavedWorkout}
                    workoutId={workoutId}
                />
            </WorkoutDataBody>
        </WorkoutDataWrapper>
    )
};

const WorkoutDataWrapper = styled.div`
    box-sizing: border-box;
	font-size: 1rem;
	width: 400px;
	height: 324px;
    margin-top: 1em;

    @media (max-width: 600px) {
		margin-top: 1em;
	}
`;

const WorkoutDataHeader = styled.div`
	font-weight: 700;
	min-height: 2em;
	line-height: 2em;
	text-align: center;
	align-content: center;
`;

const WorkoutDataBody = styled.div`
    background-color: white;
	border-radius: 10px;
	height: 265px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin-top: 0.5em;
`;

const SelectedDate = styled.div`
	font-weight: 600;
	min-height: 2em;
	font-size: 1rem;
	line-height: 2em;
	text-align: center;
	margin-top: 0.5em;
`;