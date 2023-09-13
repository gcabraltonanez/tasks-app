import {useEffect, useState} from 'react';
import buscar from '../helpers/fetch';

const Form = ({refresh}) => {
	useEffect(() => {
		refresh('get-tasks', null, 'GET');
	}, []);

	const [value, setValue] = useState({
		descripcion: '',
		horaInicio: new Date().toLocaleTimeString(),
		horaFinalizacion: new Date().toLocaleTimeString(),
	});

	const handleSubmit = async (event) => {
		event.preventDefault();
		if (value.descripcion !== '') {
			buscar('new-task', value, 'POST');
			setValue({
				descripcion: '',
				horaInicio: new Date().toLocaleTimeString(),
				horaFinalizacion: new Date().toLocaleTimeString(),
			});
			refresh('get-tasks', null, 'GET');
		}
		refresh('get-tasks', null, 'GET');
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
