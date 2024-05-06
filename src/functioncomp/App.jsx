import React, { useState } from "react";

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
}

export default App;