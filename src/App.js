import React, {useRef, useState} from "react";

import './App.css';
import logo from './images/ben_profiler.jpg'
const URL_MOBILE = "https://firebasestorage.googleapis.com/v0/b/ben-for-pres.appspot.com/o/BENJAMIN_Portrait_lossy.m4v?alt=media&token=25eebd5c-bc38-4129-878d-7afb04becd99";
const URL_LANDSCAPE = "https://firebasestorage.googleapis.com/v0/b/ben-for-pres.appspot.com/o/BENJAMIN_Landscape_lossy.m4v?alt=media&token=b91820b4-6176-4031-af93-afc3b7a1e913";
// const URL_LANDSCAPE = "https://vimeo.com/video/518079765";
// const URL_MOBILE = "https://vimeo.com/video/518079305";

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
                  playsInline
                />
            </div>

            {freshLoad && 
              <div className="player-full-cover" > 
                    <div></div>
              </div>
            }
           
            {/* <div className="Link-row">
              <div className="Link">
                <div className="Link-container-row">
                  <a href="https://www.tcdsu.org/images/leadership-race/2021-2022/2021_candidatemanifestos/PRES/SU2122_PRES_BEN_CUMMINS_MANIFESTO.pdf">MANIFESTO</a>
                </div>
              </div>

              <div className="Link">
                <div className="Link-container-row">
                  <a href="https://drive.google.com/file/d/16Z3dzyQz8NDap43_rAkN16kFfN5PWdj7/view">MANIFESTO AS GAEILGE</a>
                </div>
              </div>

            </div> */}
          
            <div className="Link">
              <div className="Link-container">
                <a href="https://www.tcdsu.org/images/leadership-race/2021-2022/2021_candidatemanifestos/PRES/SU2122_PRES_BEN_CUMMINS_MANIFESTO.pdf">MANIFESTO</a>
              </div>
            </div>

            {!vidPlaying &&<div className="Link">
              <div className="Link-container">
                <a href="https://drive.google.com/file/d/16Z3dzyQz8NDap43_rAkN16kFfN5PWdj7/view">MANIFESTO AS GAEILGE</a>
              </div>
            </div>}
          
            

            <div className="Link">
              <div className="Link-container">
                <a href="https://bit.ly/suvote21">REGISTER TO VOTE</a>
              </div>                
            </div>
              
            {!vidPlaying &&<div className="Link">
              <div className="Link-container">
                <a href="https://www.instagram.com/ben_cummins/">INSTAGRAM</a>
              </div>                
            </div>}

            {!vidPlaying &&<div className="Link">
              <div className="Link-container">
                <a href="https://www.facebook.com/benfortcdsupresident">FACEBOOK</a>
              </div>                
            </div>}

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
