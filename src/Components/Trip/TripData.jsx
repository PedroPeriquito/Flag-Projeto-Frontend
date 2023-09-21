import './Trip.css';


const TripData =(props)=> {
    return (
        <div className='tripCard'>
            <div className='tripImage'>
                <img src={props.img} alt="{props.imgText}" />
            </div>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
        </div>
)}