import { useWeb3React } from '@web3-react/core';
import React, { useEffect, useState } from 'react'
import { LAUNCH_DATE, PRE_SALE_DATE } from '../../../constants';
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
	MintingCurrentGas,
	MintingGasPriceRefresh,
	MintingMinted,
} from './MintElements';
import MintCountdownCounter from './MintCountdown';
import OpenSeaLogo from '../../../images/OpenSeaLogo.png';
import { BigNumber, ethers } from 'ethers';
import env from 'react-dotenv';
import Web3 from 'web3';

const MintSection = () => {
	const distance = LAUNCH_DATE - new Date().getTime();
	const preSaleDistance = PRE_SALE_DATE - new Date().getTime();

	const [mintAmount, setMintAmount] = useState(1);
	const [publicSaleStarted, setPublicSaleStarted] = useState(false);
	const [preSaleStarted, setPreSaleStarted] = useState(false);
	const [gasPrice, setGasPrice] = useState(0);
	const [numMinted, setNumMinted] = useState(0);
	const [isSoldOut, setIsSoldOut] = useState(false);
	const [countDownFinished, setCountdownFinished] = useState(false);
	// const [isSoldOut, _] = useState(false);
	const { account } = useWeb3React();
	let provider;
	
	const mintNfts = async () => {
		if (mintAmount === 0) return;
		console.log("minting");
		try {
			var res = await mint(mintAmount);
		} catch (ex) {
			console.log(res);
		}
	}

	const getIsSoldOut = async () => {
		try {
			const contract = getNftContract();
			const totalSupply = await contract.totalSupply();
			setIsSoldOut(totalSupply.toNumber() === 10000);
		} catch (ex) {
			setIsSoldOut(false);
		}
	}

	const getNftContract = () => {
		try {
			const { ethereum } = window;
			if (!ethereum) {
				console.log("Ethereum object does not exist");
				return null;
			}

			const contractAddress = env.CONTRACT_ADDRESS;
			const abi = contractInterface;
			const provider = getProvider();
			const signer = provider.getSigner();
			const nftContract = new ethers.Contract(contractAddress, abi, signer);
			return nftContract;
		} catch (ex) {
			console.error(ex);
			return null;
		}
	}

	const getProvider = () => {
		const { ethereum } = window;
		if (!ethereum) return null;
		if (provider && provider !== undefined) return provider;
		provider = new ethers.providers.Web3Provider(ethereum);
		return provider;
	}
	
	const hasPublicSaleStarted = async () => {
		const contract = getNftContract();
		if (!contract) return;

		try {
			let started = await contract.publicSaleStarted();
			// let started = true;
			setPublicSaleStarted(started && distance < 0);
		} catch (ex) {
			console.error(ex);
		}
	}

	const hasPreSaleStarted = async () => {
		const contract = getNftContract();
		if (!contract) return;

		try {
			let started = await contract.preSaleStarted();
			// let started = true;
			setPreSaleStarted(started && preSaleDistance < 0);
		} catch (ex) {
			console.error(ex);
		}
	}

	const getPrice = num => {
		return num === 0 ? 1 : num === 1 ? "0.03" : num === 2 ? "0.05" : num === 3 ? "0.06" : num * 0.02;
	}

	const getGasPrice = async () => {
		var web3 = new Web3(Web3.givenProvider);
		var price = await web3.eth.getGasPrice();
		price = Math.round(price / 10 ** 9);
		setGasPrice(price);
	}

	const getNumMinted = async () => {
		const contract = getNftContract();
		var minted = await contract.totalSupply();
		minted = minted.toNumber();
		setNumMinted(minted);
	}
	
	const mint = async num => {
		
		if (!account) {
			console.log("Account is not connected")
			return;
		}
	
		try {
			const contract = getNftContract();
			const nftPrice = ethers.utils.parseEther(getPrice(num));
			console.log("Initialize payment");
			let nftTxn = await contract.mintNFTs(num);
			console.log(`Mining ${num} nft for ${nftPrice}... please wait`);
			await nftTxn.wait();
	
			console.log(`Mined, see transaciton: https://etherescan.io/tx/${nftTxn.hash}`);
			getIsSoldOut();
		} catch (err) {
			var error = err.error.message.substring(20);
			console.log(error);
		}
	}

	const renderCountdown = () => {
		return (
			<MintCountdownCounter handleSaleStarted={ setCountdownFinished }/>
		);
	};

	// similar to ComponentDidMount
	useEffect(() => {
		hasPublicSaleStarted();
		hasPreSaleStarted();
		getIsSoldOut();
		getNumMinted(); // set start value of num minted
		getGasPrice(); // set start value of gas price
		setInterval(() => getGasPrice(), 15000); // update gas price every 15 seconds
		setInterval(() => getNumMinted(), 10000); // update num minted every 10 seconds
	}, []);

	useEffect(() => {
		hasPublicSaleStarted();
		hasPreSaleStarted();
	}, [countDownFinished]);

	const renderMinting = () => {
		return (
			<MintYourWalrus>
				<MintingTextH2>Minting is now live! (Max 3 per transaction)</MintingTextH2>
				<MintingMinted>{numMinted}/10,000 Minted ({ numMinted*100/10000 }%)</MintingMinted>
				<MintingPrices>{"(1 Walrus = 0.03 ETH, 2 Walruses = 0.05 ETH, 3 Walruses = 0.06 ETH)"}</MintingPrices>
				<MintingCurrentGas>Current gas price: {gasPrice} <MintingGasPriceRefresh onClick={ getGasPrice }></MintingGasPriceRefresh> gwei (updates every 15 seconds)</MintingCurrentGas>
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
					<OpenSeaButton>Get a Walrus on OpenSea <img src={OpenSeaLogo} width='40px' alt='OpenSeaLogo' /></OpenSeaButton>
				</SoldOutContainer>
			</>
		);
	};

	const getCurrentMintRender = () => {
		if (!publicSaleStarted && !preSaleStarted) {
			return renderCountdown();
		} else if (!isSoldOut) {
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