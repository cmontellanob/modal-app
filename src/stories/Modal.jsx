import './Modal.css';
export const  Modal = ({ isOpen, onClose, contenido,color,backgroundColor })=> {
  if (!isOpen) return null;
  return (
    <div  className="modal-overlay">
    <div style={{backgroundColor:backgroundColor}} className="modal">
      <button className="modal-close" onClick={onClose}>
        X
      </button>
      <div className="modal-content">
      
        <p>{contenido}</p>
      </div>
      <div className="modal-actions">
        <button onClick={onClose}>Cancelar</button>
        <button onClick={onClose}>Aceptar</button>
        <button onClick={onClose}>Guardar cambios</button>
      </div>
    </div>
  </div>
  );
};