import React from 'react';

/**
 *
 * @param {Object} tarea objeto que recibe para mostrar la información de la tarea
 */
const Task = ({ tarea }) => {
	
	return (
		<tr>
			<td onDoubleClick={() => console.log('Open Edit Modal')} style={{cursor: 'pointer'}} className='table-dark'>
				{tarea.descripcion}
			</td>
			<td className='table-dark'>{tarea.horaInicio}</td>
			<td className='table-dark'>{tarea.horaFinalizacion ? tarea.horaFinalizacion : '--'}</td>
			<td className='table-dark'>{tarea.tiempoTotal ? tarea.tiempoTotal : '--'}</td>
			&nbsp; &nbsp;
		</tr>
	);
};

export default Task;
