import { Link } from "react-scroll";
import styled from "styled-components";

export const FaqContainer = styled.div`
	color: white;
	background: #010606;
`;

export const FaqWrapper = styled.div`
	max-width: 1100px;
	margin-left: auto;
	margin-right: auto;
	padding: 60px 40px;
`;

export const FaqH1 = styled.h1`
	padding: 20px 0;
	font-size: 40px;
`;

export const FaqQuestions = styled.ol`
	display: flex;
	flex-direction: column;
	font-size: x-large;
	font-weight: 400;
`;

export const FaqItem = styled.li`
	padding: 15px 0;
`;

export const FaqQuestion = styled.div`
	font-size: x-large;
	font-weight: 400;
	padding-bottom: 10px;
`;

export const FaqAnswer = styled.div`
	font-size: large;
`;

export const MoreQuestions = styled.div``;

export const NavLink = styled(Link)`
	color: #01bf71;
	text-decoration: none;
	cursor: pointer;

	:hover {
		color: #106010;
	}
`;

export const ALink = styled.a`
	color:#01bf71;
	text-decoration: none;
	cursor: pointer;

	:hover{
		color: #106010;
	}
`