import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Destinations from './Pages/Destinations/Destinations';
import Booking from './Pages/Booking/Booking';
import Contacts from './Pages/Contacts/Contacts';
import './App.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/destinations' element={<Destinations />} />
				<Route path='/booking' element={<Booking />} />
				<Route path='/contacts' element={<Contacts />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;