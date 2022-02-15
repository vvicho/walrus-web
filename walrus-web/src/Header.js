import React from 'react';
import { useMoralis } from 'react-moralis';
import DisconnectButton from './DisconnectButton';
import WalletConnector from './WalletConnector';
import './Header.css'
import Navbar from './components/Navbar';
import {BrowserRouter as Router} from 'react-router-dom'


function Header(props) {
	const { user } = useMoralis();
	console.log(user);
	return (
		<Router className='main'>
			<Navbar/>
			{/* <div className='buttons'>
				<div>logo</div>
				<div>roadmap</div>
				<div>about us</div>
				<WalletConnector/>
				<DisconnectButton/>
				<div hidden={user == null}>account</div> */}
			{/* </div> */}
		</Router>
	);
}

export default Header;
