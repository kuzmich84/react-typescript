import React, {useState} from 'react';

const EventsExample: React.FC = () => {

    const [value, setValue] = useState<string>('')
    const [isDrag, setIsDrag] = useState<boolean>(false)

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(value)

    }

    const dragHandler = (event: React.DragEvent<HTMLDivElement>) => {
        console.log('drag')

    }

    const dragWithPreventHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setIsDrag(true)

    }

    const leaveHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setIsDrag(false)

    }

    const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault()
        setIsDrag(false)
        console.log('DROP')

    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text"/>
            <button onClick={clickHandler}>Кликнуть</button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'red'}}/>
            <div
                onDrop={dropHandler}
                onDragLeave={leaveHandler}
                onDragOver={dragWithPreventHandler}
                style={{width: 200, height: 200, background: isDrag ? 'blue' : 'red', marginTop: 15}}/>
        </div>
    );
}

export default EventsExample;