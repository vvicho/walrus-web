import styled from 'styled-components';

export const TeamContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background:  #010606;
	padding: 50px 0px

	/* @media screen and (max-width: 768px) { */
		/* height: 50;
	}
	
	@media screen and (max-width: 480px) {
		height: 1300px;
	} */
`

export const TeamWrapper = styled.div`
	max-width: 1000px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr;
	align-items: center;
	grid-gap: 16px;
	padding: 0px 50px;

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr;
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		padding: 0 20px;
	}
`

export const TeamCard = styled.div`
	/* background: #fff; */
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	border-radius: 10px;
	width: 270px;
	padding: 30px;
	/* box-shadow: 0 1px 3px rgba(0,0,0,0.2); */
	transition: all 0.2s ease-in-out;
	color: #fff;

	@media screen and (max-width: 768px) {
		width: 220px;
	}
`

export const TeamCardMemberPicture = styled.img`
	height: 230px;
	width: 230px;
	margin-bottom: 10px;
	border-radius: 50% 20%;

	@media screen and (max-width: 768px) {
		height: 180px;
		width: 180px;
	}
`

export const TeamSectionTitle = styled.h1`
	font-size: 40px;
	color: #fff;
	margin-bottom: 64px;

	@media screen and (max-width: 480px) {
		font-size: 2rem;
	}
`

export const TeamCardMemberLink = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	padding-bottom: 10px;
`

export const TeamCardMemberName = styled.span`
	font-size: 28px;
	font-weight: 800;
`

export const TeamCardMemberTitle = styled.span`
	font-size: 1rem;
	margin-bottom: 10px;
	font-weight: 600;
	align-self: flex-start;
	text-align: center;
`

export const TeamCardMemberDescription = styled.p`
	font-size: 1rem;
	align-self: flex-start;
`

