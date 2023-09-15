import {useEffect, useState} from 'react';
import buscar from '../helpers/fetch';

//componente Form
const Form = ({refresh}) => {
	useEffect(() => {
		refresh('tasks', null, 'GET');
	}, []);

	//estado del componente
	const [value, setValue] = useState({
		descripcion: '',
		horaInicio: new Date().toLocaleTimeString(),
		horaFinalizacion: new Date().toLocaleTimeString(),
	});

	//funcion que maneja la creación de una nueva tarea
	const handleSubmit = async (event) => {
		event.preventDefault();
		if (value.descripcion !== '') {
			buscar('tasks', value, 'POST');
			setValue({
				descripcion: '',
				horaInicio: new Date().toLocaleTimeString(),
				horaFinalizacion: new Date().toLocaleTimeString(),
			});
			refresh('tasks', null, 'GET');
		}
		refresh('tasks', null, 'GET');
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className='formulario'>
				<input
					style={{width: '100%', height: '38px', borderRadius: '5px'}}
					type='text'
					value={value.descripcion}
					onChange={(event) => {
						setValue({
							...value,
							descripcion: event.target.value,
						});
					}}
				/>
				<button style={{width: '130px'}} class='btn btn-primary' type='submit'>
					Agregar Tarea
				</button>
			</div>
		</form>
	);
};

export default Form;
