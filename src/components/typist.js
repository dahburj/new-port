import React from "react";
import styled from "styled-components";
import Typist from 'react-typist';
import parse from "html-react-parser";
import 'react-typist/dist/Typist.css';

class TypistComponent extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			isFinished: false
		}
	}
	render() {
		const textPieces = [
			{ text: '"Jamal is a ',
				html: '"Jamal is a ',
			back: 0},
			{ text: ' scientist"',
				html: ' scientist"'},
			{ text: ' traveler"',
				html: ' traveler"'},
			{ text: ' dedicated achiever"',
				html: ' dedicated achiever"'},
			{ text: ' naturally intuitive problem-solver"',
				html: ' naturally intuitive problem-solver"'},
			{ text: ' phenomenal entrepreneur"',
				html: ' phenomenal entrepreneur"'},
			{ text: ' rare type of dreamer"',
				html: ' rare type of dreamer"'},
			{ text: ' plain-old genius"',
				html: ' plain-old genius"'},
			{ text: ' true visionary"',
				html: ' true visionary"',
			},
			{ text: ' friendly yet resolute colleague"',
				html: ' friendly yet resolute colleague"',
			},
			{ text: ' man of action"',
				html: ' man of action"',
				back: 0},
		]
		const { startDelay, delay } = this.props
		const mappedTexts = textPieces.map((text, i) => (
			<span key={`text-part-${i}`}>
				<span className={'typist-header'}>
					{ parse(text.html) }
				</span>
				<Typist.Backspace
					count={ text.back || text.back === 0 ? text.back : text.text.length }
					delay={delay * 3}
				/>
				<Typist.Delay
					ms={ delay }
				/>
			</span>
		))
		const TypistContainer = styled.div`
			color: white;
			display: flex;
			margin-top: 2rem;
			span {
				font-family: 'Orbitron', sans-serif;
				font-size: 2rem;
				@media screen and (max-width: 500px) {
					font-size: 1.5rem;
				}
			}
		`
		return (
			<TypistContainer>
				<Typist
					speed={2}
					blinkSpeed={5}
					className={'typist-header'}
					cursor={{
						blink: true,
						element: '|'
					}}
					startDelay={startDelay}
					onTypingDone={() => this.setState({isFinished: true})}
				>
					{ mappedTexts }
				</Typist>
			</TypistContainer>
		);
	}
}
export default TypistComponent;
