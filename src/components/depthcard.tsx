
import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

import ParallaxCard from "react-parallax-card";
import Img from "gatsby-image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import CardMedia from "@material-ui/core/CardMedia";
import { maxHeight } from '@material-ui/system';

export default function DPCardComponent({data, linkTo}){
    const projectData = data.node;
    
    return(
        <ParallaxCard label={projectData.title} enableRotate enableTransform style={{ margin: "0 auto", width: 250, height: 250 }}>
        <div>
          <img src={projectData.image.file.url} style={{maxWidth: "100%", maxHeight: "100%" }} />
        </div>
        <div /><div /><div />
        <div />
        {/*<div className="astro" style={{ maxWidth: '100%', height: '100%' }} />*/}
        <p>
          {projectData.description}
        </p>
      </ParallaxCard>
    );
}