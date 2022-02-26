import React from 'react'
import Icon1 from '../../../images/walrus.png';

import {
	TeamCard,
	TeamContainer,
	TeamSectionTitle,
	TeamCardMemberName,
	TeamCardMemberTitle,
	TeamCardMemberPicture,
	TeamWrapper,
	TeamCardMemberLink
} from './TeamSectionElements'
import { FaTwitter } from 'react-icons/fa'
import { SocialIconLink } from '../../Footer/FooterElements'

const TeamSection = () => {
  return (
	  <TeamContainer id='team'>
		  <TeamSectionTitle>Our Team</TeamSectionTitle>
		  <TeamWrapper>
			  <TeamCard>
				  <TeamCardMemberPicture src={Icon1} alt="walrus" />
				  <TeamCardMemberLink>
					  <SocialIconLink href="https://www.twitter.com/_danlo_" target='_blank'>
						  <FaTwitter style={{color: 'white'}} />
					  </SocialIconLink>
				  	<TeamCardMemberName>DanLo</TeamCardMemberName>
				  </TeamCardMemberLink>
				  <TeamCardMemberTitle>CEO, Artist, Developer, Community Manager, and everything else. Full-time Software Engineer</TeamCardMemberTitle>
			  </TeamCard>
		  </TeamWrapper>
	</TeamContainer>
  )
}

export default TeamSection