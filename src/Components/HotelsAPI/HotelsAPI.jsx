import React, { useEffect } from 'react';
import axios from 'axios';

const HotelsAPI = () => {
	useEffect(() => {
		const fetchData = async () => {
			const options = {
				method: 'GET',
				url: 'https://hotels4.p.rapidapi.com/locations/v3/search',
				params: {
					q: 'new york',
					locale: 'en_US',
					langid: '1033',
					siteid: '300000001',
				},
				headers: {
					'X-RapidAPI-Key': '592882b0ddmsh995ccbd43e400a5p1b201fjsnfc1055702514',
					'X-RapidAPI-Host': 'hotels4.p.rapidapi.com',
				},
			};

			try {
				const response = await axios.request(options);
				console.log(response.data);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData(); // Call the async function when the component mounts
	}, []); // Empty dependency array ensures the effect runs once after initial render

	return <div>{/* Your component JSX */}</div>;
};

export default HotelsAPI;
