import React from 'react'

function Circle(props) {
    const dragStart = e => {
        e.dataTransfer.setData('elem_id',e.target.id);
        setTimeout(() => {
            e.target.style.display = 'none';
        },0);
    }

    const dragEnd = e => {
        e.target.style.display = 'block';
    }

    return (
        <div
            id={props.id}
            className={props.className}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragEnd={dragEnd}
        >

        </div>
    )
}

export default Circle
