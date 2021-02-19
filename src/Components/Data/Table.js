import * as d3 from "d3";

export default function Table () {
    const DUMMY_DATA = [
        { id: 'd1', value: 10, region: 'USA' },
        { id: 'd2', value: 11, region: 'Canada' },
        { id: 'd3', value: 13, region: 'Germany' },
        { id: 'd4', value: 6, region: 'India' },
    ];
    
    const container = d3.select('#data')
        .style('border', '1px solid red')
        .style('width', '250px')
        .style('height', '250px');

    const bars = container
        .selectAll('.bar')
        .data(DUMMY_DATA)
        .enter()
        .append('div')
        .classed('bar', true)
        .style('background-color', '#521751');

    return (
        <div id='data'></div>
    )
}