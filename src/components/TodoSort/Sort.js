function Sort({ todos, setTodos, ComplatedTodo, UnComplatedTodo }) {


	return (
		<div className="mt-5">
			<button className="me-3" onClick={setTodos(todos)}>
				All <strong>0</strong>
			</button>
			<button className="me-3" onClick={ComplatedTodo}>
				Complated <strong>0</strong>
			</button>
			<button onClick={UnComplatedTodo}>
				UnComplated <strong>0</strong>
			</button>
		</div>
	);
}

export default Sort;
