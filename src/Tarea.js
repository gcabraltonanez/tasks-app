import React from 'react';

const Tarea = ({tarea}) => {
	return (
		<tr>
			<td className='table-dark'>{tarea.descripcion}</td>
			<td className='table-dark'>{tarea.horaInicio}</td>
			<td className='table-dark'>{tarea.horaFinalizacion}</td>
			<td className='table-dark'>tiempo total</td>
			&nbsp; &nbsp;
		</tr>
	);
};

export default Tarea;
