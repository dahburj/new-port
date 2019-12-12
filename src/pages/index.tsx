import React, { useRef, useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Logo  from "../components/logo";
import Layout from "../components/layout";
import SEO from "../components/seo"
import Navbar from '../components/navbar';
import MobileNavbar from '../components/mobileNavbar';
import VideoPlayer from '../components/videoPlayer';
import VIDEOS from "../constants/videos";
import styled from "styled-components";
import "./index.css";
import Grid from "@material-ui/core/Grid";
import { Box } from "@material-ui/core";

import { useTransform, useMotionValue, useViewportScroll, motion, useAnimation } from 'framer-motion';

import { useInView } from "react-intersection-observer";
import ParallaxCard from "react-parallax-card";

import Img from "gatsby-image";
import DPCardComponent from "../components/depthcard";

const TopOfPage: React.FC = () => {
  return(
    <>
      <SEO title="Home" />
      <Navbar />
      <MobileNavbar />
    </>
  );
}

const BoxVariants = {
  open: {
    opacity: 1,
    rotate: 360,
    x: [60, 80, 150],
    scaleX: 1,
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    rotate: 0,
    scaleX: 0,
    opacity: 0,
  },
}

const BoxComponent = () => {
  const [ref, inView, entry] = useInView();

  return(
    <>
      <motion.div ref={ref} variants={BoxVariants} animate={inView ? "open" : "closed"}>
        <Box display="flex" flexWrap="wrap" bgcolor="background.paper">
          <p>hbdrhf eehf hew hjew che cbhjew hjew b ewh cehjwc hec hec ehchechechehje jke  erhjf hr hjr fhr fhr fhr fhv rhf hr fh</p>
        </Box>
      </motion.div>
    </>
  )
}

const CardComponent = () => {

  const [filterValue, setFilterValue] = useState('');

  const [ref, inView, entry] = useInView();

  const data = useStaticQuery(graphql`
    query {
      moeHoe: file(relativePath: { eq: "Space-HD.png" }) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 950) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      allContentfulContentfulProject(limit: 1000) {
        edges {
          node {
            id
            type
            title
            slug
            createdAt
            bodyRichText {
              json
            }
            image {
              file {
                url
              }
            }
            tags
            description
          }
        }
      }
    }`
  )

  const allProjects = data.allContentfulContentfulProject.edges;
  
  console.log(allProjects);

  const filteredProjects = allProjects;

  {/*const filteredProjects = allProjects.filter(item => (
  item.node.title.toLowerCase().search(filterValue.toLowerCase()) !== -1 || item.node.description.toLowerCase().search(filterValue.toLowerCase()) !== -1));*/}

  return(
    <Grid container justify="space-evenly" direction="row" alignItems="center" spacing={3} >

        {filteredProjects.map(project=> (
        <div key={`${project.node.slug}`} >
            <motion.div ref={ref} variants={CardVariants} animate={inView ? "show" : "hide"} style={{width: "100%"}}>
              <DPCardComponent linkTo={`/project/${project.node.slug}`} data={project} />
            </motion.div>
        </div>
      ))}
    </Grid>
  )
}

const SectionComponent = () => {

  const[ref, inView, entry] = useInView();

  return(
    <div id="sectionNew">
      <CardComponent />
      <div ref={ref}>
        
      </div>
  </div>
  )
}

const CardVariants = {
  show: {
    opacity: 1,
    rotate: 360,
    scaleX: 1,
    ScaleY: 0.1,
    x: 0,
    y: 0,
    transition: {
      duration: 1.9,
    },
  },
  hide: {
    opacity: 0,
    rotate: 0,
    scaleX: 0,
    x: -500,
    y: 500,
    transition: {
      duration: 0.3,
    },
  },
}


const IndexPage: React.FC = () => {

  const { scrollYProgress } = useViewportScroll();

  const controls = useAnimation();

  function StartAnim(){
    controls.start("open");
  }

  return(
    <>
      <Grid container justify="space-between" align-items="stretch" direction="column">
        <div id="bridgebg">
          <Grid item xs={12}>
              
            {/* Setup Mountains */}

            {/* feature overlayer */}
            <Grid item xs={6} alignContent="flex-start">
              <div className="mountain_btm_left"> </div>
            </Grid>
            <Grid item xs={6} alignContent="stretch">
              <div className="mountain_btm_mid"> </div>
            </Grid>
            <Grid item xs={6} alignContent="flex-end">
              <div className="mountain_btm_right"> </div>
            </Grid>
          </Grid>
        </div>
        </Grid>
    </>
  )
}

const variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
      easeOut: "easeOut",
      duration: 1.5,
    },
  },
}


interface Props{
  state?: {
    videosLoaded: any,
    videosEmbedded: any,
    videoIsLoaded: any,
  }

}

class IndexClass extends React.Component <Props> {


  
  render () {
    return(
      <Layout>
        <TopOfPage />
        <IndexPage />
        <SectionComponent />
        <Grid container justify="space-evenly" alignItems="stretch" direction="column">
            <Grid item xs={12}>
              <VideoPlayer id={'video1'} video={VIDEOS[0]} />
            </Grid>
        </Grid>
      </Layout>
    )
  }
}
export default IndexClass