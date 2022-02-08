import ReactMarkdown from "react-markdown";
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';


const Main = ({addTask, activeNote, onUpdateNote }) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
    });
  };
  const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }

  if (!activeNote) return <div className="act-note">Aucune note selectionée</div>;

  return (
    
   
    <div className="appliprinc">
      <div className="appliprinc-note-modif">
        <input
          type="text" id="title" placeholder="Titre de la note" value={activeNote.title}onChange={(e) => onEditField("title", e.target.value)}autoFocus
        />
        <textarea
          id="body" placeholder="Veuillez rentrer votre note" value={activeNote.body} onChange={(e) => onEditField("body", e.target.value)}
        />
         <form onSubmit={handleSubmit}>
            <Button onChange={handleChange} variant="success">Enregistrer</Button>{' '} 
        </form>
         
      </div>
      <div className="appliprinc-note-previsu">
        <h1 className="titre">{activeNote.title}</h1>
        <ReactMarkdown className="markdown">
          {activeNote.body}
        </ReactMarkdown>
      </div>
    </div>
  );
};

export default Main;
