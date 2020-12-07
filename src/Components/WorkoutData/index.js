import React, { useState } from 'react';

import './styles.css';
import UserInput from './userInput';

export default function WorkoutData(props) {
    const {firebase, authUser, date} = props;

    const selectedDate = date.format('MM/DD/YYYY');

    return (
        <div className='workout-data'>
            <div className='header'>
                Workout Data
            </div>
            <div className='body'>
                <div className='selected-date'>
                    {selectedDate}
                </div>
                <UserInput selectedDate={selectedDate} />
            </div>
        </div>
    )
};