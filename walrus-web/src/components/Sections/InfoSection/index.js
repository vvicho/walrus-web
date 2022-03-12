import React from 'react'
import {
	Column1,
	Column2,
	Heading,
	Img,
	ImgWrap,
	InfoContainer,
	InfoRow,
	InfoSocialMedia,
	InfoWrapper,
	OpenSeaLink,
	Subtitle,
	TextWrapper,
	TopLine
} from './InfoElements'

import { FaDiscord, FaTwitter } from 'react-icons/fa'
import { SocialIconLink } from '../../Footer/FooterElements'


const InfoSection = ({ lightBg,
	id,
	imgStart,
	topLine,
	headline,
	lightText,
	darkText,
	description,
	buttonLabel,
	img,
	alt,
	primary,
	dark,
	dark2,
	useBorder }) => {
  return (
	  <>
		  <InfoContainer lightBg={lightBg} id={id}>
			  <InfoWrapper>
				  <InfoRow imgStart={imgStart}>
					  <Column1>
						  <InfoSocialMedia>
							  <SocialIconLink href='https://www.twitter.com/whackywalrusnft' taget='_blank' aria-label='Twitter'>
								  <FaTwitter size='40px' />
							  </SocialIconLink>
							  <SocialIconLink href='https://discord.gg/kUceuwe4sp' target='_blank' aria-label='Discord'>
								  <FaDiscord size='40px' />
							  </SocialIconLink>
							  <SocialIconLink href='https://opensea.io/collection/whacky-walrus' target='_blank' aria-label='OpenSea'>
								  <OpenSeaLink size='40px' />
							  </SocialIconLink>
						  </InfoSocialMedia>
						  <TextWrapper>
							  <TopLine>{topLine}</TopLine>
							  <Heading lightText={lightText}>{headline}</Heading>
							  <Subtitle darkText={darkText}>{description}</Subtitle>
						  </TextWrapper>
					  </Column1>
					  <Column2>
						  <ImgWrap>
							  <Img useBorder={useBorder} src={img} alt={alt}/>
						  </ImgWrap>
					  </Column2>
				  </InfoRow>
			  </InfoWrapper>
		  </InfoContainer>
	  </>
  )
}

export default InfoSection