import React from 'react'
import {
	CloseIcon,
	Icon,
	SidebarContainer,
	SidebarLink,
	SidebarMenu,
	SidebarRoute,
	SidebarWrapper,
	SideBtnWrap
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  return (
	  <SidebarContainer isOpen={isOpen} onClick={toggle}>
		  <Icon onClick={toggle}>
			  <CloseIcon />
		  </Icon>
		  <SidebarWrapper>
			  <SidebarMenu>
				  <SidebarLink onClick={toggle} to="about">About</SidebarLink>
				  <SidebarLink onClick={toggle} to="roadmap">Roadmap</SidebarLink>
				  <SidebarLink onClick={toggle} to="something">Something</SidebarLink>
				  <SidebarLink onClick={toggle} to="buy">Buy</SidebarLink>
			  </SidebarMenu>
			  <SideBtnWrap>
				  <SidebarRoute to='/nfts'>Sign in</SidebarRoute>
			  </SideBtnWrap>
		  </SidebarWrapper>
	  </SidebarContainer>
  )
}

export default Sidebar