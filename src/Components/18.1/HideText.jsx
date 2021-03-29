import React, { useState } from 'react'

function HideText({text, maxLength}) {

    const [maxLen, setMax] = useState(maxLength);

    const clickHandler = (length) => {
        setMax(length)
    }
    
    return (
        <>
            {text.length > maxLen ?
                <p>{text.slice(0, maxLength)}...<a href="#" onClick={() => clickHandler(text.length)}>read more</a></p> :
                <p>{text}<a  href="#" onClick={() => clickHandler(maxLength)}> ?show less</a></p>
            }
        </>
    );
}

export default HideText;