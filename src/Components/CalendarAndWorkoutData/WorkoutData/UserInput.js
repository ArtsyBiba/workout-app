import { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from './Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function UserInput({ firebase, authUser, selectedDate, savedWorkout, setSavedWorkout, workoutId }) {
    const defaultWorkout = {
        activity: '',
        duration: '',
        intensity: 5,
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
        <UserInputWrapper>
            <UserInputLine>
                <StyledTextField 
                    label='Activity Type'
                    value={newWorkout.activity}
                    onChange={(e) => setNewWorkout({...newWorkout, activity: e.target.value})} 
                />
                {savedWorkout && <SavedWorkout>{savedWorkout.activity}</SavedWorkout>}
            </UserInputLine>
            <UserInputLine>
                <StyledTextField 
                    label='Duration (min)'
                    value={newWorkout.duration}
                    onChange={(e) => setNewWorkout({...newWorkout, duration: e.target.value})} 
                />
                {savedWorkout && <SavedWorkout className='saved-workout'>{savedWorkout.duration}</SavedWorkout>}
            </UserInputLine>
            <UserInputLine>
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
                {savedWorkout && <SavedWorkout className='saved-workout'>{savedWorkout.intensity}</SavedWorkout>}
            </UserInputLine>
            <ButtonsWrapper>
                <Button onClick={handleSubmit}>Add Workout</Button>
                <Button secondary onClick={handleReset}>Reset Workout</Button>
            </ButtonsWrapper>
        </UserInputWrapper>
    )
};

const StyledSelect = styled(Select)`
    width: 45%;
    margin-top: 1em;
    margin-left: 15px;
`;

const StyledTextField = styled(TextField)`
    width: 45%;
    text-align: center;
    font-size: 0.5em;
    margin-left: 15px;
`;

const UserInputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 200px;
	margin-top: 0.5em;
`;

const ButtonsWrapper = styled.div`
    display: flex;
	justify-content: center;
	margin-top: 1em;
`;

const UserInputLine = styled.div`
    display: flex;
`;

const SavedWorkout = styled.div`
    margin: auto;
	color: grey;
	padding-top: 10px;
`;
