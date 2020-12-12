import React, { useState, useEffect } from 'react';

import './styles.css';

export default function UserInput(props) {
    const {firebase, authUser, selectedDate, savedWorkout, setSavedWorkout, workoutId} = props;

    const defaultWorkout = {
        activity: '',
        duration: '',
        intensity: '',
        date: selectedDate,
    };

    const [newWorkout, setNewWorkout] = useState(defaultWorkout);

    console.log(newWorkout)

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
                <input 
                    value={newWorkout.activity}
                    onChange={(e) => setNewWorkout({...newWorkout, activity: e.target.value})} 
                />
            </div>
            <div className='user-input'>
                <div className='input-type'>Duration</div>
                {savedWorkout && <div className='saved-workout'>{savedWorkout.duration}</div>}
                <input 
                    value={newWorkout.duration}
                    onChange={(e) => setNewWorkout({...newWorkout, duration: e.target.value})} 
                />
            </div>
            <div className='user-input'>
                <div className='input-type'>Intensity</div>
                {savedWorkout && <div className='saved-workout'>{savedWorkout.intensity}</div>}
                <input 
                    value={newWorkout.intensity}
                    onChange={(e) => setNewWorkout({...newWorkout, intensity: e.target.value})} 
                />
            </div>
            <div className='buttons'>
                <button className='button' onClick={handleSubmit}>Add</button>
                <button className='button' onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
};