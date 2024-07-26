import { useSelector, useDispatch } from "react-redux";

function Todos() {
  const todosMap = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div>
      {todosMap.map((todo) => (
        <div key={todo.id}>
          {todo.text} <br />
          <button
            onClick={() =>
              dispatch({ type: "todos/removeTodo", payload: todo.id })
            }
          ></button>
        </div>
      ))}
    </div>
  );
}

export default Todos;
