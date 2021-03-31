import React, { useState, useEffect, useRef } from 'react'
import './Image.css'
import image1 from './first.jpeg'
import image2 from './second.jpg'
import image3 from './third.jpg'
import image4 from './forth.jpg'

const ImageToggle = () => {

    const image1Ref = useRef();
    const image2Ref = useRef();

    const onHoverImg1 = () => {
        image1Ref.current.style.background = `url(${image3}) center center / cover no-repeat`
    }

    const onLeaveHoverImg1 = () => {
        image1Ref.current.style.background = `url(${image1}) center center / cover no-repeat`
    }
    const onHoverImg2 = () => {
        image2Ref.current.style.background = `url(${image4}) center center / cover no-repeat`
    }

    const onLeaveHoverImg2 = () => {
        image2Ref.current.style.background = `url(${image2}) center center / cover no-repeat`
    }

    return (
        <>
            <div style={{display: 'flex'}}>
                <div ref={image1Ref} className="image" onMouseEnter={onHoverImg1} onMouseLeave={onLeaveHoverImg1} style={{ background: `url('${image1}') no-repeat center/cover` }} ></div>
                <div ref={image2Ref} className="image" onMouseEnter={onHoverImg2} onMouseLeave={onLeaveHoverImg2} style={{ background: `url('${image2}') no-repeat center/cover` }} ></div>
            </div>
        </>
    )
}


export default ImageToggle;