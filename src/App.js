import { useEffect, useState } from 'react';
import './App.css';
import Note from './components/Note';
import Header from './components/Header';
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/notes")
      .then((res) => setNotes(res.data));
  }, []);

  console.log(notes)

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <ul className='card-container'>
          {notes.map((note) => (
            <Note key={`note__${note.id}`} title={note.title}>
              {note.content}
            </Note>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
