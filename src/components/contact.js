import React from "react";
import styled from "styled-components";
import 'semantic-ui-css/components/card.css';
import 'semantic-ui-css/components/button.css';
import 'semantic-ui-css/components/image.css';

class ContactPage extends React.Component {
	render() {
		const StyledDiv = styled.div`
			text-shadow: none;
		`
		return (
			<StyledDiv>
				<h1>Contact</h1>
				<div className="ui inverted centered cards">
					<div className="card">
						<div className="content">
							<img className="right floated mini circular ui image" src="https://media.licdn.com/dms/image/C4D0BAQGyFfA6SKOHKA/company-logo_200_200/0?e=2159024400&v=beta&t=40F-iYjz5XgsJn5j37w-MMQ4WshNb0D54k4g2rg_ycE" alt={'Profile of contact 1'} />
								<div className="header">
									TFE Energy GmbH
								</div>
								<div className="meta">
									<a href='mailto:contact@tfe.energy'>contact@tfe.energy</a>
								</div>
								<div className="description">
									Franz-Joseph-Straße 10<br/>
									Munich 80801<br/>
									Germany<br /><br />
								</div>
						</div>
						<div className="extra content">
							<div className="ui three buttons">
								<a className="ui basic icon blue button"
								   href={'https://twitter.com/TFEdigital'}
								   target={'_blank'}
								>
									<i className='ui icon twitter' />
								</a>
								<a className="ui basic icon blue button"
								   href={'https://www.linkedin.com/company/tfe-consulting-gmbh/?viewAsMember=true'}
								   target={'_blank'}
								>
									<i className='ui icon linkedin' />
								</a>
								<a className="ui basic icon pink button"
									 href={'mailto:contact@tfe.energy'}
								   target={'_blank'}
								>
									<i className='ui icon envelope' />
								</a>
							</div>
						</div>
					</div>
					<div className="card">
						<div className="content">
							<img className="right floated mini circular ui image" src="https://media.licdn.com/dms/image/C4D0BAQGyFfA6SKOHKA/company-logo_200_200/0?e=2159024400&v=beta&t=40F-iYjz5XgsJn5j37w-MMQ4WshNb0D54k4g2rg_ycE" alt={'Profile of contact 2'} />
								<div className="header">
									TFE Africa Pvt. Ltd.
								</div>
								<div className="meta">
									<a href='mailto:contact@tfe.energy'>contact@tfe.energy</a>
								</div>
								<div className="description">
									152 Main Road<br/>Muizenberg, Cape Town<br/>
									7945, South Africa<br /><br />
								</div>
						</div>
						<div className="extra content">
							<div className="ui three buttons">
								<a className="ui basic icon blue button"
								   href={'https://twitter.com/TFEdigital'}
								   target={'_blank'}
								>
									<i className='ui icon twitter' />
								</a>
								<a className="ui basic icon blue button"
								   href={'https://www.linkedin.com/company/tfe-consulting-gmbh/?viewAsMember=true'}
								   target={'_blank'}
								>
									<i className='ui icon linkedin' />
								</a>
								<a className="ui basic icon pink button"
								   href={'mailto:contact@tfe.energy'}
								   target={'_blank'}
								>
									<i className='ui icon envelope' />
								</a>
							</div>
						</div>
					</div>
				</div>
				<h1>More</h1>
				<div className="ui two column stackable grid" style={{paddingBottom: '2rem'}}>
					<div className={'row'}>
						<div className={'column'}>
							<a href={"https://medium.com/tfe-energy-says"} target={'_blank'} style={{textDecoration: 'none'}}>
								<div className={'ui fluid icon big button'}><i className={'icon medium'} /> We say</div>
							</a>
						</div>
						<div className={'column'}>
							<a href={"https://medium.com/work-with-tfe-energy"} target={'_blank'} style={{textDecoration: 'none'}}>
								<div className={'ui fluid big icon button'}>
										<i className={'icon medium'} /> Get involved
								</div>
							</a>
						</div>
					</div>
				</div>
			</StyledDiv>
		);
	}
}
export default ContactPage;
