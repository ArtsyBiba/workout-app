import React, { useState } from 'react';
import styled from 'styled-components';

import './styles.css';
import InputField from './InputField';
import Button from './Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

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
                <StyledSelect
                    value={newWorkout.intensity}
                    onChange={(e) => setNewWorkout({...newWorkout, intensity: e.target.value})} 
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                </StyledSelect>
            </div>
            <div className='buttons'>
                <Button onClick={handleSubmit}>Add Workout</Button>
                <Button secondary onClick={handleReset}>Reset Workout</Button>
            </div>
        </div>
    )
};

const StyledSelect = styled(Select)`
    width: 35%;
    text-align: center;
`;