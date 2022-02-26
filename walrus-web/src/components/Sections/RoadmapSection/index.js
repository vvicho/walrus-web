import React from 'react'
import {
	RoadmapContainer,
	RoadmapH1,
	RoadmapItem,
	RoadmapItems,
	RoadmapItemWrapper,
	RoadmapWrapper,
	UnlockPercentage,
	UnlockText
} from './RoadmapElements';

const RoadmapSection = () => {
	return (
		<>
			<RoadmapContainer id='roadmap'>
				<RoadmapWrapper>
					<RoadmapH1>Roadmap</RoadmapH1>
					<RoadmapItemWrapper>
						<RoadmapItems>
							<RoadmapItem>
								<UnlockPercentage>20%</UnlockPercentage>
								<UnlockText>Monthly Lottery unlocked! See FAQ for more details.</UnlockText>
							</RoadmapItem>
							<RoadmapItem>
								<UnlockPercentage>40%</UnlockPercentage>
								<UnlockText>Walrus Airdrop for holders.</UnlockText>
							</RoadmapItem>
							<RoadmapItem>
								<UnlockPercentage>60%</UnlockPercentage>
								<UnlockText>We will begin planning our merch store! This will be available for everyone. Holders will have exclusive discounts.</UnlockText>
							</RoadmapItem>
							<RoadmapItem>
								<UnlockPercentage>80%</UnlockPercentage>
								<UnlockText>Charitable Donation. We will donate $10,000 USD to a charity selected by the community</UnlockText>
							</RoadmapItem>
							<RoadmapItem>
								<UnlockPercentage>100%</UnlockPercentage>
								<UnlockText>Why stop here? Other events, giveaways, whitelisting for collaborations and more!</UnlockText>
							</RoadmapItem>
						</RoadmapItems>
					</RoadmapItemWrapper>
				</RoadmapWrapper>
			</RoadmapContainer>
		</>
	);
}

export default RoadmapSection