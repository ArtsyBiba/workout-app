import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';
import { validate } from './validation';

import TextField from '@material-ui/core/TextField';
import Button from '../CalendarAndWorkoutData/WorkoutData/Button';

export default function UserInput({ firebase, authUser }) {  
    const [savedProfile, setSavedProfile] = useState({});

    useEffect(() => { 
        const ref = firebase.db.ref(`users/${authUser.uid}/profile`);
        ref.on('value', (snapshot) => {
            const data = snapshot.val();
            setSavedProfile(data);
        });
    }, [authUser, firebase]);
    
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
        if (authUser) {
            firebase.updateUserProfile(authUser.uid, formik.values);
        }
    };

    return (
        <UserInputForm onSubmit={formik.handleSubmit}>
            <UserInputLine>
                <StyledTextField 
                    label='Name'
                    id='name'
                    name='name'
                    type='text'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />
                {savedProfile && <SavedData>{savedProfile.name}</SavedData>}
            </UserInputLine>
            {formik.touched.name && formik.errors.name 
                ? <Error>{formik.errors.name}</Error> 
                : null
            }
            <UserInputLine>
                <StyledTextField 
                    label='Age (y.o)'
                    id='age'
                    name='age'
                    type='number'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.age}
                />
                {savedProfile && <SavedData>{savedProfile.age}</SavedData>}
            </UserInputLine>
            {formik.touched.age && formik.errors.age 
                ? <Error>{formik.errors.age}</Error> 
                : null
            }
            <UserInputLine>
                <StyledTextField 
                    label='Current Weight (lbs)'
                    id='currentWeight'
                    name='currentWeight'
                    type='number'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.currentWeight}
                />
                {savedProfile && <SavedData>{savedProfile.currentWeight}</SavedData>}
            </UserInputLine>
            {formik.touched.currentWeight && formik.errors.currentWeight 
                ? <Error>{formik.errors.currentWeight}</Error> 
                : null
            }
            <UserInputLine>
                <StyledTextField 
                    label='Target Weight (lbs)'
                    id='targetWeight'
                    name='targetWeight'
                    type='number'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.targetWeight}
                />
                {savedProfile && <SavedData>{savedProfile.targetWeight}</SavedData>}
            </UserInputLine>
            {formik.touched.targetWeight && formik.errors.targetWeight 
                ? <Error>{formik.errors.targetWeight}</Error> 
                : null
            }
            <StyledButton 
                onClick={handleSubmit}
                type='submit'
            >
                Update Profile
            </StyledButton>
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
    width: 45%;
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
    width: 50%;
    margin-left: 0;
    margin-top: 2em;
`;

const Error = styled.div`
    color: red;
    font-size: 0.8em
`;
