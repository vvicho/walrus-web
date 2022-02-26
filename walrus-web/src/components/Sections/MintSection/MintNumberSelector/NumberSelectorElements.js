import styled from 'styled-components';

export const SelectorContainer = styled.div`
	color: #fff;
`;

export const SelectorWrapper = styled.div`
	display: flex;
	padding: 0 0 20px 0;
	justify-content: center;
	align-items: center;
`;

export const SelectorItem = styled.button`
	color: #fff;
	font-size: 14pt;
	cursor: pointer;
	background-color: #079158;
	border-radius: 50%;
	width: 40px;
	height: 40px;
	text-align: center;
	justify-content: center;
	margin: 0 10px;
	border-color: #106010;
	border-style: solid;
	::selection {
		background-color: transparent;
	}

	::-moz-selection{
		background-color: transparent;
	}
`

export const SelectorTextInput = styled.div`
	text-align: center;
	font-size: 25pt;
	padding: 0px 10px;
`