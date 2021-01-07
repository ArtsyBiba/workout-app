import { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function TotalMinutes({ workouts, workoutIds }) {
    const [averageIntensity, setAverageIntensity] = useState(0);
    
    const countAverageIntensity = (workouts, workoutIds) => {
        let sum = 0;
        
        for (const workout in workouts) {
            let intensity = workouts[workout].intensity;
            sum = Number(intensity) + Number(sum);
        }    
        
        const average = sum / workoutIds.length;
        const rounded = Math.round(average * 10) / 10;

        setAverageIntensity(rounded.toString());
    };

    useEffect(() => {
        countAverageIntensity(workouts, workoutIds);
    }, [workouts, workoutIds]);

    return (
        <Stats>
            <StatName>Average Intensity: </StatName>
            <StatData>{averageIntensity}</StatData>
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