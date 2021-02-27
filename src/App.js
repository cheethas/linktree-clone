import React, {useRef, useState} from "react";

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
                  ref={vidRef}
                  src={video_url}
                  preload="metadata"
                  className="player-full"
                  type="video/mp4"
                />
            </div>

            {freshLoad && 
              <div className="player-full-cover" > 
                    <div></div>
              </div>
            }
            
            <div className="Link">
              <div className="Link-container">
                <a href="https://drive.google.com/drive/u/0/folders/1Lc3mV3emKhG_5ixDTMdTgBTVnsi1mcE5">MANIFESTO</a>
              </div>
            </div>

            <div className="Link">
              <div className="Link-container">
                <a href="https://bit.ly/suvote21">REGISTER TO VOTE</a>
              </div>                
            </div>
              
            <div className="Link">
              <div className="Link-container">
                <a href="https://www.instagram.com/ben_cummins/">INSTAGRAM</a>
              </div>                
            </div>

            <div className="Link">
              <div className="Link-container">
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
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
