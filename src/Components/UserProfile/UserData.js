import { useState } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';

import TextField from '@material-ui/core/TextField';
import Button from '../CalendarAndWorkoutData/WorkoutData/Button';

export default function UserInput() {
    const validate = values => {
        const errors = {};
        if (!values.name) {
            errors.name = 'Required';
        } else if (values.name.length > 15) {
            errors.name = 'Must be 15 characters or less';
        }
      
        // if (!values.lastName) {
        //     errors.lastName = 'Required';
        // } else if (values.lastName.length > 20) {
        //     errors.lastName = 'Must be 20 characters or less';
        // }
      
        // if (!values.email) {
        //     errors.email = 'Required';
        // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        //     errors.email = 'Invalid email address';
        // }
      
        return errors;
      };
    
    const formik = useFormik({
        initialValues: {
            name: '',
            age: '',
            height: '',
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

const Error = styled.div`
    color: red;
    font-size: 0.8em
`;
