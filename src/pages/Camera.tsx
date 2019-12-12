import React, { useState, useEffect } from "react";
import { element } from "prop-types";
import { RouteComponentProps } from "@reach/router";

import { Link } from "gatsby";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import FavoriteIcon from "@material-ui/icons/Favorite";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';

var cameraStream;

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}),
);

const CameraApp: React.FC<CamProps> = () => {
    

    return (
        <div>
            <Link to="/">
                <Fab variant="extended" onClick={ShutDownPage}>
                    <HomeRoundedIcon className="extendedIcon" />
                </Fab>
            </Link>
            <Fab disabled aria-label="like">
                <FavoriteIcon />
            </Fab>
            <header className="CameraApp-header">
                <Camera />
                <p>
                    Yo so tu padre, tu papa, mijo 
                </p>
            </header>
        </div>
    );

    function ShutDownPage(){

        let videoRef: HTMLVideoElement = document.getElementById("player") as HTMLVideoElement;

        if(videoRef)
        {
            var track = videoRef.srcObject as MediaStream;

            if(track.active){
                track.getTracks()[0].stop();
            }
        }
    }
}

interface CamProps extends RouteComponentProps{

}

interface Props { }

interface State { };

class Camera extends React.Component<Props, State> {
    

    video_reference: HTMLVideoElement | null = null
    set_video_reference = (element: HTMLVideoElement) => {
        this.video_reference = element
    }
    async componentDidMount(){
        if (this.video_reference) {
             let video_stream:MediaStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: false })
            this.video_reference.srcObject = video_stream
        }
    }


    render(){

        return(
            <div>
                <div>
                <Fab color="primary" aria-label="add" onClick={CamButtonPressed}>
                    <AddIcon />
                </Fab>
                <video ref={this.set_video_reference} id="player" autoPlay>
                </video>
                </div>
            </div>
        )
        async function CamButtonPressed (){
            
            let videoRef: HTMLVideoElement = document.getElementById("player") as HTMLVideoElement;

            if(videoRef != null)
            {
                var track = videoRef.srcObject as MediaStream;
                if(track.active)
                {
                    track.getTracks()[0].stop();

                }
                else
                {
                    track = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: false });
                    videoRef.srcObject = track;
                }
            }
        }


    }

}

export default CameraApp;