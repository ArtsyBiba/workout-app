import * as d3 from "d3";

export default function Table () {
    const DUMMY_DATA = [
        { id: 'd1', value: 10, region: 'USA' },
        { id: 'd2', value: 11, region: 'Canada' },
        { id: 'd3', value: 13, region: 'Germany' },
        { id: 'd4', value: 6, region: 'India' },
    ];
    
    d3.select('#data')
        .selectAll('p')
        .data(DUMMY_DATA)
        .enter()
        .append('p')
        .text(dta => dta.region);

    return (
        <div id='data'></div>
    )
}