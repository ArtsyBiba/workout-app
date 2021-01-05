import { useState } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';

import TextField from '@material-ui/core/TextField';
import Button from '../CalendarAndWorkoutData/WorkoutData/Button';

export default function UserInput() {
    const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Please enter your name';
        } else if (values.name.length > 15) {
            errors.name = 'Must be 15 characters or less';
        }
      
        if (!values.age) {
            errors.age = 'Please enter your age';
        } else if (values.age < 1) {
            errors.age = 'Enter a valid age';
        }
      
        if (!values.currentWeight) {
            errors.currentWeight = 'Please enter your current weight';
        } else if (values.currentWeight < 1) {
            errors.currentWeight = 'Enter a valid weight';
        }

        if (!values.targetWeight) {
            errors.targetWeight = 'Please enter your target weight';
        } else if (values.targetWeight < 1) {
            errors.targetWeight = 'Enter a valid weight';
        }
      
        return errors;
      };
    
    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            currentWeight: '',
            targetWeight: '',
        },
        validate,
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
                    label='Name'
                    id='name'
                    name='name'
                    type='text'
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                {formik.values && <SavedData>{formik.values.name}</SavedData>}
            </UserInputLine>
            {formik.errors.name ? <Error>{formik.errors.name}</Error> : null}
            <UserInputLine>
                <StyledTextField 
                    label='Age (y.o)'
                    id='age'
                    name='age'
                    type='number'
                    onChange={formik.handleChange}
                    value={formik.values.age}
                />
                {formik.values && <SavedData>{formik.values.age}</SavedData>}
            </UserInputLine>
            {formik.errors.age ? <Error>{formik.errors.age}</Error> : null}
            <UserInputLine>
                <StyledTextField 
                    label='Current Weight (lbs)'
                    id='currentWeight'
                    name='currentWeight'
                    type='number'
                    onChange={formik.handleChange}
                    value={formik.values.currentWeight}
                />
                {formik.values && <SavedData>{formik.values.currentWeight}</SavedData>}
            </UserInputLine>
            {formik.errors.currentWeight ? <Error>{formik.errors.currentWeight}</Error> : null}
            <UserInputLine>
                <StyledTextField 
                    label='Target Weight (lbs)'
                    id='targetWeight'
                    name='targetWeight'
                    type='number'
                    onChange={formik.handleChange}
                    value={formik.values.targetWeight}
                />
                {formik.values && <SavedData>{formik.values.targetWeight}</SavedData>}
            </UserInputLine>
            {formik.errors.targetWeight ? <Error>{formik.errors.targetWeight}</Error> : null}
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

const Error = styled.div`
    color: red;
    font-size: 0.8em
`;
