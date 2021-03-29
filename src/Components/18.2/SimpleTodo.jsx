import React, { useState } from 'react'

function SimpleTodo() {

    const [tasksArr, setTasksArr] = useState(data);

    const completeTaskHandler = (index) => {
        const tempArr = [...tasksArr];
        console.log(tempArr);
        tempArr[index].completed ? tempArr[index].completed = false : tempArr[index].completed = true;
        setTasksArr(tempArr)

    }

    return <>
        {tasksArr.map((task, index) => {
            return task.completed ?
                <p onClick={() => completeTaskHandler(index)} style={{ textDecorationLine: 'line-through' }}>{task.name}</p> :
                <p onClick={() => completeTaskHandler(index)} style={{ textDecorationLine: 'none' }}>{task.name}</p>

        })}
    </>

}



const data = [
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
]

export default SimpleTodo;