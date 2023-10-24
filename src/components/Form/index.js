import React, { useState } from "react";
import './index.css';
import axios from "axios";

const refreshPage = () => window.location.reload();

export default function Form(props) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tag, setTag] = useState("");

    const atualizaTitle = (event) => setTitle(event.target.value);

    const atualizaContent = (event) => setContent(event.target.value);

    const atualizaTag = (event) => setTag(event.target.value);

    const postCard = (event) => {
        event.preventDefault();
        const post = { title: title, content: content, tag: tag }
        axios.post('http://localhost:8000/api/notes/', post)
            .then(() => refreshPage())
            .catch((error) => (console.log(error)))
    }

    return (
        <form className="form-card" onSubmit={postCard}>
            <p className="add-title">Crie um novo card</p>
            <label for="titulo">Título</label>
            <input
                className="form-card-title"
                id="titulo"
                type="text"
                name="titulo"
                placeholder="Insira um título..."
                onChange={atualizaTitle}
            />
            <label for="detalhes">Detalhes</label>
            <input
                className="form-card-title"
                id="detalhes"
                name="detalhes"
                placeholder="Insira o conteúdo..."
                onChange={atualizaContent}
            />
            <label for="tag">Tag</label>
            <input
                className="form-card-title"
                id="tag"
                name="tag"
                placeholder="Insira a tag..."
                onChange={atualizaTag}
            />
            <input className="btn" type="submit" value="Adicionar card" />
        </form>
    );
}