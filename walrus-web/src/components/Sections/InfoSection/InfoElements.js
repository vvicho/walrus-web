import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as Icon} from '../../../images/OpenSeaLogo.svg';

export const InfoContainer = styled.div`
	color: #fff;
	background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

	@media screen and (max-widht: 768px) {
		padding: 100px 0;
	}
`

export const InfoWrapper = styled.div`
	display: grid;
	z-index: 1;
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding: 50px 24px;
	justify-content: center;
`

export const InfoSocialMedia = styled.div`
	text-align: center;
`;

export const OpenSeaLink = styled(Icon)`
	width: 40px;
	height: 40px;
	fill: blue;

	path {
		&:hover {
		fill: #0d6efd;
		}
	}
`;

export const InfoRow = styled.div`
	display: grid;
	grid-auto-columns: minmax(auto, 1fr);
	align-items: center;
	grid-template-areas: ${({ imgStart }) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};
	
	@media screen and (max-width: 768px) {
		display: block;
		/* grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)}; */
	}
`
export const Column1 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col1;
`

export const Column2 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
	grid-area: col2;
`

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 0;
	padding-bottom: 60px;

	@media screen and (max-width: 768px) {
		padding-bottom: 0;
	}
`

export const TopLine = styled.p`
	color: #01bf71;
	font-size: 16px;
	line-height: 16px;
	font-weight: 700;
	letter-spacing: 1.4px;
	text-transform: uppercase;
	margin-bottom: 16px;
`

export const Heading = styled.h1`
	margin-bottom: 24px;
	font-size: 48px;
	line-height: 1.1;
	font-weight: 600;
	color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
	
	@media screen and (max-width: 480px) {
		font-size: 32px;
	}
`

export const Subtitle = styled.p`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 20px;
	line-height: 24px;
	color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
	display: flex;
	justify-content: flex-start;
`

export const ImgWrap = styled.div`
	max-width: 555px;
	height: 100%;
	background-image: linear-gradient(to top left, #005a30, #01bf71, #8bff50);
	border-radius: 10%;
	@media screen and (max-width: 768px) {
		text-align: center;
	}
`

export const Img = styled.img`
	width: 100%;
	margin: 0 0 0 0;
	padding: 10px;
	border-radius: 10%;
	/* border: ${({ useBorder }) => useBorder ? 'solid #01bf71' : 'none'}; */
	@media screen and (max-width: 768px) {
		width: 100%;
		height: 100%;
	}
`