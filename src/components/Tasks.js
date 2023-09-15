import '../Tasks.css';
import logoi from '../assets/images/logoi.png';
import Form from './Form';
import Table from '../Table';
import useFetch from '../hooks/useFetch';
import {CSVLink} from 'react-csv';

const Tasks = () => {
	const {data: tareas, error, refresh} = useFetch('tasks', null, 'GET');

	return (
		<div className='tareas'>
			<img src={logoi} alt='' />
			<h1>Listado de Tareas</h1>
			<p style={{marginBottom: '5px'}}>Nombre de la tarea:</p>
			<Form refresh={refresh}></Form>
			<div>{tareas?.length > 0 ? <Table tareas={tareas}></Table> : <h2 className='empty-tasks'>No hay tareas cargadas</h2>}</div>
			{tareas?.length !== 0 ? (
				<CSVLink data={tareas ? tareas : []} filename={'tareas.csv'}>
					<button className='btn btn-success'>Descargar CSV</button>
				</CSVLink>
			) : (
				<button disabled={true} className='btn btn-success'>
					Descargar CSV
				</button>
			)}
		</div>
	);
};

export default Tasks;
