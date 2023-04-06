import React from "react";
import Page from "./components/Page";
function App() {
  // const [todos, setTodos] = useState([]);

  // const handleAddTodo = (e) => {
  //   if (e.keyCode === 13) {
  //     const newTodo = {
  //       id: todos.at(-1) ? todos.at(-1).id + 1 : 1,
  //       value: e.target.value,
  //     };
  //     setTodos([...todos, newTodo]);
  //   }
  // };

  return (
    <div className="wrapper">
      {/* <input type="text" onKeyUp={handleAddTodo} />
      {todos.length > 0 && (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.value} <button onClick={() => {
              setTodos(todos.filter((item) => item.id !== todo.id))
            }}>&times;</button></li>
            
          ))}
        </ul>
      )} */}
      <Page />
    </div>
  );
}

export default App;
