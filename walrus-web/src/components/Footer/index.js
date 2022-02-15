import React from 'react'
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import {
	FooterContainer,
	FooterLink,
	FooterLinkItems,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkTitle,
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
			  <FooterLinksContainer>
				  <FooterLinksWrapper>
					  <FooterLinkItems>
						  <FooterLinkTitle>About Us</FooterLinkTitle>
						  <FooterLink to="/nfts">nfts</FooterLink>
						  <FooterLink to="about">About</FooterLink>
						  <FooterLink to="roadmap">Roadmap</FooterLink>
						  <FooterLink to="something">Something</FooterLink>
						  <FooterLink to="buy">Buy!</FooterLink>
					  </FooterLinkItems>
					  <FooterLinkItems>
						  <FooterLinkTitle>About Us</FooterLinkTitle>
						  <FooterLink to="/nfts">nfts</FooterLink>
						  <FooterLink to="about">About</FooterLink>
						  <FooterLink to="roadmap">Roadmap</FooterLink>
						  <FooterLink to="something">Something</FooterLink>
						  <FooterLink to="buy">Buy!</FooterLink>
					  </FooterLinkItems>
				  </FooterLinksWrapper>
				  <FooterLinksWrapper>
					  <FooterLinkItems>
						  <FooterLinkTitle>About Us</FooterLinkTitle>
						  <FooterLink to="/nfts">nfts</FooterLink>
						  <FooterLink to="about">About</FooterLink>
						  <FooterLink to="roadmap">Roadmap</FooterLink>
						  <FooterLink to="something">Something</FooterLink>
						  <FooterLink to="buy">Buy!</FooterLink>
					  </FooterLinkItems>
					  <FooterLinkItems>
						  <FooterLinkTitle>About Us</FooterLinkTitle>
						  <FooterLink to="/nfts">nfts</FooterLink>
						  <FooterLink to="about">About</FooterLink>
						  <FooterLink to="roadmap">Roadmap</FooterLink>
						  <FooterLink to="something">Something</FooterLink>
						  <FooterLink to="buy">Buy!</FooterLink>
					  </FooterLinkItems>
				  </FooterLinksWrapper>
			  </FooterLinksContainer>
			  <SocialMedia>
				  <SocialMediaWrap>
					  <SocialLogo to='/' onClick={toggleHome}>
						  dolla
					  </SocialLogo>
					  <WebsiteRights>dolla c {new Date().getFullYear()} All rights reserved.</WebsiteRights>
					  <SocialIcons>
						  <SocialIconLink href='/' taget='_blank' aria-label='Facebook'>
							  <FaFacebook />
						  </SocialIconLink>
						  <SocialIconLink href='/' taget='_blank' aria-label='Twitter'>
							  <FaTwitter />
						  </SocialIconLink>
						  <SocialIconLink href='/' taget='_blank' aria-label='Discord'>
							  <FaDiscord />
						  </SocialIconLink>
						  <SocialIconLink href='/' taget='_blank' aria-label='Instagram'>
							  <FaInstagram />
						  </SocialIconLink>
					  </SocialIcons>
				  </SocialMediaWrap>
			  </SocialMedia>
		  </FooterWrap>
	</FooterContainer>
  )
}

export default Footer