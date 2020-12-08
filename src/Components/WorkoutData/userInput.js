import React, { useState } from 'react';

import './styles.css';

export default function UserInput(props) {
    const {firebase, authUser, selectedDate} = props;
    const uid = authUser.uid;
    
    const defaultWorkout = {
        activity: '',
        duration: '',
        intensity: '',
        date: selectedDate,
    };

    const [workout, setWorkout] = useState(defaultWorkout);

    const handleSubmit = () => {
        if (authUser) {
            firebase.addWorkout(uid, workout);
            setWorkout(defaultWorkout);
            // setOpenSnackbar(true);
            // setSnackbarMsg('Added activity');
            // setTimeout(() => {
            //     setOpenSnackbar(false)
            // }, 3000)
        }
    };

    const handleReset = () => {
        if (authUser) {
            // firebase.updateWorkout(uid, defaultWorkout, workoutKey);
        }
    };
    
    return (
        <div className='user-input-wrapper'>
            <div className='user-input'>
                <div className='input-type'>Activity Type</div>
                <div className='existing-data'></div>
                <input 
                    value={workout.activity}
                    onChange={(e) => setWorkout({...workout, activity: e.target.value})} 
                />
            </div>
            <div className='user-input'>
                <div className='input-type'>Duration</div>
                <input 
                    value={workout.duration}
                    onChange={(e) => setWorkout({...workout, duration: e.target.value})} 
                />
            </div>
            <div className='user-input'>
                <div className='input-type'>Intensity</div>
                <input 
                    value={workout.intensity}
                    onChange={(e) => setWorkout({...workout, intensity: e.target.value})} 
                />
            </div>
            <div className='buttons'>
                <button className='button' onClick={handleSubmit}>Add</button>
                <button className='button' onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
};