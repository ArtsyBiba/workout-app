import { useState } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';

import TextField from '@material-ui/core/TextField';
import Button from '../CalendarAndWorkoutData/WorkoutData/Button';

export default function UserInput() {
    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            height: '',
            currentWeight: '',
            targetWeight: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    const handleSubmit = () => {
        // if (authUser) {
        //     newWorkout.date = selectedDate;
        //     firebase.addWorkout(authUser.uid, newWorkout);
        //     setNewWorkout(defaultWorkout);
        // }
    };

    return (
        <UserInputForm onSubmit={formik.handleSubmit}>
            <UserInputLine>
                <StyledTextField 
                    label='Full Name'
                    id='name'
                    name='name'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                {formik.values && <SavedData>{formik.values.name}</SavedData>}
            </UserInputLine>
            <UserInputLine>
                <StyledTextField 
                    label='Age (y.o)'
                    id='age'
                    name='age'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.age}
                />
                {formik.values && <SavedData>{formik.values.age}</SavedData>}
            </UserInputLine>
            <UserInputLine>
                <StyledTextField 
                    label='Height'
                    id='height'
                    name='height'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.height}
                />
                {formik.values && <SavedData>{formik.values.height}</SavedData>}
            </UserInputLine>
            <UserInputLine>
                <StyledTextField 
                    label='Current Weight (lbs)'
                    id='currentWeight'
                    name='currentWeight'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.currentWeight}
                />
                {formik.values && <SavedData>{formik.values.currentWeight}</SavedData>}
            </UserInputLine>
            <UserInputLine>
                <StyledTextField 
                    label='Target Weight (lbs)'
                    id='targetWeight'
                    name='targetWeight'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.targetWeight}
                />
                {formik.values && <SavedData>{formik.values.targetWeight}</SavedData>}
            </UserInputLine>
            <StyledButton onClick={handleSubmit}>Update Profile</StyledButton>
        </UserInputForm>
    )
};

const StyledTextField = styled(TextField)`
    text-align: center;
    font-size: 0.5em;
    flex: 7;
`;

const UserInputForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 60%;
    justify-content: space-between;
    margin: auto;
	margin-top: 1.5em;
`;

const UserInputLine = styled.div`
    display: flex;
`;

const SavedData = styled.div`
    margin: auto;
	color: grey;
    padding-top: 10px;
    flex: 3;
    text-align: center;
`;

const StyledButton = styled(Button)`
    width: 30%;
    margin-left: 0;
    margin-top: 2em;
`;
