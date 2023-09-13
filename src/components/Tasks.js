import '../Tasks.css';
import logoi from '../assets/images/logoi.png';
import Form from './Form';
import Table from '../Table';
import useFetch from '../hooks/useFetch';

const Tasks = () => {

	const {data: tareas, refresh} = useFetch('get-tasks', null, 'GET');

	return (
		<div className='tareas'>
			<img src={logoi} alt='' />
			<h1>Listado de Tareas</h1>
			<p style={{marginBottom: '5px'}}>Nombre de la tarea:</p>
			<Form refresh={refresh}></Form>
			<div>{tareas?.length > 0 ? <Table tareas={tareas}></Table> : <h2>No hay tareas cargadas</h2>}</div>
			<button style={{width: '130px'}} class='btn btn-success'>
				Descargar CSV
			</button>
		</div>
	);
};

export default Tasks;
