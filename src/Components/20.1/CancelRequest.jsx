import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Info from './Info';

function CancelRequest() {
    const [toggle, setToggle] = useState(false);

    const changeToggleBtn = () => {
        setToggle(!toggle);
    }

    return (
        <>
            {toggle ?
                <>
                    <input type="button" value="Hide Data" onClick={changeToggleBtn} />
                    <Info/>
                </> :
                <input type="button" value="Display" onClick={changeToggleBtn} />
            }
        </>
    )
}

export default CancelRequest;