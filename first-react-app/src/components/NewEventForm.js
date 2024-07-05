import './NewEventForm.css'
import {useState} from "react";


export default function NewEventForm({addEvent}) {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('earth');

    const resetForm = () => {
        setTitle('');
        setDate('');
        setLocation('earth');
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const event = {
            title: title,
            date: date,
            location: location,
            id: Math.floor(Math.random() * 10000)
        }
        addEvent(event);
        resetForm();
    }
    return (
        <form className={'new-event-form'} onSubmit={handleSubmit}>
            <label>
                <span>Title:</span>
                <input
                    type={'text'}
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </label>
            <label>
                <span>Event date:</span>
                <input
                    type={'date'}
                    onChange={(e) => setDate(e.target.value)}
                    value={date}
                />
            </label>
            <label>
                <span>Location:</span>
                <select
                    onChange={(e) => setLocation(e.target.value)}
                    value={location}
                >
                    <option value={'earth'}>Earth</option>
                    <option value={'mars'}>Mars</option>
                    <option value={'moon'}>Moon</option>
                </select>
            </label>
            <button>Submit</button>
        </form>

    )
}
