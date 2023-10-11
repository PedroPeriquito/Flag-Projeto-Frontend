import { useState } from 'react';
import Map from 'react-map-gl';

function MapsAPI() {
	const [viewState, setViewState] = useState({
		longitude: 122.4,
		latitude: 37.8,
		zoom: 3,
	});

	return (
		<Map
			mapStyle='mapbox://styles/xgant/clnkeipwu001601qw7oai3a93'
			mapboxAccessToken='pk.eyJ1IjoieGdhbnQiLCJhIjoiY2xua2hqMXd2MXZicTJtcnV5aGRnd2R6MCJ9.yLWhuhghNpXgGxKgYBjxiQ'
			initialViewState={viewState}
			onMove={e => setViewState(e.viewState)}
			style={{ width: 600, height: 400 }}
		/>
	);
}
export default MapsAPI;
