import React, {useState} from 'react';
import { CardGroup } from 'react-bootstrap';
import NFTCard from './NFTCard';

function NFTCardGroup(props) {
	const [state, setValue] = useState({ nftCards: [], cardsGenerated: false });
	
	const getCards = () => {
		console.log(state);
		if (state.cardsGenerated || !props.nfts) return;
		console.log(props.nfts)
		let cards = [];
		let i = 0;
		for (const nft of props.nfts) {
			let dataJson = JSON.parse(nft.metadata);
			let data = { id: nft.token_id, name: dataJson.name, description: dataJson.description, url: dataJson.image };
			console.log(data);
			cards.push({ key: data.id, title: data.name,  description: data.description, url: data.url });
		}
		setValue({nftCards:cards, cardsGenerated:true});
	}

	const renderCard = (data) => {
		return (<NFTCard key={data.key} title={data.title} description={data.description} url={data.url} />);
	}

	getCards();
	return (
		<CardGroup>
			{state.nftCards.map(renderCard)}
		</CardGroup>
	);
}

export default NFTCardGroup;