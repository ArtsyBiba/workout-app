import React, { useState } from 'react';

import './styles.css';
import UserInput from './userInput';

export default function WorkoutData(props) {
    const {firebase, authUser, date} = props;

    function createDate() {
        return date.format('MM/DD/YYYY');
    };

    return (
        <div className='workout-data'>
            <div className='header'>
                Workout Data
            </div>
            <div className='body'>
                <div className='selected-date'>
                    {createDate()}
                </div>
                <UserInput />
            </div>
        </div>
    )
};