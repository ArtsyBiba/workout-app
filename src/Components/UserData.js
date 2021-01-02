import { useState } from 'react';
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';

export default function UserInput() {
    const defaultProfile = {
        activity: '',
        duration: '',
        intensity: 5,
    };

    const [userProfile, setUserProfile] = useState(defaultProfile);

    return (
        <UserInputWrapper>
            <UserInputLine>
                <StyledTextField 
                    label='Activity Type'
                    value={userProfile.activity}
                    onChange={(e) => setUserProfile({...userProfile, activity: e.target.value})} 
                />
                {userProfile && <SavedWorkout>{userProfile.activity}</SavedWorkout>}
            </UserInputLine>
            <UserInputLine>
                <StyledTextField 
                    label='Duration (min)'
                    value={userProfile.duration}
                    onChange={(e) => setUserProfile({...userProfile, duration: e.target.value})} 
                />
                {userProfile && <SavedWorkout>{userProfile.duration}</SavedWorkout>}
            </UserInputLine>
            <UserInputLine>
                <StyledTextField 
                    label='Duration (min)'
                    value={userProfile.duration}
                    onChange={(e) => setUserProfile({...userProfile, duration: e.target.value})} 
                />
                {userProfile && <SavedWorkout>{userProfile.intensity}</SavedWorkout>}
            </UserInputLine>
        </UserInputWrapper>
    )
};

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

const UserInputLine = styled.div`
    display: flex;
`;

const SavedWorkout = styled.div`
    margin: auto;
	color: grey;
	padding-top: 10px;
`;
