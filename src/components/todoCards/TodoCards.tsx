import { Todo } from "../../types/Types";
import "./TodoCards.css";

export const TodoCards = ({ todos }: { todos: Todo[]}) =>  (
    <div className="cards">
      {todos.map((todo) => (
        <div className="cards__wrapper" key={todo.id}>
          <h1 className="cards__title">{todo.name}</h1>
          <p className="cards__description">{todo.description}</p>
        </div>
      ))}
    </div>
  );

