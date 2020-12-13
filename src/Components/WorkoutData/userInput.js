import React, { useState } from 'react';

import './styles.css';
import InputField from './InputField';

export default function UserInput(props) {
    const {firebase, authUser, selectedDate, savedWorkout, setSavedWorkout, workoutId} = props;

    const defaultWorkout = {
        activity: '',
        duration: '',
        intensity: '',
        date: selectedDate,
    };

    const [newWorkout, setNewWorkout] = useState(defaultWorkout);

    const handleSubmit = () => {
        if (authUser) {
            newWorkout.date = selectedDate;
            firebase.addWorkout(authUser.uid, newWorkout);
            setNewWorkout(defaultWorkout);
        }
    };

    const handleReset = () => {
        if (authUser) {
            firebase.resetWorkout(authUser.uid, workoutId);
            setSavedWorkout(defaultWorkout);
        }
    };

    return (
        <div className='user-input-wrapper'>
            <div className='user-input'>
                <div className='input-type'>Activity Type</div>
                {savedWorkout && <div className='saved-workout'>{savedWorkout.activity}</div>}
                <InputField
                    value={newWorkout.activity}
                    onChange={(e) => setNewWorkout({...newWorkout, activity: e.target.value})} 
                />
            </div>
            <div className='user-input'>
                <div className='input-type'>Duration (min)</div>
                {savedWorkout && <div className='saved-workout'>{savedWorkout.duration}</div>}
                <InputField
                    value={newWorkout.duration}
                    onChange={(e) => setNewWorkout({...newWorkout, duration: e.target.value})} 
                />
            </div>
            <div className='user-input'>
                <div className='input-type'>Intensity (1-10)</div>
                {savedWorkout && <div className='saved-workout'>{savedWorkout.intensity}</div>}
                <InputField
                    value={newWorkout.intensity}
                    onChange={(e) => setNewWorkout({...newWorkout, intensity: e.target.value})} 
                />
            </div>
            <div className='buttons'>
                <button className='button-add' onClick={handleSubmit}>Add Workout</button>
                <button className='button-reset' onClick={handleReset}>Reset Workout</button>
            </div>
        </div>
    )
};