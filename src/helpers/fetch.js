const baseUrl = process.env.REACT_APP_API_URL;

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
