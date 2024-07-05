import {useState} from "react";
import './TripList.css'
import {useFetch} from "../hooks/useFetch";

export function TripList() {

    const [url, setUrl] = useState('http://localhost:3000/trips')
    const {data: trips,isPending,error} = useFetch(url)

    return (
        <div className={'trip-list'}>
            <h1>Trip List</h1>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <ul>
                {trips && trips.map(trip => <li key={trip.title}><h3>{trip.title}</h3><p>{trip.price}</p></li>)}
            </ul>
            <div className="filters">
                <button onClick={() => setUrl('http://localhost:3000/trips')}>All</button>
                <button onClick={() => setUrl('http://localhost:3000/trips?loc=europe')}>Europe</button>
                <button onClick={() => setUrl('http://localhost:3000/trips?loc=america')}>America</button>
            </div>
        </div>
    )
}
