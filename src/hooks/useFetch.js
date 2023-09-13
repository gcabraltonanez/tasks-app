import {useEffect, useState} from 'react';
import fetch from '../helpers/fetch';
import buscar from '../helpers/fetch';

const useFetch = (url, reqBody, method) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(null);
	const [error, setError] = useState(null);

	const refresh = async (endpoint, body, method) => {
		const newData = await buscar(endpoint, body, method);
		setData(newData);
	};

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const res = await fetch(url, reqBody, method);
				setData(res);
			} catch (error) {
				if (error?.response?.data) setError(error?.response?.data);
				else if (error) setError(error);
			}
			setLoading(false);
		};

		fetchData();
	}, [url, method, reqBody]);
	return {data, loading, error, refresh};
};

export default useFetch;
