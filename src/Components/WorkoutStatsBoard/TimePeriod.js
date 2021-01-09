import { useState, useEffect } from 'react';
import styled from 'styled-components';
import filterData from './filter';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export default function TimePeriod({ setWorkouts, setWorkoutIds, firebase, authUser }) {
    const [timePeriod, setTimePeriod] = useState('all');

    useEffect(() => {        
        const ref = firebase.db.ref().child(`users/${authUser.uid}/workouts`);
        ref.on('value', (snapshot) => {
            let data = snapshot.val();
            let filteredData = filterData(data, timePeriod);
            let ids = Object.keys(filteredData);

            setWorkouts(filteredData);
            setWorkoutIds(ids);
        });
    }, [authUser, firebase, timePeriod, setWorkouts, setWorkoutIds]);

    return (
        <Wrapper>
            <StyledSelect
                value={timePeriod}
                onChange={(e) => setTimePeriod(e.target.value)} 
            >
                <MenuItem value='all'>All Workouts</MenuItem>
                <MenuItem value='year'>Last Year</MenuItem>
                <MenuItem value='month'>Last Month</MenuItem>
                <MenuItem value='two-weeks'>Last Two Weeks</MenuItem>
                <MenuItem value='one-week'>Last Week</MenuItem>
            </StyledSelect>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const StyledSelect = styled(Select)`
    width: 35%;
    margin-top: 1em;
    margin-bottom: 0.5em;
    justify-self: center;

    @media (max-width: 600px) {
		width: 60%;
	}
`;