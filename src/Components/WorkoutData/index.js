import React, { useState, useEffect } from 'react';

import './styles.css';
import UserInput from './userInput';

export default function WorkoutData(props) {
    const {firebase, authUser, date} = props;

    const selectedDate = date.format('MM/DD/YYYY');

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
            </div>
            <div className='body'>
                <div className='selected-date'>
                    {selectedDate}
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