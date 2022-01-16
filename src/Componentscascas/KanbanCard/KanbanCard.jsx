import React, { useState } from "react";
import Modal from "react-modal";
import "./KanbanCard.css";

function KanbanCard({ project, onDragEnd }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div
      className="kanbanCard__container"
      draggable={true}
      onDragEnd={(e) => {
        onDragEnd(e, project);
      }}
    >
      <h4>{project.title}</h4>
      <button className="modalButton" onClick={toggleModal}>
        View
      </button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
        </div>
      </Modal>
    </div>
  );
}

export default KanbanCard;
