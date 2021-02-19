import styled from 'styled-components';
import { useEffect } from 'react';

import buildChart from './buildChart';

export default function Table () {
    const DUMMY_DATA = [
        { id: 'd1', value: 10, region: 'USA' },
        { id: 'd2', value: 11, region: 'Canada' },
        { id: 'd3', value: 13, region: 'Germany' },
        { id: 'd4', value: 6, region: 'India' },
    ];
    
    useEffect(() => {
        buildChart(DUMMY_DATA);
    }, []);

    return (
        <Container id='data'></Container>
    )
}

const Container = styled.svg`
    width: 250px;
    height: 200px;
    border: 1px solid black;
`;