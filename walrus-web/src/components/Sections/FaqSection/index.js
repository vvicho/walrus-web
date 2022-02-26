import React from 'react'
import {
	ALink,
	FaqAnswer,
	FaqContainer,
	FaqH1,
	FaqItem,
	FaqQuestion,
	FaqQuestions,
	FaqWrapper,
	MoreQuestions,
	NavLink
} from './FaqElements';

const FaqSection = () => {
	return (
		<>
			<FaqContainer id="faq">
				<FaqWrapper>
					<FaqH1> FAQ</FaqH1>
					<FaqQuestions>
						<FaqItem>
							<FaqQuestion>Where can I purchase a Walrus?</FaqQuestion>
							<FaqAnswer>An actual real-life Walrus, I don't know and I don't think you should. If you are talking about a Whacky Walrus NFT; you can mint them in our website at launch or purchase them in our OpenSea collection page afterwards.
								<br/><br/>Check the <NavLink to="buy" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Buy!</NavLink> section to check the current status.</FaqAnswer>
						</FaqItem>
						<FaqItem>
							<FaqQuestion>How many Walruses are there?</FaqQuestion>
							<FaqAnswer>
								There is a total of 10,000 Walruses.
								<br />9,900 Walruses will be available for public purchase.
								<br />99 Walruses have been reserved for marketing and giveaways.
								<br />1 Walrus has been reserved for the creator of the collection.
							</FaqAnswer>
						</FaqItem>
						<FaqItem>
							<FaqQuestion>How rare is my Walrus?</FaqQuestion>
							<FaqAnswer>Once all Walruses have been revealed, you can visit Rarity Tool to see the rarities of all Walruses based on their accessories/traits.</FaqAnswer>
						</FaqItem>
						<FaqItem>
							<FaqQuestion>Are there Royalties?</FaqQuestion>
							<FaqAnswer>Yes. 2.5% goes to OpenSea and another 2.5% to the artist.</FaqAnswer>
						</FaqItem>
						<FaqItem>
							<FaqQuestion>Where can I find offical communication?</FaqQuestion>
							<FaqAnswer>We will mainly use our Twitter account <ALink href='https://www.twitter.com/whackywalrusnft' target='_blank' >@WhackyWalrusNFT</ALink> as the main source of communication. While Discord has some pros, we've decided that we won't be using it as there has been a lot of toxicity, spam, scam, and other negative experiences in other NFT projects that we want to avoid in ours. We will continue updating our site with more ways of communication if needed.</FaqAnswer>
						</FaqItem>
						<FaqItem>
							<FaqQuestion>What's the Smart Contract address?</FaqQuestion>
							<FaqAnswer><ALink href='https://rinkeby.etherscan.io/address/0xed686e92fc4f689df06a96580ee49db4c5c6a2ff' target='_blank' >0xed686e92fc4f689df06a96580ee49db4c5c6a2ff</ALink>.</FaqAnswer>
						</FaqItem>
					</FaqQuestions>
					<MoreQuestions>Have more questions? Send us an email to <ALink href='mailto:whackywalrus.nft@gmail.com' target='_blank'>whackywalrus.nft@gmail.com</ALink></MoreQuestions>
				</FaqWrapper>
			</FaqContainer>
		</>
	);
}

export default FaqSection