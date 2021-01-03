import './styles.css';
import styled from 'styled-components';

export default function Header({ date, setDate }) {
    
    function currentMonthName() {
        return date.format('MMMM');
    };

    function currentYear() {
        return date.format('YYYY');
    };

    function previousMonth() {
        return date.clone().subtract(1, 'month');
    };

    function nextMonth() {
        return date.clone().add(1, 'month');
    };
    
    return (
        <HeaderWrapper>
            <PreviousMonth onClick={() => setDate(previousMonth())}>
                {String.fromCharCode(171)}
            </PreviousMonth>
            <CurrentMonth>
                {currentMonthName()} {currentYear()}
            </CurrentMonth>
            <NextMonth onClick={() => setDate(nextMonth())}>
                {String.fromCharCode(187)}
            </NextMonth>
        </HeaderWrapper>
    )
};

const HeaderWrapper = styled.div`
    background-color: light-blue;
    text-align: center;
    min-height: 2rem;
    line-height: 2rem;
    color: black;
    font-weight: 700;
    display: flex;
`;

const PreviousMonth = styled.div`
	flex: 1;
	text-align: left;
    margin-left: 1rem;
    cursor: pointer;
`;

const CurrentMonth = styled.div`
	flex: 12;
	text-align: center;
`;

const NextMonth = styled.div`
	flex: 1;
	text-align: right;
    margin-right: 1rem;
    cursor: pointer;
`;