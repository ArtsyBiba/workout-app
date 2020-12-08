import React, { useState, useEffect } from 'react';

import './styles.css';

export default function UserInput(props) {
    const {firebase, authUser, selectedDate} = props;

    const defaultWorkout = {
        activity: '',
        duration: '',
        intensity: '',
        date: selectedDate,
    };

    const [savedWorkout, setSavedWorkout] = useState(defaultWorkout);

    useEffect(() => {
        let ref = firebase.db.ref().child(`users/${authUser.uid}/workouts/`);
        ref.once('value', snapshot => {
            snapshot.forEach(childsnapshot => {
                var childData = childsnapshot.val();
                console.log(childData)
            })
            // let data = snapshot.val();
            // setSavedWorkout(data);
            // console.log(savedWorkout)
        });
    }, [firebase, authUser, selectedDate]);

    const [newWorkout, setNewWorkout] = useState(defaultWorkout);

    useEffect(() => {
        setNewWorkout({...newWorkout, date: selectedDate});
    }, [selectedDate]);

    const handleSubmit = () => {
        if (authUser) {
            firebase.addWorkout(authUser.uid, newWorkout);
            setNewWorkout(defaultWorkout);
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
                    value={newWorkout.activity}
                    onChange={(e) => setNewWorkout({...newWorkout, activity: e.target.value})} 
                />
            </div>
            <div className='user-input'>
                <div className='input-type'>Duration</div>
                <input 
                    value={newWorkout.duration}
                    onChange={(e) => setNewWorkout({...newWorkout, duration: e.target.value})} 
                />
            </div>
            <div className='user-input'>
                <div className='input-type'>Intensity</div>
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