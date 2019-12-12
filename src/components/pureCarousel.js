import React, { Component } from "react";
import styled from 'styled-components';
import { Link } from 'gatsby';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'semantic-ui-css/components/button.css';
import 'semantic-ui-css/components/icon.css';

export default class CarouselComponent extends Component {
	render() {
		const { data, linkToAll, linkToSingle } = this.props;
		const Labels = styled.div`
			display: block;
			.uppercase {
				text-transform: uppercase;
			}
		`
		const StyledDiv = styled.div`
			h1 {
				z-index: 999;
				color: white;
			}
			.carousel-button-container {
				z-index: 999;
			  width: 100%;
			  margin-top: 1rem;
			  display: flex;
			  flex-direction: row;
			  div {
			  	z-index: 999;
			    flex: 1;
			    display: flex;
			    &:nth-child(2) {
			    	justify-content: center;
			    }
			    &:nth-child(3) {
			    	justify-content: flex-end;
			    }
			  }
			}
			.carousel__inner-slide {
			  display: flex;
			  align-items: center;
			  justify-content: center;
			  flex-direction: column;
			  .tag {
			    @media screen and (max-width: 599px) {
			      display: none;
			    }
			  }
			  * {
			    text-align: center;
			    color: white;
			    text-shadow: -1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5);
			    font-family: 'Roboto', sans-serif;
			    text-decoration: none;
			    &.title {
			      padding-left: .8rem;
			      padding-right: .8rem;
			      font-size: 2.25rem;
			      font-family: 'Orbitron', sans-serif;
			      @media screen and (max-width: 599px) {
			        padding: .5rem;
			        margin: 0;
			        font-size: 1.8rem;
			      }
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
			      font-size: 1.4rem;
			      @media screen and (max-width: 599px) {
			        font-size: 1.5rem;
			        display: none;
			      }
			      // background: rgba(0,0,0,0.3);
			      max-width: 80%;
			      margin: 0.5rem auto 1.5rem auto;
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
				}
		`
		const Slides = data.sort((a,b) => new Date(b.node.updatedAt).getTime() - new Date(a.node.updatedAt).getTime()).map((el, i) => (
			<Link
				className={'title'}
				to={`${linkToSingle}${el.node.slug}/`}
			>
				<Slide
					index={i}
					key={`slide-${el.node.id}`}
					style={{
						backgroundImage: `url(https:${el.node.image.file.url})`,
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat'
					}}
				>
						<span className={'title'}>{el.node.title}</span>
					<p className={'description gradient-animation'}>
						{el.node.description}
					</p>
				</Slide>
			</Link>
		))
		return (
			<StyledDiv>
				<CarouselProvider
					naturalSlideWidth={100}
					naturalSlideHeight={56.25}
					totalSlides={data.length}
					isPlaying
					speed={2000}
					lockOnWindowScroll
					inverval={3000}
					touchEnabled
					infinite
					pauseOnFocus
				>
					<Slider>
						{ Slides }
					</Slider>
					{/*<DotGroup
					className={'dot-group'}
				/>*/}
					<div className={'carousel-button-container'}>
						<div>
							<ButtonBack
								className={'ui small basic inverted icon button'}
							>
								<i className={'ui icon chevron left'} />Back
							</ButtonBack>
						</div>
						<div>
							<Link
								to={linkToAll}
								className={'ui small basic inverted icon button'}
							>
								<i className={'ui icon list right'} /> All
							</Link>
						</div>
						<div>
							<ButtonNext
								className={'ui small basic inverted icon button'}
							>
								Next<i className={'ui icon chevron right'} />
							</ButtonNext>
						</div>
					</div>
				</CarouselProvider>
			</StyledDiv>
		);
	}
}
