import { useState } from 'react';
import styled from 'styled-components';
import { useFormik } from 'formik';

import TextField from '@material-ui/core/TextField';

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

    return (
        <UserInputForm onSubmit={formik.handleSubmit}>
            <label htmlFor='name'>Full Name</label>
            <UserInputLine>
                <StyledTextField 
                    id='lastName'
                    name='lastName'
                    type='text'
                    onChange={formik.name}
                    value={formik.values.name}
                />
                {formik.values && <SavedData>{formik.values.name}</SavedData>}
            </UserInputLine>
            {/* <UserInputLine>
                <StyledTextField 
                    label='Age (y.o)'
                    value={userProfile.age}
                    onChange={(e) => setUserProfile({...userProfile, age: e.target.value})} 
                />
                {userProfile && <SavedData>{userProfile.age}</SavedData>}
            </UserInputLine>
            <UserInputLine>
                <StyledTextField 
                    label='Height'
                    value={userProfile.height}
                    onChange={(e) => setUserProfile({...userProfile, height: e.target.value})} 
                />
                {userProfile && <SavedData>{userProfile.height}</SavedData>}
            </UserInputLine>
            <UserInputLine>
                <StyledTextField 
                    label='Current Weight (lbs)'
                    value={userProfile.currentWeight}
                    onChange={(e) => setUserProfile({...userProfile, currentWeight: e.target.value})} 
                />
                {userProfile && <SavedData>{userProfile.currentWeight} lbs</SavedData>}
            </UserInputLine>
            <UserInputLine>
                <StyledTextField 
                    label='Target Weight (lbs)'
                    value={userProfile.targetWeight}
                    onChange={(e) => setUserProfile({...userProfile, targetWeight: e.target.value})} 
                />
                {userProfile && <SavedData>{userProfile.targetWeight} lbs</SavedData>}
            </UserInputLine> */}
        </UserInputForm>
    )
};

const StyledTextField = styled(TextField)`
    width: 45%;
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
