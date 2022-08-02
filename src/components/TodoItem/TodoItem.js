function Item({ text, id, todos, setTodos, isComplated }) {
	const handleDeleteTodo = (todoId) => {
		const filterTodos = todos.filter((e) => e.id !== todoId);
		setTodos(filterTodos);
	};

	const handleEditTodo = (todoId) => {
		const newText = prompt('Yangi textni kiriting');
		const findEditTodo = todos.find((e) => e.id === todoId);
		findEditTodo.text = newText;
		setTodos([...todos]);
	};

	const handleChangeTodo = (todoId) => {
		const findTodo = todos.find((e) => e.id === todoId);
		findTodo.isComplated = !findTodo.isComplated;
		setTodos([...todos])
	};

	return (
		<li className='d-flex justify-content-start w-25 mb-3 align-items-center'>
			<span className="me-1"> ID: {id}</span>
			<input className="me-2 " defaultChecked = {isComplated} onChange={() => handleChangeTodo(id)} type='checkbox' />

			<span className={ isComplated? "text-decoration-line-through fw-semibold fs-5" : "fw-semibold fs-5"}>{text}</span>

			<button
				className='btn btn-secondary ms-auto'
				onClick={() => handleEditTodo(id)}>
				Edit
			</button>
			<button
				className='btn btn-danger ms-3'
				onClick={() => handleDeleteTodo(id)}>
				Delete
			</button>
		</li>
	);
}

export default Item;
