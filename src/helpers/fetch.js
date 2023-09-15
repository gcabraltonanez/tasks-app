const baseUrl = process.env.REACT_APP_API_URL;


/**
 * helper fetch
 * 
 * @param {String} endpoint endpoint al cual apunta la petición 
 * @param {Object} data body que se le envia a la petición
 * @param {String} method método de la petición
 */
const buscar = async (endpoint, data, method = 'GET') => {
	const url = `${baseUrl}/${endpoint}`;

	if (method === 'GET') {
		return await fetch(url).then((response) => response.json());
	} else {
		return await fetch(url, {
			method,
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(data),
		})
			.then((response) => response.json())
			.catch((error) => {
				throw new Error(`Ocurrió un error (${error.message})`);
			});
	}
};

export default buscar;
