import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core';
import { NoEthereumProviderError, UserRejectedRequestError as UserRejectedRequestErrorInjected } from '@web3-react/injected-connector';
import { injected } from './connectors';
import { useEagerConnect, useInactiveListener } from './hooks';
// import { Spinner } from './components/Spinner';
import { useEffect, useState } from 'react';
import { ConnectWalletButton, NavBtn } from './components/Navbar/NavbarElements';

// const connectorsByName = {
	// Injected: injected,
	// add more if needed https://codesandbox.io/s/8rg3h?file=/src/index.js
// };

function getErrorMessage(error) {
	if (error instanceof NoEthereumProviderError) {
		return "No Ethereum browser extension detected, install Metamask on desktop or visit from a dApp browser";
	} else if (error instanceof UnsupportedChainIdError) {
		return "You're connected to an unsupported network";
	} else if (error instanceof UserRejectedRequestErrorInjected) {
		// add more if needed https://codesandbox.io/s/8rg3h?file=/src/index.js
		return "Please authorize this website to access your Ethereum account."
	} else {
		console.error(error);
		return "An unknown error ocurred. Check console for more details."
	}
}

function getShortAddress(address) {
	return address.substring(0, 6) + "..." + address.substring(address.length - 3);
}

function WalletConnector() {
	const context = useWeb3React();
	const {
		connector,
		library,
		// chainId,
		account,
		activate,
		deactivate,
		active,
		error
	} = context;

	// handle logic to recognize the connector currently being activated
	const [activatingConnector, setActivatingConnector] = useState();
	useEffect(() => {
		if (activatingConnector && activatingConnector === connector) {
			setActivatingConnector(undefined);
		}
	}, [activatingConnector, connector]);

	// handle logic to eagerly connect to the injected ethereum provider, if it exists and has granted access already
	const triedEager = useEagerConnect();
	// handle logic to connect in reaction to certain event on the injected ethereum provider, if it exists
	useInactiveListener(!triedEager || !!activatingConnector);

	// todo: set up block listener? // add more if needed https://codesandbox.io/s/8rg3h?file=/src/index.js
	// todo: fetch balance of connected account? // add more if needed https://codesandbox.io/s/8rg3h?file=/src/index.js

	return (
		<>
			{active && account ?
				<ConnectWalletButton>
					Connected: {getShortAddress(account)}
				</ConnectWalletButton>
				:
				<ConnectWalletButton onClick={() => {
					setActivatingConnector(injected);
					activate(injected)
				}}>
					Connect
				</ConnectWalletButton>
			}
			{!!error && alert(getErrorMessage(error))}
		</>
	);
}

export default WalletConnector;