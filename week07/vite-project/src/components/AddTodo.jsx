import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { useState } from "react";
function AddTodo() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  return (
    <div>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <button
        onClick={() => {
          dispatch(addTodo(document.getElementById("title").value));
          setTitle("");
        }}
      >
        add
      </button>
    </div>
  );
}

export default AddTodo;
