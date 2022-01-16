import React, { useState } from "react";
import Modal from "react-modal";
import "./AddTask.css";

function AddTask({ addTask }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData((s) => ({
      ...s,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <button onClick={toggleModal}>Add Task</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div>
          <form className="addTaskForm" action="">
            <input
              type="text"
              name="title"
              placeholder="Title"
              onChange={handleChange}
              value={formData.title}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              onChange={handleChange}
              value={formData.description}
            />
            <input
              type="text"
              name="date"
              placeholder="Due Date"
              onChange={handleChange}
              value={formData.date}
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                addTask({
                  title: formData.title,
                  description: formData.description,
                  dueDate: formData.date,
                  id: parseInt(Date.now() / (3600 * 365)),
                  project_stage: 1,
                });
                toggleModal();
              }}
            >
              Add
            </button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default AddTask;
