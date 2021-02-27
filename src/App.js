import React, {useRef, useEffect, useState} from "react";

import './App.css';
import logo from './images/ben_profiler.jpg'
const URL_MOBILE = "https://firebasestorage.googleapis.com/v0/b/ben-for-pres.appspot.com/o/BENJAMIN_Portrait_compressed.m4v?alt=media&token=6f485108-80b5-4d6f-9c40-463aa8ce7ca4";
const URL_LANDSCAPE = "https://firebasestorage.googleapis.com/v0/b/ben-for-pres.appspot.com/o/BENJAMIN_Landscape_compressed.m4v?alt=media&token=0998a459-621c-4fd9-a84d-1b00b76eac99";


function App() {
  const vidRef = useRef(null);
  const [vidPlaying, setVidPlaying] = useState(false);
  const [freshLoad, setFreshLoad] = useState(true);
  const video_url = (window.innerWidth > window.innerHeight) ? URL_LANDSCAPE : URL_MOBILE;

  const playVideo = () => {
    vidRef.current.play();
    setVidPlaying(true);
    setFreshLoad(false);
  }

  const pauseVideo = () => {
    vidRef.current.pause();
    setVidPlaying(false);
  }

  const toggleVideo = evt => {
    evt.preventDefault();
    if (vidPlaying) pauseVideo();
    else playVideo();
  }

  return (
    <div className="App">
      <div className="Content">
        <div className="App-header">
          <div className="Body"  >
            <div onClick={toggleVideo}>
            <video 
                  // autoPlay={true} 
                  ref={vidRef}
                  src={video_url}
                  preload="metadata"
                  // controls
                  className="player-full"
                  type="video/mp4"
                  // onClick={toggleVideo}
                
                >
                  
                </video>
            </div>

            {freshLoad && <div
            className="player-full-cover" 
                    // style={{
                    //   backgroundColor: "white",
                    //   zIndex:10000000,
                    //   position:"relative",
                    //   top:0,
                    //   left:0,
                    //   height:"100%",
                    //   width:"100%"
                    // }}
                  >
                    {freshLoad ? "true" : "false"} 
                    <div>
                      </div>
                    </div>}
            

          
            {/* NOTE: For when the video is not full screen */}
            {/* <div className="Profile">
              <div className="Profile-image">
                <img src={logo} alt="profile"></img>
              </div>
              <div className="Profile-username">
                <h1>@ben_cummins</h1>
              </div>
            </div> */}

            {/* <div className="video-box">
              <div className="player-wrapper">
                <video 
                  autoPlay
                  // width="40%"
                  // height="40%"
                  src={video_url}
                  preload="metadata"
                  controls
                  className="player"
                
                ></video>
              </div>
            </div> */}

            <div className="Link">
              <div className="Link-container">
                {/* <Cart size='2em' color="black"/> */}
                <a href="https://drive.google.com/drive/u/0/folders/1Lc3mV3emKhG_5ixDTMdTgBTVnsi1mcE5">MANIFESTO</a>
              </div>
            </div>

            <div className="Link">
              <div className="Link-container">
              {/* <WhatsappSquare size='2em' color='green'/> */}
                <a href="https://bit.ly/suvote21">REGISTER TO VOTE</a>
              </div>                
            </div>
              
            <div className="Link">
              <div className="Link-container">
                {/* <InstagramAlt size='2.8em' className="Icon instagramIcon"/> */}
                <a href="https://www.instagram.com/ben_cummins/">INSTAGRAM</a>
              </div>                
            </div>

            <div className="Link">
              <div className="Link-container">
              {/* <FacebookSquare size='2.8em' color="blue" className="Icon facebookIcon"/> */}
                <a href="https://www.facebook.com/ben4prez1819">FACEBOOK</a>
              </div>                
            </div>

            {!vidPlaying && 
              <div style={{
                display: "flex",
                flexDirection:"row",
                justifyContent:"center",
                alignItems:"center",
                padding:"10%"
              }}>
                <div className="Link">
                  <div className="Link-container">
                    <button onClick={() => playVideo()}>
                      PLAY VIDEO
                    </button>
                  </div>
                </div>
            </div>}

            {/* <div className="player-wrapper">
              <ReactPlayer 
                    playing={true}
                    ref={vidRef}
                    url={video_url}
                    // preload="metadata"
                    // controls
                    // muted
                    className="player"
                    type="video/mp4"
                    controls
                    onClick={() => toggleVideo}
                  
                  ></ReactPlayer>
            </div> */}
            
            {/* {freshLoad &&
              <div className="Link">
                <div className="Link-container">
                // {/* <FacebookSquare size='2.8em' color="blue" className="Icon facebookIcon"/> }
                  <a onClick={onClickButtonPressed}>CLICK TO PLAY</a>
                </div>                
              </div>
            }  */}

            {/* <div className="Socials">
              <div className="Social-links">
                <a target="_blank" rel="noopener noreferrer" data-testid="SocialIcon" href="https://www.facebook.com/ben4prez1819" aria-label="facebook" className="facebook social">
                  <FacebookSquare size='2.8em' color="blue" className="Icon facebookIcon"/>
                </a>
                <a target="_blank" rel="noopener noreferrer" data-testid="SocialIcon" href="https://www.instagram.com/ben_cummins/" aria-label="facebook" className="instagram social">
                  <InstagramAlt size='2.8em' className="Icon instagramIcon"/>
                </a>
              </div>
            </div>
          </div> */}
          {/* <div className="GitHub">
            <a target="_blank" rel="noopener noreferrer" data-testid="SocialIcon" href="https://github.com/ilhamfadheel/linktree-clone" aria-label="github" className="github social">
              <Code size='2em' color="black"/>
            </a>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
