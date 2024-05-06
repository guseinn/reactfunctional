import React, { useState } from "react";


import Modal from "./functioncomp/Modal"
function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="app">
     
      <div className="modal-dialog">
        <div className="modal-content">
          <button
            type="button"
            className="btn btn-primary"
            onClick={openModal}
          >
            Уведомления
          </button>
        </div>
      </div>

      {showModal && (
        <Modal onClose={closeModal} />
      )}

      {showModal && (
        <div className="modal-backdrop" onClick={closeModal} />
      )}
    </div>
  );
  <Modal/>
 
}

export default App;