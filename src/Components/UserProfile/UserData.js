import { useState } from 'react';
import styled from 'styled-components';

import TextField from '@material-ui/core/TextField';

export default function UserInput() {
    const defaultProfile = {
        name: '',
        age: '',
        height: 0,
        currentWeight: 150,
        targetWeight: 150,
    };

    const [userProfile, setUserProfile] = useState(defaultProfile);

    console.log(userProfile)

    return (
        <UserInputWrapper>
            <UserInputLine>
                <StyledTextField 
                    label='Full Name'
                    value={userProfile.name}
                    onChange={(e) => setUserProfile({...userProfile, name: e.target.value})} 
                />
                {userProfile && <SavedData>{userProfile.name}</SavedData>}
            </UserInputLine>
            <UserInputLine>
                <StyledTextField 
                    label='Age'
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
                    label='Current Weight'
                    value={userProfile.currentWeight}
                    onChange={(e) => setUserProfile({...userProfile, currentWeight: e.target.value})} 
                />
                {userProfile && <SavedData>{userProfile.currentWeight} lbs</SavedData>}
            </UserInputLine>
            <UserInputLine>
                <StyledTextField 
                    label='Target Weight'
                    value={userProfile.targetWeight}
                    onChange={(e) => setUserProfile({...userProfile, targetWeight: e.target.value})} 
                />
                {userProfile && <SavedData>{userProfile.targetWeight} lbs</SavedData>}
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
