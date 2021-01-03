import styled from 'styled-components';

const Button = styled.button`
	margin: 1em;
    color: #5c5858dc;
	text-transform: uppercase;
	background: #ffffff;
	border: 2px solid #5c5858dc;
	border-radius: 6px;
	display: inline-block;
    transition: all 0.3s ease 0s;
    
    &:hover {
        color: ${props => props.secondary ? '#db7c2e' : '#20bf6b'};
        border-color: ${props => props.secondary ? '#db7c2e' : '#20bf6b'};

        transition: all 0.3s ease 0s;
        border-radius: 50px;
    }
`;


export default Button;