import { useState, useEffect } from 'react';
import styled from 'styled-components';

import './styles.css';

export default function TotalMinutes({ workouts }) {
    const [totalMinutes, setTotalMinutes] = useState(0);
    
    const countTotalMinutes = (workouts) => {
        let sum = 0;
        
        for (const workout in workouts) {
            let minutes = workouts[workout].duration;
            sum = Number(minutes) + Number(sum);
        }    
        
        setTotalMinutes(sum);
    };

    useEffect(() => {
        countTotalMinutes(workouts);
    }, [workouts]);

    return (
        <Stats>
            <StatName>Total Minutes: </StatName>
            <StatData>{totalMinutes}</StatData>
        </Stats>
    )
};

const Stats = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`;

const StatName = styled.div`
	font-weight: 600;
	min-height: 1.5em;
	line-height: 1.5em;
	text-align: center;
	margin-right: 0.5em;
`;

const StatData = styled.div`
	font-weight: 400;
	min-height: 1.5em;
	line-height: 1.5em;
	text-align: center;
`;