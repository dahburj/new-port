import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import styled from "styled-components";
import VideoPlayer from '../components/videoPlayer';
import VIDEOS from '../constants/videos'
import "./index.css";
class VideosComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      videosLoaded: 0,
      videosEmbedded: 0
    }
    this.videoIsReady = this.videoIsReady.bind(this)
  }
  videoIsReady () {
    console.log('Child said video is ready.')
    this.setState({
      videosLoaded: this.state.videosLoaded + 1
    })
  }
  componentDidMount () {
    const allVideos = document.querySelectorAll('.fullscreen-video');
    console.log('Videos found: ' + allVideos.length)
    this.setState({
      videosEmbedded: allVideos.length
    })
  }
  render () {
  
    const videosLoaded = this.state.videosLoaded >= this.state.videosEmbedded && this.state.videosLoaded > -1
    
    const PreloadContainer = styled.div`
      width: 100vw;
      height: calc(var(--vh, 1vh) * 100);
      height: 100vh;
      position: fixed;
      background: black;
      left: 0;
      top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      h1 {
        color: white;
      }
    `
    return (
      <Layout>
        <SEO title="Videos" keywords={[`video`, `youtube`, `tfe`]} />
        { videosLoaded &&
        <PreloadContainer>
          <h1>Loading videos..</h1>
        </PreloadContainer>
        }
        <div
          className="video-container"
          style={{
            opacity: videosLoaded ? 1 : 0
          }}
        >
          <VideoPlayer
            loadingHandler={this.videoIsReady}
            video={VIDEOS[0]}
          />
          <div>
            <p>TEXT</p>
          </div>
          <VideoPlayer
            loadingHandler={this.videoIsReady}
            video={VIDEOS[1]}
          />
          <div>
            <p>TEXT</p>
          </div>
          <VideoPlayer
            loadingHandler={this.videoIsReady}
            video={VIDEOS[2]}
          />
        </div>
      </Layout>
    )
  }
}
export default VideosComponent;
