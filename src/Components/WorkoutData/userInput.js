import React, { useState } from 'react';
import styled from 'styled-components';

import './styles.css';
import TextField from '@material-ui/core/TextField';
import Button from './Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

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
                <StyledTextField 
                    label='Activity Type'
                    value={newWorkout.activity}
                    onChange={(e) => setNewWorkout({...newWorkout, activity: e.target.value})} 
                />
                {savedWorkout && <div className='saved-workout'>{savedWorkout.activity}</div>}
            </div>
            <div className='user-input'>
                <StyledTextField 
                    label='Duration (min)'
                    value={newWorkout.duration}
                    onChange={(e) => setNewWorkout({...newWorkout, duration: e.target.value})} 
                />
                {savedWorkout && <div className='saved-workout'>{savedWorkout.duration}</div>}
            </div>
            <div className='user-input'>
                
                <StyledSelect
                    value={newWorkout.intensity}
                    onChange={(e) => setNewWorkout({...newWorkout, intensity: e.target.value})} 
                >
                    <MenuItem value={1}>1 - Rest</MenuItem>
                    <MenuItem value={2}>2 - Really easy</MenuItem>
                    <MenuItem value={3}>3 - Easy</MenuItem>
                    <MenuItem value={4}>4 - Light</MenuItem>
                    <MenuItem value={5}>5 - Moderate</MenuItem>
                    <MenuItem value={6}>6 - Challenging</MenuItem>
                    <MenuItem value={7}>7 - Hard</MenuItem>
                    <MenuItem value={8}>8 - Really hard</MenuItem>
                    <MenuItem value={9}>9 - Extremely hard</MenuItem>
                    <MenuItem value={10}>10 - Maximal</MenuItem>
                </StyledSelect>
                {savedWorkout && <div className='saved-workout'>{savedWorkout.intensity}</div>}
            </div>
            <div className='buttons'>
                <Button onClick={handleSubmit}>Add Workout</Button>
                <Button secondary onClick={handleReset}>Reset Workout</Button>
            </div>
        </div>
    )
};

const StyledSelect = styled(Select)`
    width: 45%;
    text-align: center;
    margin-left: 10px;
    margin-top: 1em;
`;

const StyledTextField = styled(TextField)`
    width: 45%;
    text-align: center;
    margin-left: 10px;
    font-size: 0.5em;
`;
