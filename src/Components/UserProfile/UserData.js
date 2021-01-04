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
                {userProfile && <SavedData>{userProfile.activity}</SavedData>}
            </UserInputLine>
            <UserInputLine>
                <StyledTextField 
                    label='Duration (min)'
                    value={userProfile.duration}
                    onChange={(e) => setUserProfile({...userProfile, duration: e.target.value})} 
                />
                {userProfile && <SavedData>{userProfile.duration}</SavedData>}
            </UserInputLine>
            <UserInputLine>
                <StyledTextField 
                    label='Workout Goals'
                    value={userProfile.duration}
                    onChange={(e) => setUserProfile({...userProfile, duration: e.target.value})} 
                />
                {userProfile && <SavedData>{userProfile.intensity}</SavedData>}
            </UserInputLine>
        </UserInputWrapper>
    )
};

const StyledTextField = styled(TextField)`
    width: 45%;
    text-align: center;
    font-size: 0.5em;
    margin-left: 15px;
    flex: 7;
`;

const UserInputWrapper = styled.div`
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
