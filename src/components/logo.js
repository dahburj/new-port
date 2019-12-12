import React from "react"
import PropTypes from "prop-types"
import { scroller } from 'react-scroll'
import styled from 'styled-components';
import '../styles/animations.scss';
import 'semantic-ui-css/components/icon.css';
import 'semantic-ui-css/components/button.css';
import TypistComponent from "./typist";

const LogoContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    justify-content: center;
    img {
        width: 320px;
        max-width: 320px;
        @media screen and (max-width: 500px) {
          max-width: 220px;
        }
        &.big {
          
        } 
        @media screen and (min-width: 500px) {
          &.nav {
            position: fixed;
            left: .5rem;
            top: .5rem;
            height: 2.8rem;
            width: auto;
            z-index: 9999;
            &:hover {
              cursor: pointer;
            }
          }      
    }
`;

const Logo = ({ img }) => (
    <LogoContainer>
        <img
          id={'jad-logo'}
          src={require('../images/' + img)}
          alt={'Jad Logo'}
          onClick={() =>
            scroller.scrollTo('home', {
              duration: 800,
              delay: 0,
              smooth: 'easeInOutQuart'
            })
          }
        />
        <TypistComponent
          startDelay={500}
          delay={800}
        />
    </LogoContainer>
);

Logo.propTypes = {
    img: PropTypes.string,
    isBig: PropTypes.bool,
};

Logo.defaultProps = {
    //img: `tfe-logo-white.svg`,
    img: 'Saturn.svg',
    isBig: true,
};

export default Logo
