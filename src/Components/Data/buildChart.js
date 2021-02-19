import * as d3 from "d3";

export default function buildChart (inputData) {
    const container = d3.select('#data')

    const xScale = d3
        .scaleBand()
        .domain(inputData.map(dataPoint => dataPoint.region))
        .rangeRound([0, 250])
        .padding(0.1);

    const yScale = d3
        .scaleLinear()
        .domain([0, 15])
        .range([200, 0]);

    const bars = container
        .selectAll('.bar')
        .data(inputData)
        .enter()
        .append('rect')
        .classed('bar', true)
        .attr('fill', '#521751')
        .attr('width', xScale.bandwidth())
        .attr('height', data => 200 - yScale(data.value))
        .attr('x', data => xScale(data.region))
        .attr('y', data => yScale(data.value));
}