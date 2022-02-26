import { useWeb3React } from '@web3-react/core';
import React, { useState } from 'react'
import { LAUNCH_DATE } from '../../../constants';
import contractInterface from '../../../contract.json';
import MintNumberSelector from './MintNumberSelector';
import {
	MintButton,
	MintContainer,
	MintH1,
	MintingTextH2,
	MintingPrices,
	MintWrapper,
	MintYourWalrus,
	OpenSeaButton,
	SoldOutContainer,
	SoldOutH1,
} from './MintElements';
import MintCountdownCounter from './MintCountdown';
import OpenSeaLogo from '../../../images/OpenSeaLogo.png';
import { ethers } from 'ethers';
import env from 'react-dotenv';

const MintSection = () => {
	const distance = LAUNCH_DATE - new Date().getTime();
	const [mintAmount, setMintAmount] = useState(1);
	const [saleStarted, setSaleStarted] = useState(distance < 0);
	// const [isSoldOut, _] = useState(false);
	const { account } = useWeb3React();
		
	const mintNfts = async () => {
		if (mintAmount === 0) return;
		console.log("minting");
		await mint(mintAmount);
		console.log("mintingCompleted");
	}

	

	const getPrice = num => {
		return num === 1 ? "0.03" : num === 2 ? "0.05" : num === 3 ? "0.06" : "1";
	}
	
	const mint = async num => {
		
		const contractAddress = env.CONTRACT_ADDRESS;
		const abi = contractInterface;
		console.log(contractAddress);
		console.log(abi);
	
		if (!account) {
			console.log("Account is not connected")
			return;
		}
	
		try {
			const { ethereum } = window;
	
			if (!ethereum) {
				console.log("Ethereum object does not exist");
				return;
			}
	
			const provider = new ethers.providers.Web3Provider(ethereum);
			const signer = provider.getSigner();
			const nftContract = new ethers.Contract(contractAddress, abi, signer);
			console.log(nftContract);
			const nftPrice = ethers.utils.parseEther(getPrice(num));
			console.log("Initialize payment");
			let nftTxn = await nftContract.mintNFTs(num, { value: nftPrice});
	
			console.log(`Mining ${num} nft for ${nftPrice}... please wait`);
			await nftTxn.wait();
	
			console.log(`Mined, see transaciton: https://rinkeby.etherescan.io/tx/${nftTxn.hash}`);
		} catch (err) {
			console.error(err);
		}
	}

	const renderCountdown = () => {
		return (
			<MintCountdownCounter handleSaleStarted={ setSaleStarted }/>
		);
	};

	const renderMinting = () => {
		return (
			<MintYourWalrus>
				<MintingTextH2>Minting is live now! Hurry before they are all gone! (Max 3 per transaction)</MintingTextH2>
				<MintingPrices>{"(1 Walrus = 0.03 ETH, 2 Walruses = 0.05 ETH, 3 Walruses = 0.06 ETH)"}</MintingPrices>
				<MintNumberSelector value={mintAmount} valueChange={setMintAmount} />
				<MintButton onClick={ () => mintNfts() }>Mint!</MintButton>
			</MintYourWalrus>
		);
	};

	const renderSoldOut = () => {
		return (
			<>
				<SoldOutContainer>
					<SoldOutH1>Sold Out!</SoldOutH1>
					{/* <SoldOutText>Please visit our OpenSea page to get your Walrus</SoldOutText> */}
					<OpenSeaButton>Get a Walrus on OpenSea <img src={OpenSeaLogo} width='40px' alt='OpenSeaLogo' /></OpenSeaButton>
				</SoldOutContainer>
			</>
		);
	};

	const getCurrentMintRender = () => {
		if (!saleStarted) {
			return renderCountdown();
		// } else if (!isSoldOut) {
		} else if (true) {
			return renderMinting();
		} else {
			return renderSoldOut();
		}
	}

	return (
		<>
			<MintContainer id="buy">
				<MintWrapper>
					<MintH1>Get your Walrus!</MintH1>
					{getCurrentMintRender()}
				</MintWrapper>
			</MintContainer>
		</>
	);
}

export default MintSection