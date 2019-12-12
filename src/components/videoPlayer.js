import React from "react";
import styled from "styled-components";
// import { Waypoint } from 'react-waypoint';
class VideoPlayer extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			videoLoaded: false
		}
		this.tellParentImReady = this.tellParentImReady.bind(this)
	}
	componentDidMount () {
		const vid = document.querySelector('#video-' + this.props.video.id);
		if (this.state.videoLoaded) {
			vid.oncanplaythrough.off();
			return;
		}
		/*
		vid.oncanplaythrough = () => {
			console.log(vid);
			// console.log("Can play through video without stopping");
			if (this.state.videoLoaded) {
				return;
			}
			this.tellParentImReady()
		};
		*/
	}
	tellParentImReady () {
		console.log('Video ready handler triggered in video');
		// this.props.loadingHandler();
		this.setState({
			videoLoaded: true
		})
	}
	render() {
		const VideoContainer = styled.div`
			pointer-events: none;
			width: 100vw;
			height: 100vh;
			height: calc(var(--vh, 1vh) * 100);
			position: relative;
			overflow: hidden;
			div {
				overflow: hidden;
			}
			video {
				position: absolute;
				overflow: hidden;
				width: calc(100vh / 9 * 16);
				width: calc((calc(var(--vh, 1vh) * 100)) / 9 * 16);
				height: 100vh;
				height: calc(var(--vh, 1vh) * 100);
				left: calc(-50%);
				right: calc(-50%);
				// right: calc((0 + (100vw / 16 * 4.5)));
				top: 0;
				bottom: 0;
				margin: 0 auto;
				/*
				@media screen and (max-width: 599px) {
					margin-left: calc((calc(var(--vh, 1vh) * 100)) / 16 * 9);
				}
				*/
			}
		`
		return (
			<VideoContainer
				className={'fullscreen-video'}
			>
				<video
					id={`video-${this.props.video.id}`}
					poster={`${this.props.video.src.poster.jpg}`}
					loop
					autoPlay
					muted
					playsInline
				>
					<source src={this.props.video.src.hdready.mp4.cdn} type={'video/mp4'} />
					<source src={this.props.video.src.hdready.webm.cdn} type={'video/webm'} />
					<source src={this.props.video.src.hdready.webm.ogv} type={'video/ogv'} />
				</video>
			</VideoContainer>
		);
	}
	
	_onReady = (event) => {
		console.log('ready');
		this.tellParentImReady(event);
	}
}
export default VideoPlayer;
