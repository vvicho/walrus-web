import React, {useEffect, useState} from 'react'
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll/modules';
import {
	MobileIcon,
	Nav,
	NavbarContainer,
	NavBtn,
	NavBtnLink,
	NavItem,
	NavLinks,
	NavLogo,
	NavMenu
} from './NavbarElements';
import { IconContext } from 'react-icons/lib';
import WalletConnector from '../../WalletConnector';

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	}

  return (
	  <>
		  <IconContext.Provider value={{color: '#fff'}}>
			<Nav scrollNav={scrollNav}>
				<NavbarContainer>
				  <NavLogo to="/" onClick={toggleHome}>dolla</NavLogo> 
				  <MobileIcon onClick={toggle}>
					  <FaBars/>
				  </MobileIcon>
				  <NavMenu>
					  <NavItem>
						  <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
					  </NavItem>
					  <NavItem>
						  <NavLinks to="roadmap" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Roadmap</NavLinks>
					  </NavItem>
					  <NavItem>
						  <NavLinks to="team" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Team</NavLinks>
					  </NavItem>
					  <NavItem>
						  <NavLinks to="buy" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Buy!</NavLinks>
					  </NavItem>
				  </NavMenu>
				  <NavBtn>
						  {/* <NavBtnLink to="/nfts">Sign in</NavBtnLink> */}
						  <WalletConnector />
				  </NavBtn>
				</NavbarContainer>
			  </Nav>
		  </IconContext.Provider>
	</>
  )
}

export default Navbar