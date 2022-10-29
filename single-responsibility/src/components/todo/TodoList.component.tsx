import { useFetchingTodos } from "../../hooks/useFetchingTodos";
import Todo from "./Todo.component";

// Single-responsibility principle
// En el siguiente componente estamos violando el principio SRP
// Debemos identificar que logica podemos extrar en un nuevo componente
// para mejorar nuestro codigo

const TodoList = () => {
	const {todos} = useFetchingTodos();

	return (
		<section>
			<h1>To Do List 👨‍💻</h1>
			{todos.map((todo) => (
				<Todo todo={todo} key={todo.id} />
			))}
		</section>
	);
};

export default TodoList;
