import React from 'react'

function Square(props) {
    const drop = e => {
        e.preventDefault();
        const elem_id = e.dataTransfer.getData('elem_id');
        const elem = document.getElementById(elem_id);
        elem.style.display = 'block';
        if( (elem.className.includes("red") && e.target.className.includes("red")) ||
         (elem.className.includes("blue") && e.target.className.includes("blue")) ) {
            elem.setAttribute('draggable','false');
            e.target.appendChild(elem);
            return;
        }

        document.getElementById("items").appendChild(elem);
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return (
        <div
            id={props.id}
            className={props.className}
            onDrop={drop}
            onDragOver={dragOver}
        >
        </div>
    );
}

export default Square