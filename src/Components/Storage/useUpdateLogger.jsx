import { useEffect } from 'react';

export default function useUpateLogger(value) {
	useEffect(() => {
		console.log(value);
	}, [value]);
}
