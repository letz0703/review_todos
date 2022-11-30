import { v4 as uuidv4 } from 'uuid'
import { FiTrash } from 'react-icons/fi'
export default function ListTodos ( { todos, onDelete } ) {
	const handleDelete = ( e ) => {
		e.preventDefault()
		onDelete( e.target.value )
	}
	return (
		<>
			<h1>
				{todos.map( row =>
					<li key={uuidv4()}>
						{row.task}
						<button onClick={() => onDelete( row.task )} >
							{/* <FiTrash className="icon" value='wow' /> */}
							🗑
						</button>
					</li> )}
			</h1>
			<style>
				{`
					.icon{color: red}
				`}
			</style>
		</>
	)
}