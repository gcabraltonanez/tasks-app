import React from 'react';
import Tarea from './Tarea';

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
					<Tarea tarea={tarea}></Tarea>
				))}
			</tbody>
		</table>
	);
};

export default Table;
