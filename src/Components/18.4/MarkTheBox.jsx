import React, { useState } from 'react'

function MarkTheBox() {

    const [checkBoxes, setBoxes] = useState(getInitialState(arr));

    const deleteCheckedBoxes = () => {
        const tempCheckBoxes = Object.entries(checkBoxes).filter(element => {
            return element[1] === false
        })

        const tempCheckBoxesObj = Object.fromEntries(tempCheckBoxes);
        setBoxes(tempCheckBoxesObj);
    }

    const ResetBoxes = () => {
        setBoxes(getInitialState(arr));
    }

    const checkBoxHandler = (index) => {
        let tempCheckBoxes = checkBoxes;
        tempCheckBoxes[Object.keys(tempCheckBoxes)[index]] = !Object.values(tempCheckBoxes)[index];
        setBoxes(tempCheckBoxes)
    }

    return <>
        <input type="button" value="Delete" onClick={deleteCheckedBoxes} />
        <input type="button" value="Rest" onClick={() => ResetBoxes()} />
        {Object.entries(checkBoxes).map((element, index) => {
            return <div key={element[0]}><input type="checkbox" defaultChecked={element[1]} onChange={() => checkBoxHandler(index)} />{element[0]}</div>
        })}
    </>
}

const arr = ["one", "two", "three", "four", "five"];
const getInitialState = (array) => {
    return Object.assign(...array.map(k => ({ [k]: false })))
}

export default MarkTheBox;