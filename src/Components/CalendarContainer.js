import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';

import Calendar from '../components/Calendar';
import WorkoutData from '../components/WorkoutData';

export default function CalendarContainer(props) {
    const {firebase, authUser} = props;
    
    const [date, setDate] = useState(moment());
    
    return (
        <StyledContainer>
            <Calendar 
                firebase={firebase} 
                authUser={authUser}
                date={date}
                setDate={setDate} 
            />
            <WorkoutData
                firebase={firebase} 
                authUser={authUser}
                date={date}
            />
        </StyledContainer>
    )
};

const StyledContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    margin: auto;
    margin-top: 1em;
`;