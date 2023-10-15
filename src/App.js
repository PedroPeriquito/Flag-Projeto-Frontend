import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Destinations from './Pages/Destinations/Destinations';
import Booking from './Pages/Booking/Booking';
import Contacts from './Pages/Contacts/Contacts';
import NotFound from './Pages/NotFound/NotFound';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import { useContext } from 'react';
import { ThemeContext } from './Components/ChangeMode/ChangeMode';
import CreatePost from './api/CreatePost';
import UpdatePost from './api/UpdatePost';
import DeletePost from './api/DeletePost';


export default function App() {
	const { theme, toggleTheme } = useContext(ThemeContext);
	return (
		<div className={`App ${theme === 'canyon' ? 'canyon-theme' : 'forest-theme'}`}>
			<div>Its'a {theme}theme</div>
			<button onClick={toggleTheme}>toggleTheme</button>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/destinations' element={<Destinations />} />
				<Route path='/booking' element={<Booking />} />
				<Route path='/contactUs' element={<Contacts />} />
				<Route path='/create' element={<CreatePost />} />
				<Route path='/update/:id' element={<UpdatePost />} />
				<Route path='/delete/:id' element={<DeletePost />} />
				<Route path='/*' element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
}
