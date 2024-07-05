import React from "react";

export default function EventList({events, handleClick}) {
    return (
        <div>
            {events.map((event, index) => (
                <React.Fragment key={event.id}>
                    <h2 key={event.id} onClick={() => handleClick(event.id)}>{event.title}</h2>
                    <p>{event.location} - {event.date}</p>
                    <button onClick={() => handleClick(event.id)}>Delete</button>
                </React.Fragment>
            ))}
        </div>
    )
}
