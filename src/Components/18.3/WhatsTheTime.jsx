import React, { useState } from 'react'

function WhatsTheTime() {

    const [time, setTime] = useState(60);

    const updateTime = (e) => {
        e.target.title === '3' ?
            setTime(e.target.value * 60 * 60) :
            e.target.title === '2' ?
                setTime(e.target.value * 60) : setTime(e.target.value)
    }

    return <>
        <input title={1} type="number" value={time} onChange={updateTime} />
        <input title={2} type="number" value={time / 60} onChange={updateTime} />
        <input title={3} type="number" value={time / 60 / 60} onChange={updateTime} />
    </>

}

export default WhatsTheTime;