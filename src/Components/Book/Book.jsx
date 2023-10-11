import './Book.css';
import { productItems } from '../ProductHeader/ProductItems';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';

const Book = () => {
	/******************* LOCATION **************** */
	const [location, setLocation] = useState('Location');
	const [selectedItem, setSelectedItem] = useState(null);
	const [isOpen, setIsOpen] = useState(false);

	const handleItemClick = (item, itemIndex) => {
		setLocation(item.title);
		setSelectedItem(itemIndex);
		setIsOpen(false);
	};

	/*********************  CALENDAR  ************************ */
	const [openDate, setOpenDate] = useState(false);
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		},
	]);

	const [openOptions, setOpenOptions] = useState(false);
	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		room: 1,
	});

	const handleOption = (name, operation) => {
		setOptions(prev => {
			return {
				...prev,
				[name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
			};
		});
	};

	return (
		<div className='bookContainer'>
			<div className='bookWrapper'>
				<div onBlur={() => setIsOpen(false)} onClick={() => setIsOpen(!isOpen)} tabIndex={0} className='bookItems'>
					<span className='bookLocation'>{location}</span>
					<div className='bookDivider'></div>
					<div className='bookCaret'></div>
					<ul className={isOpen ? 'bookList' : 'bookListShow'}>
						{productItems.map((item, index) => (
							<li className={selectedItem === index ? 'bookItemSelected' : 'bookItem'} key={index} onClick={() => handleItemClick(item, index)}>
								{item.title}
							</li>
						))}
					</ul>
				</div>
				<div className='bookItems'>
					<i className='fa-solid fa-calendar-days' onClick={() => setOpenDate(!openDate)}></i>
					<span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(date[0].endDate, 'dd/MM/yyyy')}`} </span>
					{openDate && <DateRange editableDateInputs={true} onChange={item => setDate([item.selection])} moveRangeOnFirstSelection={false} ranges={date} className='date' />}
				</div>

				<div className='bookItems'>
					<i className='fa-solid fa-person'></i>
					<span>
						{options.adult} adult, {options.children} children, {options.room} room
					</span>
					<div className='options'>
						<div className='optionItem'>
							<span className='optiontext'>Adult</span>
							<div className='optionCounter'>
								<button className='optionCounterButton' onClick={() => handleOption('adult', 'd')} disabled={options.adult <= 1}>
									-
								</button>
								<span className='optionCounterNumber'>{options.adult}</span>
								<button className='optionCounterButton' onClick={() => handleOption('adult', 'i')}>
									+
								</button>
							</div>
						</div>
						<div className='optionItem'>
							<span className='optiontext'>Children</span>
							<div className='optionCounter'>
								<button className='optionCounterButton' onClick={() => handleOption('children', 'd')} disabled={options.children <= 0}>
									-
								</button>
								<span className='optionCounterNumber'>{options.children}</span>
								<button className='optionCounterButton' onClick={() => handleOption('children', 'i')}>
									+
								</button>
							</div>
						</div>
						<div className='optionItem'>
							<span className='optiontext'>Room</span>
							<div className='optionCounter'>
								<button className='optionCounterButton' onClick={() => handleOption('room', 'd')} disabled={options.room <= 1}>
									-
								</button>
								<span className='optionCounterNumber'>{options.room}</span>
								<button className='optionCounterButton' onClick={() => handleOption('room', 'i')}>
									+
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Book;
