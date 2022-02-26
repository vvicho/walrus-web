import React, { useState } from 'react'
import Footer from '../components/Footer';
import InfoSection from '../components/Sections/InfoSection';
import { homeObjOne } from '../components/Sections/InfoSection/Data';
import Navbar from '../components/Navbar'
import TeamSection from '../components/Sections/TeamSection';
import Sidebar from '../components/Sidebar'
import MintSection from '../components/Sections/MintSection';
import RoadmapSection from '../components/Sections/RoadmapSection';
import FaqSection from '../components/Sections/FaqSection';
import BlankSection from '../components/Sections/BlankSection';

const Home = () => {

	const [isOpen, setIsOpen] = useState(false);
	
	const toggle = () => {
		setIsOpen(!isOpen);
	}

	return (
		<div style={{fontFamily: 'Ubuntu, sans-serif'}}>
			<Sidebar isOpen={isOpen} toggle={toggle} />
			<Navbar toggle={toggle} />
			<InfoSection {...homeObjOne} />
			<RoadmapSection />
			<TeamSection />
			<MintSection />
			<FaqSection />
			<BlankSection />
			<Footer/>
		</div>
	);
}

export default Home