function Sort({ AllTodos, ComplatedTodo, UnComplatedTodo }) {


	return (
		<div className="mt-5">
			<button className="me-3 btn btn-primary" onClick={AllTodos}>
				All 
			</button>

			<button className="me-3 btn btn-success" onClick={ComplatedTodo}>
				Complated 
			</button>

			<button className="btn btn-warning" onClick={UnComplatedTodo}>
				UnComplated
			</button>
		</div>
	);
}

export default Sort;
