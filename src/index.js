import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './Components/ChangeMode/ChangeMode';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</BrowserRouter>,
);
