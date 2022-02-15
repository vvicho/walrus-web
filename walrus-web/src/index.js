import React from "react";
import ReactDOM from "react-dom";
import { MoralisProvider } from "react-moralis";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "moralis/node_modules/@ethersproject/providers";

function getLibrary(provider) {
	const library = new Web3Provider(provider);
	library.pollingInterval = 8000;
	return library;
}

ReactDOM.render(
	<Web3ReactProvider getLibrary={getLibrary}>
		<App />
	</Web3ReactProvider>,
  document.getElementById("root"),
);