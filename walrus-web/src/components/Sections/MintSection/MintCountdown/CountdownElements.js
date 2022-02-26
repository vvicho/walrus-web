import styled from 'styled-components';

export const CountdownContainer = styled.div`
	padding: 20px;
`;
export const CountdownWrapper = styled.div`

`;

export const CountdownTitle = styled.span`
	color: white;
	font-size: 32px;

	@media screen and (max-width: 768px) {
		font-size: 18px;
	}
`;

export const CountdownGrid = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	text-align: center;
`;
export const CountdownCell = styled.div`
	padding: 10px;
	align-items: center;
	text-align: center;
`;
export const CountdownNumber = styled.h2`
	font-size: 10vw;
`;
