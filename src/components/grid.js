import React from 'react';
import { Grid, Image } from 'semantic-ui-react';
import styled from 'styled-components';

export default function GridComponent(props) {
	const StyledImage = styled.img`
		width: auto;
		margin: 0 auto;
		height: auto;
		max-height: 100px;
		margin: 1.25rem auto;
		&:hover {
			transform: scale(1.1);
		}
	`;

	const gridElements = props.data.map(el => (
		<Grid.Column style={{textAlign: 'center'}} white>
			<a href={el.node.url}
	  		 target={'_blank'}
			>
				<StyledImage
					src={el.node.image.file.url}
					alt={`Logo ${el.node.title}`}
					title={`${el.node.title}`}
				/>
			</a>
		</Grid.Column>
	))

	return (
		<Grid centered
					stackable={props.stackable}
					doubling={props.doubling}
		      relaxed={props.relaxed}
		      style={props.styles}
		      className={`${props.gradient ? 'gradient-animation': ''} ${props.columnBackground ? props.columnBackground : ''}`}
		>
			<Grid.Row centered columns={3}>
				{ gridElements }
			</Grid.Row>
		</Grid>
	);
}
