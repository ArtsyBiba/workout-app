import * as d3 from "d3";
import styled from 'styled-components';
import { useEffect } from 'react';

export default function Table () {
    const DUMMY_DATA = [
        { id: 'd1', value: 10, region: 'USA' },
        { id: 'd2', value: 11, region: 'Canada' },
        { id: 'd3', value: 13, region: 'Germany' },
        { id: 'd4', value: 6, region: 'India' },
    ];
    
    useEffect(() => {
        buildChart();
    }, [])

    const buildChart = () => {
        const container = d3.select('#data')

        const bars = container
            .selectAll('.bar')
            .data(DUMMY_DATA)
            .enter()
            .append('rect')
            .classed('bar', true)
            .attr('fill', '#521751')
            .attr('width', 50)
            .attr('height', data => (data.value * 15));
    }

    return (
        <Container id='data'></Container>
    )
}

const Container = styled.svg`
    width: 250px;
    height: 250px;
    border: 1px solid black;
`;