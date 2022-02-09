import Button from 'react-bootstrap/Button';
const Sidebar = ({
    notes,
    addNote,
    deleteNote,
    activeNote,
    setActiveNote,
  }) => {
    
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
    return (
      
      <div className="sidebar">
        <div className="sidebartete">
          {/* Titre de la sidebar */}
          <h1>Carnet de notes</h1>

          {/* Bouton ajouter*/}
          <Button variant="primary" onClick={addNote}>Ajouter</Button>{' '}
        </div>
        <div className="sidebarnote">
          {sortedNotes.map(({ id, title, body }, i) => (
            <div
              className={`sidebar2 ${id === activeNote && "active"}`}
              onClick={() => setActiveNote(id)}
            >
              {/* Titre */}
              <div className="titre-sidebar">
                <strong>{title}</strong>
                
                {/* Bouton supprimer */}
                <Button variant="danger"onClick={(e) => deleteNote(id)}>Supprimer</Button>{' '}
              </div>
              <p>{body && body.substr(0, 100) + "..."}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  
