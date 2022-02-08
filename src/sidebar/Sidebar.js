import Button from 'react-bootstrap/Button';
const Sidebar = ({
    notes,
    onAddNote,
    onDeleteNote,
    activeNote,
    setActiveNote,
  }) => {
    
    const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
    return (
      
      <div className="sidebar">
        <div className="sidebartete">
          <h1>Carnet de notes</h1>
          <Button variant="primary" onClick={onAddNote}>Ajouter</Button>{' '}
        </div>
        <div className="sidebarnote">
          {sortedNotes.map(({ id, title, body }, i) => (
            <div
              className={`sidebar2 ${id === activeNote && "active"}`}
              onClick={() => setActiveNote(id)}
            >
              <div className="titre-sidebar">
                <strong>{title}</strong>
                <Button variant="danger"onClick={(e) => onDeleteNote(id)}>Supprimer</Button>{' '}
              </div>
              <p>{body && body.substr(0, 100) + "..."}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  