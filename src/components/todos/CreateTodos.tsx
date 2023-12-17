import { useState } from "react";
import { v4 as key } from "uuid";
import { TodoCards } from "../todoCards/TodoCards";
import { Todo } from "../../types/Types";
import { INPUTS_DATA_LIST } from "../../constants/constants";
import "./CreateTodos.css";

const INITIAL_STATES = {
  inputValue: {
    name: "",
    description: "",
  },
  todos: [],
  count: 0,
};
export const CreateTodos = () => {
  const [inputValue, setInputValue] = useState<Todo>(INITIAL_STATES.inputValue);
  const [todos, setTodos] = useState<Todo[]>(INITIAL_STATES.todos);

  const updatedInputValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({
      ...inputValue,
      [event.target.id]: event.target.value,
      id: key(),
    });
  };

  const addTodo = () => {
    if (inputValue.name || inputValue.description) {
      setTodos([...todos, inputValue]);
      setInputValue({ name: "", description: "" });
    }
  };

  return (
    <>
      <div className="todos">
        {INPUTS_DATA_LIST.map((input_data) => (
          <input
            placeholder={input_data.placeholder}
            key={input_data.id}
            className="todos__input"
            id={input_data.id}
            value={inputValue[input_data.id]}
            onChange={(event) => updatedInputValue(event)}
          />
        ))}
        <button className="todos__create-btn" onClick={addTodo}>
          Add task
        </button>
      </div>
      <TodoCards todos={todos} />
    </>
  );
};
