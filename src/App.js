import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Main from "./main/Main";
import Sidebar from "./sidebar/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  // Stockage de note
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : []
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  // Ajout de note
  const addNote = () => {
    const newNote = {
      id: uuid(),title: "Note sans titre",body: "",
      
    };
    // A voir !!!!!!
    setNotes([newNote, ...notes]);
    setActiveNote(newNote.id);
  };
    // Suppression des notes
  const deleteNote = (noteId) => {
    setNotes(notes.filter(({ id }) => id !== noteId));
  };
  
  const majNote = (updatedNote) => {
    const updatedNotesArr = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }

      return note;
    });

    setNotes(updatedNotesArr);
  };

  const getActiveNote = () => {
    return notes.find(({ id }) => id === activeNote);
  };

  return (
    <div className="App">
      {/* Apl des fonction */}
      <Sidebar
        notes={notes}
        addNote={addNote}
        deleteNote={deleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} majNote={majNote} />
    </div>
  );
}
// liaison avec function
export default App;
