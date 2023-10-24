import { useEffect, useState } from 'react';
import './App.css'
import Note from './components/Note';
import Header from './components/Header';
import Form from './components/Form';
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  function carregaNotes() {
    axios
      .get("http://localhost:8000/api/notes")
      .then((res) => setNotes(res.data));
  }

  useEffect(() => {
    carregaNotes();
  }, []);

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Form />
        <ul className='card-container'>
          {notes.map((note) => (
            <Note key={`note__${note.id}`} title={note.title} id={note.id} carregaNotes={carregaNotes} tag={note.tag}>
              {note.content}
            </Note>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
