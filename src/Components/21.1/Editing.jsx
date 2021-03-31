import React, { useState, useEffect, useRef } from 'react'

function Editing() {
    const [edited, setEdit] = useState(false);
    const [input, setInput] = useState('');
    const inputRef = useRef();

    const onBtnClick = () => {
        if (inputRef.current) {
            inputRef.current.focus()
        }

        setEdit(!edited);
    }

    return (
        <>
            {!edited ?
                <>
                    <input type="button" value="edit" onClick={onBtnClick} />
                </>
                :
                <>
                    <input ref={inputRef} type="text" value={input} onChange={e => setInput(e.target.value)}/>
                    <input type="button" value="save" onClick={onBtnClick} />
                </>
            }
        </>
    )
}

export default Editing