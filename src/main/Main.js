import ReactMarkdown from "react-markdown";
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';


const Main = ({ajtNote, activeNote, majNote }) => {
  const edit = (field, value) => {
    majNote({
      ...activeNote,
      [field]: value,
    });
  };
  const [ userInput, setUserInput ] = useState('');
      
  // Envoyer l'info du textarea ( enregistrer)++
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        ajtNote(userInput);
        setUserInput("");
    }
  // ecrand d'acceuil quand on ne selectionne pas de note
  if (!activeNote) return <div className="act-note">Aucune note selectionée</div>;

  return (
    
    
    <div className="appliprinc">
      <div className="appliprinc-note-modif">
        {/* rentrer le titre de la note */}
        <input
          type="text" id="title" placeholder="Titre de la note" value={activeNote.title}onChange={(e) => edit("title", e.target.value)}autoFocus
        />
        {/* rentrer la note dans le textarea */}
        <textarea
          id="body" placeholder="Veuillez rentrer votre note" value={activeNote.body} onChange={(e) => edit("body", e.target.value)}
        />
        {/* liaison avec l'envoie d'info ++ */}
         <form onSubmit={handleSubmit}>
            <Button onChange={handleChange} variant="success">Enregistrer</Button>{' '} 
        </form>
         
      </div>
      <div className="appliprinc-note-previsu">
        <h1 className="titre">{activeNote.title}</h1>
        {/* Utilisation du Markdown */}
        <ReactMarkdown className="markdown">
          {activeNote.body}
        </ReactMarkdown>
      </div>
    </div>
  );
};
// liaison avec la function
export default Main;
