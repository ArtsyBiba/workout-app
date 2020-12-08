import React, { useState, useEffect } from 'react';

import './styles.css';
import UserInput from './userInput';

export default function WorkoutData(props) {
    const {firebase, authUser, date} = props;

    const selectedDate = date.format('MM/DD/YYYY');

    const [savedWorkouts, setSavedWorkouts] = useState([]);

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
    }, [firebase, authUser]);

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
                />
            </div>
        </div>
    )
};