import { v4 as uuidv4 } from 'uuid'

export default function ListTodos ( { todos } ) {
	return (
		<h1>
			{todos.map( row => <li key={uuidv4()}>{row.task}</li> )}
		</h1>
	)
}