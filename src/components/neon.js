import React from "react";

const NeonPath = () => {};

function addIntensity(num) {
    const arr = [];
    while(num) {
        arr.push(<feMergeNode in="blurred" />);
        num--;
    }

    return arr;
}

class Neon extends React.PureComponent {
    render() {
        const { intensity, blur } = this.props;
        return (
            <div className="neon">
                <svg width="550" height="450" viewBox="0 0 550 450" preserveAspectRatio="xMinYMin">
                    <defs>
                        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur in="SourceGraphic" stdDeviation={blur} result="blurred"></feGaussianBlur>
                            <feMerge>
                                {addIntensity(intensity)}
                            </feMerge>
                        </filter>
                        <g id="ribbon" data-name="Layer 2">
                            <rect className="cls-1" x="0.28" width="29.51" height="5.71"/>
                            <rect className="cls-1" x="44.95" width="29.51" height="5.71"/>
                            <rect className="cls-1" x="89.62" width="29.51" height="5.71"/>
                            <rect className="cls-1" x="44.95" y="20.99" width="29.51" height="5.71"/>
                            <rect className="cls-1" x="89.62" y="20.99" width="29.51" height="5.71"/>
                            <rect className="cls-1" x="89.62" y="41.99" width="29.51" height="5.71"/>
                        </g>
                        <g id="Layer_3" data-name="Layer 3">
                            <path className="cls-1" d="M3.71,63H.51V60.88h8.7V63H6v8.37H3.71Z"/>
                            <path className="cls-1" d="M12.48,60.88h8V63H14.79v2.27h5v2.08h-5v4.07H12.48Z"/>
                            <path className="cls-1" d="M23.82,60.88h7.9v2H26.1v2.13h4.95v2.06H26.1v2.2h5.7v2.06h-8Z"/>
                            <path className="cls-1"
                                  d="M44.62,60.88h7.75V62H45.83v3.58h5.85v1.08H45.83V70.3h6.62v1.08H44.62Z"/>
                            <path className="cls-1"
                                  d="M59.27,63.62h1.18V65a3,3,0,0,1,2.7-1.51,2.85,2.85,0,0,1,3,3.1v4.82H65V66.85a2.09,2.09,0,0,0-2.19-2.34,2.3,2.3,0,0,0-2.37,2.43v4.44H59.27Z"/>
                            <path className="cls-1"
                                  d="M72.79,67.52v0a3.86,3.86,0,0,1,3.8-4c2.34,0,3.69,1.83,3.69,4.09a2.36,2.36,0,0,1,0,.38H74a2.72,2.72,0,0,0,2.78,2.62,3.28,3.28,0,0,0,2.49-1.09l.74.64a4.13,4.13,0,0,1-3.26,1.46A3.9,3.9,0,0,1,72.79,67.52Zm6.29-.45a2.57,2.57,0,0,0-2.52-2.64A2.7,2.7,0,0,0,74,67.07Z"/>
                            <path className="cls-1"
                                  d="M86.93,63.62h1.18v2a3.39,3.39,0,0,1,3.23-2.16v1.24h-.1c-1.73,0-3.13,1.22-3.13,3.56v3.09H86.93Z"/>
                            <path className="cls-1"
                                  d="M97.3,72.73l.54-.9a5.14,5.14,0,0,0,3,1,2.58,2.58,0,0,0,2.88-2.76v-.92a3.77,3.77,0,0,1-3.11,1.64,3.63,3.63,0,0,1-3.72-3.63v0a3.64,3.64,0,0,1,3.72-3.66,3.75,3.75,0,0,1,3.1,1.56v-1.4h1.17V70a3.65,3.65,0,0,1-1,2.74,4.2,4.2,0,0,1-3,1A6.3,6.3,0,0,1,97.3,72.73Zm6.49-5.6v0a2.75,2.75,0,0,0-2.91-2.62,2.59,2.59,0,0,0-2.74,2.61v0a2.65,2.65,0,0,0,2.74,2.64A2.78,2.78,0,0,0,103.79,67.13Z"/>
                            <path className="cls-1"
                                  d="M118.07,63.62h1.25l-3.32,8c-.67,1.61-1.44,2.19-2.63,2.19a3.63,3.63,0,0,1-1.69-.39l.4-.91a2.58,2.58,0,0,0,1.24.28c.7,0,1.15-.36,1.62-1.45l-3.59-7.73h1.3l2.87,6.47Z"/>
                        </g>
                    </defs>
                    <use xlinkHref=".cls-1" fill="#1660d5" />
                    <use xlinkHref=".cls-1" fill="#5f92e3" filter="url(#glow)" />
                    <use xlinkHref="#circle" fill="#1660d5" />
                    <use xlinkHref="#circle" fill="#5f92e3" filter="url(#glow)" />
                    <use xlinkHref="#red-ribbon" fill="#f44b4b" />
                    <use xlinkHref="#red-ribbon" fill="#ff0000" filter="url(#glow)" />
                    <use xlinkHref="#pabst" fill="#fff" />
                    <use xlinkHref="#pabst" fill="#fff" filter="url(#glow)" />
                    <use xlinkHref="#blue-ribbon" fill="#fff" />
                    <use xlinkHref="#blue-ribbon" fill="#fff" filter="url(#glow)" />
                    <use xlinkHref="#beer" fill="#fff" />
                    <use xlinkHref="#beer" fill="#fff" filter="url(#glow)" />
                </svg>
            </div>
        );
    }
};

export default Neon;