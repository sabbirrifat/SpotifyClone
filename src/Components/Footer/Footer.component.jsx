import React from 'react'
import './footer.styles.css'
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid } from '@material-ui/core';
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import VolumeDownIcon from '@material-ui/icons/VolumeDown';
import { Slider } from "@material-ui/core";

const Footer = () => {
    return (
        <div className="footer">
           <div className="footer-left">
            <img className="footer-albumLogo" src="" alt=""/>
            <div className="footer-songInfo">
                <h4>The Believer - Imagine Dragons</h4>
                <p>now playing</p>
            </div>
            
           </div>

           <div className="footer-center">
            <ShuffleIcon className="footer-green" />
            <SkipPreviousIcon className="footer-icon" />
            <PlayCircleOutlineIcon fontSize="large" className="footer-icon" />
            <SkipNextIcon className="footer-icon" />
            <RepeatIcon className="footer-green" />
           </div>

           <div className="footer-right">
             <Grid container spacing={2}>

                 <Grid item>
                     <PlaylistPlayIcon />
                 </Grid>

                 <Grid item>
                     <VolumeDownIcon />
                 </Grid>

                 <Grid item xs>
                     <Slider />
                 </Grid>

             </Grid>
           </div>
        </div>
    )
}
export default Footer
