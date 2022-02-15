import React from 'react';
import { useMoralis } from 'react-moralis';

function DisconnectButton(props) {
	const { logout } = useMoralis();
	
	return (
		<div>
			<button onClick={() => logout()}>Disconnect</button>
		</div>
	);
}

export default DisconnectButton;