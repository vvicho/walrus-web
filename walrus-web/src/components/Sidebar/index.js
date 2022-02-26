import React from 'react'
import {
	CloseIcon,
	Icon,
	SidebarContainer,
	SidebarLink,
	SidebarMenu,
	SidebarWrapper
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
	  <SidebarContainer isOpen={isOpen} onClick={toggle}>
		  <Icon onClick={toggle}>
			  <CloseIcon />
		  </Icon>
		  <SidebarWrapper>
			  <SidebarMenu>
				  <SidebarLink onClick={toggle} to="home">Home</SidebarLink>
				  <SidebarLink onClick={toggle} to="roadmap">Roadmap</SidebarLink>
				  <SidebarLink onClick={toggle} to="team">Team</SidebarLink>
				  <SidebarLink onClick={toggle} to="buy">Buy</SidebarLink>
				  <SidebarLink onClick={toggle} to="faq">FAQ</SidebarLink>
			  </SidebarMenu>
		  </SidebarWrapper>
	  </SidebarContainer>
  )
}

export default Sidebar