import React from "react";
import TodoType from "../../types/todo.types";

interface TodoProps {
	todo: TodoType;
}

const Todo: React.FC<TodoProps> = ({todo}) => {
	return <li>{` Tarefa ${todo.id}: ${todo.title}`}</li>;
};

export default Todo;
