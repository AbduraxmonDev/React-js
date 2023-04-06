import React from "react";

export default function AddModal({
  open,
  onClose,
  handleAddTodo,
  titleref,
  descRef,
}) {
  const addToDo = () => {
    onClose();
    descRef.current.value = "";
    titleref.current.value = "";
  };

  if (open) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return (
    <div className={`modal ${open ? "show" : ""}`} onClick={addToDo}>
      <div
        className="modal__wrapper"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <form className="modal__form">
          <div className="modal__inputs">
            <h3 className="modal__inputs-title">Title</h3>
            <input
              type="text"
              className="modal__inputs-input title-input"
              ref={titleref}
            />
          </div>
          <div className="modal__inputs">
            <h3 className="modal__inputs-title">Description</h3>
            <textarea
              type="text"
              className="modal__inputs-input description-input"
              ref={descRef}
            />
          </div>

          <div className="modal__btns">
            <button
              type="button"
              className="modal__close-btn"
              onClick={addToDo}
            >
              Close
            </button>
            <button
              className="modal__add-btn"
              onClick={(e) => {
                handleAddTodo(e);
              }}
            >
              Add todo
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
