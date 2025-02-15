import React, { useRef , useEffect, useState } from 'react'
import VIDEO from './test.mp4'

const Refexamples = () => {
    const eleref = useRef();
    // console.log(eleref);
    // useEffect(()=>{
    //     eleref.current.style.color="red";
    // },[]);
    const[play,setPlay] = useState(true);
    let videoRef=useRef();
    // console.log(videoRef);
    let playORpause=()=>{
      // console.log("Clicked");
      if(play == true){
        videoRef.current.play();
        setPlay(false);
        console.log("Play State");
      }else{
        videoRef.current.pause();
        setPlay(true)
        console.log("Pause State");
      }
    }
  return (
    <div>
        {/* <h1 ref={eleref}>Refexamples</h1> */}
        //* any text between video tags wont be displayed in ui
        <video src={VIDEO} ref={videoRef} onClick={playORpause}></video>
    </div>
  )
}

export default Refexamples