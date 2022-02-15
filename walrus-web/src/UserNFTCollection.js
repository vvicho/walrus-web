import React from 'react';
import AppContext from './AppContext';

export class UserNFTCollection extends React.Component {
	constructor(props) {
		super(props);
		const [state, setValue] = useState({ nftData: [], loadedNfts: false, user: null, userLoaded: false });
	}
	

	context = React.useContext(AppContext);
	
	async getNFTData() {
		if (state.loadedNfts) return;
		const options = { chain: "rinkeby", address: "0x8108e46ba737e1a22ae5a753e164c8eccd9d24d8" };
		const nfts = await Moralis.Web3API.token.getAllTokenIds(options);
		setValue({ nftData: nfts.result, loadedNfts: true });
		console.log(nfts);
	}

	// getNFTData();


}