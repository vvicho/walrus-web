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
							<FaqQuestion>What are the Monthly Lottery prices?</FaqQuestion>
							<FaqAnswer>
								Our lottery will run for the first year of our launch (Apr-2022 through Mar-2023). Each month we will have 3 prizes.
								<br />- 1st prize: 1 eth
								<br />- 2nd prize: 0.3 eth
								<br />- 3rd prize: 0.1 eth
								<br />The winning Walruses will be randomly selected by an automated tool that will be available in this site for everyone to try out. Draws will be live-streamed via Discord.
								<br />Prizes will be sent to the same address of the Walrus owners.
							</FaqAnswer>
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
							<FaqAnswer>Follow us on Twitter <ALink href='https://www.twitter.com/whackywalrusnft' target='_blank' >@WhackyWalrusNFT</ALink> or join our <ALink href='https://discord.gg/kUceuwe4sp' target='_blank'>Discord</ALink> server for news, announcements and events. We will continue updating our site with more ways of communication if needed.</FaqAnswer>
						</FaqItem>
						<FaqItem>
							<FaqQuestion>What's the Smart Contract address?</FaqQuestion>
							<FaqAnswer><ALink href='https://etherscan.io/address/0xed686e92fc4f689df06a96580ee49db4c5c6a2ff' target='_blank' >0xed686e92fc4f689df06a96580ee49db4c5c6a2ff</ALink>.</FaqAnswer>
						</FaqItem>
						<FaqItem>
							<FaqQuestion>Is it "whacky" or "wacky"?</FaqQuestion>
							<FaqAnswer>The original spelling of this word is "whacky", although the current dominant spelling in the US is "wacky".</FaqAnswer>
						</FaqItem>
					</FaqQuestions>
					<MoreQuestions>Have more questions? Send us an email to <ALink href='mailto:whackywalrus.nft@gmail.com' target='_blank'>whackywalrus.nft@gmail.com</ALink></MoreQuestions>
				</FaqWrapper>
			</FaqContainer>
		</>
	);
}

export default FaqSection