import React, { useRef, useState } from "react";
import AddModal from "./AddModal";

const Page = () => {
  const [open, setOpen] = useState(false);
  const titleInput = useRef();
  const descriptionInput = useRef();

  const onClose = () => {
    setOpen(false);
  };

  const [todos, setTodos] = useState(
    JSON.parse(window.localStorage.getItem("todos")) || []
  );

  const handleAddTodo = (e) => {
    if (
      e.type === "click" &&
      titleInput.current.value.trim().length > 0 &&
      descriptionInput.current.value.trim().length > 0
    ) {
      const newTodo = {
        id: todos.at(-1) ? todos.at(-1).id + 1 : 1,
        value: titleInput.current.value,
        description: descriptionInput.current.value,
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
      window.localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
    } else {
      e.preventDefault();
      alert("all inputs should be filled");
    }
  };

  const handleDeleteTodo = (e) => {
    const filtered = todos.filter(
      (item) => item.id !== +e.target.dataset.todoId
    );
    setTodos(filtered);
    window.localStorage.setItem("todos", JSON.stringify(filtered));
  };

  const handleCompletedTodo = (e) => {
    todos.forEach((todo) => {
      if (todo.id === e.target.dataset.todoId - 0) {
        todo.isCompleted = e.target.checked;
        console.log(todo.isCompleted);
      }
    });
    window.localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div className="page">
      <div className="container">
        <div className="page__container">
          <div className="page__header">
            <a href="/">
              <h1 className="page__title">ToDo</h1>
            </a>
            <button
              className="page__btn"
              onClick={() => {
                setOpen(true);
              }}
            >
              + Add ToDo
            </button>
          </div>
          <div className="page__body todo">
            {todos.length > 0 && (
              <ul className="todo-list">
                {todos.map((todo) => (
                  <li key={todo.id} className="todo-item">
                    <button data-todo-id={todo.id} onClick={handleDeleteTodo}>
                      +
                    </button>
                    <h3 className={`${todo.isCompleted && "completed"}`}>
                      {todo.value}{" "}
                    </h3>
                    <p>{todo.description} </p>
                    <label>
                      <input
                        type="checkbox"
                        data-todo-id={todo.id}
                        onChange={handleCompletedTodo}
                      />
                      done
                    </label>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <AddModal
        open={open}
        onClose={onClose}
        handleAddTodo={handleAddTodo}
        titleref={titleInput}
        descRef={descriptionInput}
      />
    </div>
  );
};

export default Page;
