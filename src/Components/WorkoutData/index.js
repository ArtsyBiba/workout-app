import React, { useState, useEffect } from 'react';

import './styles.css';
import UserInput from './userInput';

export default function WorkoutData(props) {
    const {firebase, authUser, date} = props;

    const selectedDate = date.format('MM/DD/YYYY');

    const [savedWorkout, setSavedWorkout] = useState([]);

    useEffect(() => {
        let ref = firebase.db.ref().child(`users/${authUser.uid}/workouts`);
        ref.orderByChild('date').equalTo(selectedDate).on('value', snapshot => {
            let data = snapshot.val();
            const values = Object.values(data);
            setSavedWorkout(values);
        });
        // let ref = firebase.db.ref().child(`users/${authUser.uid}/workouts/`);
        // ref.once('value', snapshot => {
        //     snapshot.forEach(childsnapshot => {
        //         var childData = childsnapshot.val();
        //         setSavedWorkout(childData);
        //     })
        // });
    }, [selectedDate]);

    console.log(savedWorkout)

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
                />
            </div>
        </div>
    )
};