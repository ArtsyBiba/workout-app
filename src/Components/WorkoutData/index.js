import React, { useState, useEffect } from 'react';

import InstructionsIcon from './InstructionsIcon';

import './styles.css';
import UserInput from './userInput';

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
        <div className='workout-data'>
            <div className='header'>
                Workout Data
                <InstructionsIcon
                    text='Enter your workout data after selecting
                    a date in the calendar.'
                />
            </div>
            <div className='body'>
                <div className='selected-date'>
                    {showDate}
                </div>
                <UserInput 
                    selectedDate={selectedDate} 
                    firebase={firebase}
                    authUser={authUser}
                    savedWorkout={savedWorkout}
                    setSavedWorkout={setSavedWorkout}
                    workoutId={workoutId}
                />
            </div>
        </div>
    )
};