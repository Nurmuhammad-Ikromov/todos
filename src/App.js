import './App.css';
import { useState } from 'react';
import Item from './components/TodoItem/TodoItem';
import List from './components/TodoList/List';
import Sort from './components/TodoSort/Sort';

function App() {
	const [todos, setTodos] = useState(
		JSON.parse(window.localStorage.getItem('todos')) || [],
	);
	

	const ComplatedTodo = () => {
		const ComplatedTodos = todos.filter((e) => e.isComplated);
		setTodos([...ComplatedTodos]);
      
	};

	const UnComplatedTodo = () => {
		const UnComplatedTodos = todos.filter((e) => e.isComplated===false);
		setTodos([...UnComplatedTodos]);  
	};

	const handleChangeInput = (evt) => {
		if (evt.code === 'Enter') {
			const newTodo = {
				id: todos.at(-1)?.id ? todos.at(-1).id + 1 : 1,
				text: evt.target.value,
				isComplated: false,
			};

			setTodos([...todos, newTodo]);
			evt.target.value = '';
		}
	};

	window.localStorage.setItem('todos', JSON.stringify(todos));

	return (
		<div className='App'>
			<Sort todos={todos}  setTodos={setTodos} ComplatedTodo={ComplatedTodo} UnComplatedTodo={UnComplatedTodo}/>

			<input
				className='w-25  form-control m-auto mt-5 mb-4 '
				onKeyUp={handleChangeInput}
				type='text'
			/>

			{todos.length > 0 && (
				<List>
					{todos.map((e) => (
						<Item
							key={e.id}
							text={e.text}
							id={e.id}
							todos={todos}
							setTodos={setTodos}
							isComplated={e.isComplated}
						/>
					))}
				</List>
			)}
		</div>
	);
}

export default App;
