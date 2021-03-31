import React, { useState, useEffect, useRef } from 'react'
import video from './video.mp4'

const PlayVideo = () => {
    // const [edited, setEdit] = useState(false);
    const [input, setInput] = useState('');
    const videoRef = useRef();

    const onClickPlayVideo = () => {
        videoRef.current.play()
    }
    const onClickPauseVideo = () => {
        videoRef.current.pause()
    }

    return (
        <>
            <video width="420" height="315" ref={videoRef}> <source src={video} type="video/mp4"/></video>

                <input type="button" value="Play" onClick={onClickPlayVideo} />
                <input type="button" value="Pause" onClick={onClickPauseVideo} />
        </>
    )
}

export default PlayVideo