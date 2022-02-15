import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AppContext from "./AppContext";
import Home from "./pages";
import NFTCollectionPage from "./pages/nft-collection";

const App = () => {
	const [user, setUser] = useState();

	const updateUser = (newUser) => {
		setUser(newUser);
	}

	const settings = {
		user: user,
		updateUser,
	};
	
	
	return (
	  	<AppContext.Provider value={settings}>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} exact />
					<Route path="/nfts" element={<NFTCollectionPage />} exact />
				</Routes>
			</Router>
		</AppContext.Provider>
  );
}

export default App;