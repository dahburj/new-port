import React, { Component } from "react";
import styled from 'styled-components';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './carousel.scss';
import 'semantic-ui-css/components/button.css';

export default class CarouselComponent extends Component {
	render() {
		const Slide = styled.div`
			background-size: contain;
			background-repeat: no-repeat;
			.aws-sld {
			&__content {
		    .ui.basic.label {
		      font-famil: 'Roboto', sans-serif;
		    }
		    .aws-sld__controls {
    	  button {

      	}
    	}
	    p {
	      text-align: center;
	      color: white;
	      text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
	      font-family: 'Roboto', sans-serif;
	      &.title {
		      font-size: 2.5rem;
		      margin-bottom: 0.5rem;
        	span {
          	border-bottom: 2px solid transparent;
	          &:hover {
	            border-bottom: 4px solid white;
	            cursor: pointer;
	          }
	        }
	      }
	      &.description {
	        font-size: 1.2rem;
	        // background: rgba(0,0,0,0.3);
	        padding: 5px;
	        border-radius: 2px;
	      }
		      transform: translate3d(0, 0, 0);
		      opacity: 1;
		      transition: transform 0.45s cubic-bezier(0.15, 0.3, 0.15, 1), opacity 0.35s ease-out;
	    	}
		    p:nth-child(2) {
		      transition-delay: 0.05s, 0.05s;
		    }
		    &--exit {
		      p {
		        transition: transform 0.225s cubic-bezier(0.85, 0, 0.85, 0.7), opacity 0.4s ease-out;
		      }
		      p:nth-child(2) {
		        transition-delay: 0.05s, 0.05s;
		      }
		    }
		    &--moveLeft {
		      p {
		        transform: translate3d(-50px, 0, 0);
		        opacity: 0;
		      }
		    }
		    &--moveRight {
		      p {
		        transform: translate3d(50px, 0, 0);
		        opacity: 0;
		      }
		    }
		  }
		}
		`
		const { data } = this.props;
		// const data = sampleData.filter(element => element.visible);
		const Labels = styled.div`
			display: block;
			.uppercase {
				text-transform: uppercase;
			}
		`
		const slides = data.map(el => (
			<Slide
				key={el.node.id}
				style={{
					backgroundImage: `url(https:${el.node.image.file.url})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat'
				}}
			>
				<p className={'title'}>
					<span>{el.node.title}</span>
				</p>
				<p className={'description gradient-animation'}>
					{el.node.description}
				</p>
				<Labels className={'uppercase'}>
					<span className={'ui compact small inverted disabled button uppercase'}>Tags:</span>
					{el.node.tags.map(label => (
						<span className={'ui compact small button uppercase'}>{label}</span>
					))}
				</Labels>
				<Labels>
				
				</Labels>
			</Slide>
		))
		return (
			<AwesomeSlider
				infinite
				startupScreen
			>
				{ slides }
			</AwesomeSlider>
		);
	}
}
