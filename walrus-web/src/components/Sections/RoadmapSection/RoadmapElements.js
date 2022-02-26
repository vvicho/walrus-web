import styled from 'styled-components';

export const RoadmapContainer = styled.div`
	padding: 60px 40px;
	background-color: black;
`;

export const RoadmapWrapper = styled.div`
	max-width: 1100px;
	margin-left: auto;
	margin-right: auto;
`;

export const RoadmapH1 = styled.h1`
	font-size: 40px;
	color: white;
`;

export const RoadmapItemWrapper = styled.div`
	padding: 40px;
`;

export const RoadmapItems = styled.div`
	display: grid;
	flex-direction: column;
	text-decoration: none;
`;

export const RoadmapItem = styled.div`
	display: grid;
	grid-template-columns: 120px 50px auto;
	max-width: 1000px;
	margin: 20px 0;
	border-style: solid;
	border-radius: 1rem;
	border-color: #106010;
	background-color: #079158;

	@media screen and (max-width: 768px) {
		border-style: solid;
		border-radius: 1rem;
		grid-template-columns: auto;
		grid-template-rows: auto auto;
		background-color: none;
	}
`;

export const UnlockPercentage = styled.div`
	grid-column: 1;
	text-align: right;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	font-weight: 900;
	font-size: 30pt;
	color: white;
	border-color: #106010;

	@media screen and (max-width: 768px) {
		grid-row: 1;
		width: 100%;
		grid-column: unset;
		border-bottom-style: solid;
		justify-content: center;
		background-color: #079158;
		border-radius: .8rem .8rem 0 0;
	}
	
`;

export const UnlockText = styled.p`
	grid-column: 3;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin: 10px 10px 10px 0;
	font-size: large;
	color: white;
	
	@media screen and (max-width: 768px) {
		grid-column: unset;
		grid-row: 2;
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 30px 10px;
		margin: 0;
		background-color: white;
		border-radius: 0 0 .8rem .8rem;
		color: black;
	}
`;