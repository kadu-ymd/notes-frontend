import React, { useState, useEffect } from "react";
import "./index.css";
import axios from "axios";

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function editCard(noteId) {
//     // alguma coisa
// }

const deleteCard = (noteId, func) => axios.delete(`http://localhost:8000/api/notes/${noteId}`).then(() => (func()));

export default function Note(props) {
    const [rotation, setRotation] = useState(0);
    useEffect(() => {
        setRotation(randomInt(-5, 5));
    }, []);

    const style = { transform: `rotate(${rotation}deg)` };

    console.log(props.tag)

    return (
        <div className="card" style={style}>
            <div className="header-box">
                <div className="card-header1">
                    <h3 className="card-title">{props.title}</h3>
                </div>
                <div className="card-header2">
                    <img src="/edit.png" className="img-remove" alt=""/>
                    <img src="/trash.png" className="img-remove" onClick={() => deleteCard(props.id, props.carregaNotes)} alt=""/>
                </div>
            </div>
            <div className="card-content">{props.children}</div>
            <p class="tag">{props.tag}</p>
        </div>
    );
}