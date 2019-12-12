import React from "react";
import { slide as Menu } from 'react-burger-menu';
import { scroller } from 'react-scroll'
import styled from "styled-components";
import LINKS from '../constants/links'

const CrossIcon = require('../images/cross.png');

class MobileNavbar extends React.Component {
	constructor (props) {
		super(props);
		this.state = {
			isActive: -1,
			isOpen: false
		}
	}
	scrollTo (element) {
		scroller.scrollTo(element, {
			duration: 800,
			delay: 0,
			smooth: 'easeInOutQuart'
		})
	};
	render() {
		const { isOpen } = this.state;
		const MobileNavContainer = styled.div`
			@media screen and (min-width: 500px) {
				display: none;				
			}
		`;
		const NavIcons = styled.div`
			position: relative;
			a:first-child {
				margin-bottom: .5rem;
			}
		`;
		const mobileLinkMap = LINKS.filter(link => link.visible).map((link, i) => (
			<div
				key={`menu-mobile-item-${i}`}
				onClick={() => {
					this.scrollTo(link.scrollTo);
				}}
			>
				<span>{link.title}</span>
			</div>
		));
		return (
			<MobileNavContainer>
				<Menu
					isOpen={false}
					disableAutoFocus
					width={'75%'}
					onStateChange={(state) => console.log(state)}
				>
					<img src={require('../images/jad-logo-white.svg')}
							 style={{maxWidth: '100px'}}
							 onClick={() =>{
								  this.scrollTo('home');
							 }
						 }
					/>
					<div className={'ui inverted divider'} />
					<div>
						{ mobileLinkMap }
					</div>
					<div className={'ui inverted divider'} />
					<NavIcons>
						<a className={'ui basic small inverted blue icon fluid button'}
						   href={'https://medium.com/tfe-energy-says'}
						   target={'_blank'}
						   style={{
						      marginBottom: '.5rem'
						   }}
						>
							<i className={'icon medium'} /> We say...
						</a>
						<a className={'ui basic small inverted blue icon fluid button'}
						   href={'https://medium.com/work-with-tfe-energy'}
						   target={'_blank'}
						>
							<i className={'icon medium'} /> Get involved
						</a>
					</NavIcons>
				</Menu>
			</MobileNavContainer>
		);
	}
}
export default MobileNavbar;
