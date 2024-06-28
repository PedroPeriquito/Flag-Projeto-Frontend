import { useState, useEffect } from 'react';
import Map, { Marker } from 'react-map-gl';
import { productItems } from '../ProductHeader/ProductItems';
import '../MapsAPI/MapsAPI.css';

function MapsAPI({ index }) {
	// State to manage the map's view state (longitude, latitude, and zoom level)
	const [viewState, setViewState] = useState({
		longitude: -9.136263397237343,
		latitude: 38.725934065537935,
		zoom: 4,
	});

	// useEffect to update the viewState whenever the index prop changes
	useEffect(() => {
		if (index !== null && index !== undefined) {
			const selectedLocation = productItems[index]; 
			setViewState({
				longitude: selectedLocation.long,
				latitude: selectedLocation.lat,
				zoom: 2,
			});
		}
	}, [index]);

	const apiKey = process.env.REACT_APP_API_KEY; 

	return (
		<>
			
			<Map
				{...viewState}
				reuseMaps
				mapStyle='mapbox://styles/xgant/clnkeipwu001601qw7oai3a93' 
				mapboxAccessToken={apiKey}
				initialViewState={viewState} 
				onMove={e => setViewState(e.viewState)} 
				style={{ width: 600, height: 400 }} 
			>
				{/* Render markers for each location in the productItems array */}
				{productItems.map((location, index) => (
					<div className='mapMarkers' key={index}>
						{/* Marker component representing a location on the map */}
						<Marker longitude={location.long} latitude={location.lat}>
							<span className='mapMarker'>
								<i className='fa-solid fa-location-dot'></i> 
							</span>
						</Marker>
					</div>
				))}
			</Map>
		</>
	);
}

export default MapsAPI;
