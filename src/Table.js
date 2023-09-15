import React from 'react';
import Task from './Task';

/**
 * @param {Array} tareas arreglo de tareas para mostrar la tabla 
 */
const Table = ({tareas}) => {
	return (
		<table className='table'>
			<thead>
				<tr className='table-dark'>
					<th>Tarea</th>
					<th>Hora de Inicio</th>
					<th>Hora de Finalización</th>
					<th>Tiempo Total</th>
				</tr>
			</thead>

			<tbody className='table-group-divider'>
				{tareas.map((tarea) => (
					<Task tarea={tarea}></Task>
				))}
			</tbody>
		</table>
	);
};

export default Table;
