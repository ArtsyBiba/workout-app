import styled from 'styled-components';

export default function Message ({ loadIncrease }) {
    if (loadIncrease > 50) {
        return <StyledMessage color='red'>You're training too hard, consider a break ✋</StyledMessage>
    } else if (loadIncrease > 30  && loadIncrease < 50) {
        return <StyledMessage color='orange'>You're getting into a danger zone, use caution ☝️</StyledMessage>
    } else if (loadIncrease < -40) {
        return <StyledMessage color='orange'>Your total load is decreasing rapidly ☝️</StyledMessage>
    } else return <StyledMessage color='green'>You're in a Sweet Spot, keep going 👍</StyledMessage>
}

const StyledMessage = styled.div`
	font-weight: 500;
	min-height: 1.5em;
	line-height: 1.5em;
	text-align: center;
	margin-top: 1em;
    color: ${props => props.color};
`;