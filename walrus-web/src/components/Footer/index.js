import React from 'react'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import {
	FooterContainer,
	FooterWrap,
	SocialIconLink,
	SocialIcons,
	SocialLogo,
	SocialMedia,
	SocialMediaWrap,
	WebsiteRights
} from './FooterElements';
import { animateScroll as scroll } from 'react-scroll';

const toggleHome = () => {
	scroll.scrollToTop();
}

const Footer = () => {
  return (
	  <FooterContainer>
		  <FooterWrap>
			  <SocialMedia>
				  <SocialMediaWrap>
					  <SocialLogo to='/' onClick={toggleHome}>
						  Whacky Walrus NFT
					  </SocialLogo>
					  <WebsiteRights>Whacky Walrus NFT © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
					  <SocialIcons>
						  <SocialIconLink href='https://www.twitter.com/whackywalrusnft' taget='_blank' aria-label='Twitter'>
							  <FaTwitter />
						  </SocialIconLink>
						  <SocialIconLink href='https://discord.gg/kUceuwe4sp' target='_blank' aria-label='Discord'>
							  <FaDiscord />
						  </SocialIconLink>
					  </SocialIcons>
				  </SocialMediaWrap>
			  </SocialMedia>
		  </FooterWrap>
	</FooterContainer>
  )
}

export default Footer